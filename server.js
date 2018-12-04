// import app & server modules
const express = require('express');
const next = require('next');
const LRUCache = require('lru-cache');

// import express middlewares
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';

// init next app
const app = next({ dev });
const handler = app.getRequestHandler();

// init cache
const ssrCache = new LRUCache({
    max: 100,
    maxAge: 1000 * 60 * 60,
});

app.prepare().then(() => {

    const server = express();

    // mount express middleware
    server.use(cors());
    server.use(helmet());
    server.use(compression());

    // configure req logging
    let logMode = dev ? 'dev' : 'combined';
    server.use(morgan(logMode));

    if (!dev)
        server.get('/', (req, res) => {
            renderWithCache(req, res, '/');
        });

    server.get('*', (req, res) => {
        return handler(req, res);
    });

    server.listen(PORT, (err) => {
        if (err) throw err;
        console.log(`server started on port ${PORT}...`);
    });

}).catch(error => console.error(error));

async function renderWithCache(req, res, pagePath, queryParams) {

    const key = `${req.url}`;

    // if page is cached, send from cache
    if (ssrCache.has(key)) {
        res.setHeader('x-cache', 'HIT');
        console.log('sending from cache');
        res.send(ssrCache.get(key));
        return;
    }

    try {

        // if page not in cache, render
        const html = await app.renderToHTML(req, res, pagePath, queryParams);

        // if page contains error, don't cache
        if (res.statusCode !== 200) {
            res.send(html);
            return;
        }

        // otherwise, we update the cache and send html
        ssrCache.set(key, html);

        res.setHeader('x-cache', 'MISS');
        res.send(html);

    } catch (error) {
        app.renderError(error, req, res, pagePath, queryParams);
    }

}
