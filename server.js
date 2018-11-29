// import app & server modules
const express = require('express');
const next = require('next');

// import express middlewares
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });
const handler = app.getRequestHandler();

app.prepare().then(() => {

    const server = express();

    // mount express middleware
    server.use(cors());
    server.use(helmet());
    server.use(compression());

    // configure req logging
    let logMode = dev ? 'dev' : 'combined';
    server.use(morgan(logMode));

    server.get('*', (req, res) => {
        return handler(req, res);
    });

    server.listen(PORT, (err) => {
        if (err) throw err;
        console.log(`server started on port ${PORT}...`);
    });

}).catch(error => console.error(error));
