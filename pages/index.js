import React from 'react';
import Head from 'next/head';
import VisibilitySensor from 'react-visibility-sensor';
import ScrollIndicatorPage from '../components/ScrollIndicatorPage';
import CircleGraph from '../components/CircleGraph';
import { Transition } from 'react-spring';
import {
    FaServer,
    FaUser,
    FaDesktop,
    FaMobileAlt,
    FaGithub
} from 'react-icons/fa';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { IoLogoNodejs } from 'react-icons/io';
import '../styles/index.css';
import { styles } from '../styles';
import { colorPalette } from '../config/color';
import Footer from '../components/Footer';

// init with default values to compensate for SSR
let scrollToComponent = () => {};
let innerHeight = 400;

export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeSection: 'home',
            isScrolling: false,
            sectionsLoaded: ['home'],
        };

        this.updateActiveSection = this.updateActiveSection.bind(this);
        this.backToTop = this.backToTop.bind(this);
        this.renderMeta = this.renderMeta.bind(this);
        this.renderNavLinks = this.renderNavLinks.bind(this);
    }

    componentDidMount() {
        // declare new values when mounted on client side
        scrollToComponent = require('react-scroll-to-component');
        if (window) innerHeight = window.innerHeight;
    }

    updateActiveSection = (isVisible, section) => {
        let { sectionsLoaded } = this.state;

        if (this.state.isScrolling) return;

        if (isVisible) {
            if (!sectionsLoaded.includes(section))
                sectionsLoaded.push(section);

            this.setState({
                activeSection: section,
                sectionsLoaded,
            });
        }
    };

    backToTop = () => {
        this.setState({ isScrolling: true }, () => {
            scrollToComponent(this.home, { duration: 500 });
            this.setState({ isScrolling: false });
        });
    };

    renderMeta = () => (
        <Head>
            <title>Nieky Allen</title>
            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <meta name="theme-color" content="#000000" />
            <meta name="description" content="personal website for Nieky Allen" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        </Head>
    );

    renderNavLinks() {
        let { activeSection } = this.state;

        let navLinks = [
            {
                key: 'home',
                label: 'home',
            },
            {
                key: 'about',
                label: 'about',
            },
            {
                key: 'tech',
                label: 'technologies',
            },
            {
                key: 'projects',
                label: 'projects',
            },
        ];

        return (
            <div style={styles.navContainer} >
                {navLinks.map(({ key, label }) => {
                    if (key === 'home') return;

                    return (
                        <p
                            key={key}
                            onClick={() => scrollToComponent(this[key], { align: 'top' })}
                            className="nav-link"
                            style={{
                                ...styles.navLink,
                                textDecoration: activeSection === key ? 'underline' : 'none',
                            }}
                        >
                            {label}
                        </p>
                    );
                })}
            </div>
        );
    }

    render() {
        let { activeSection, sectionsLoaded } = this.state;

        let sensorConfig = {
            partialVisibility: true,
            offset: {
                top: innerHeight * 0.55,
                bottom: innerHeight * 0.55,
            },
        };

        let backToTopButtonStyles = {
            ...styles.backTopButton,
            display: activeSection !== 'home' ? 'block' : 'none',
        };

        return (
            <ScrollIndicatorPage>
                {this.renderMeta()}
                {this.renderNavLinks()}
                <div style={backToTopButtonStyles}>
                    <FiChevronUp
                        className="button"
                        onClick={this.backToTop}
                        size={45}
                        color="white"
                    />
                </div>
                <VisibilitySensor
                    {...sensorConfig}
                    onChange={(isVisible) => this.updateActiveSection(isVisible, 'home')}
                >
                    <section
                        ref={(ref) => (this.home = ref)}
                        className="fullscreen-container parallax-bg"
                    >
                        <div
                            className="home-section-content-container"
                            style={styles.homeSectionContentContainer}
                        >
                            <div style={styles.homeSectionContent}>
                                <h1 style={styles.homeSectionH1}>hey, i'm Nieky.</h1>
                                <h3 style={styles.homeSectionH3}>
                                    thanks for checking out my site
                                </h3>
                                <h4 style={styles.homeSectionH2}>
                                    i'm a full stack javascript engineer
                                </h4>
                            </div>
                            <FiChevronDown
                                onClick={() => scrollToComponent(this.about)}
                                size={55}
                                color="white"
                            />
                        </div>
                    </section>
                </VisibilitySensor>
                <VisibilitySensor
                    {...sensorConfig}
                    onChange={(isVisible) => this.updateActiveSection(isVisible, 'about')}
                >
                    {({ isVisible }) => (
                        <section
                            ref={(ref) => (this.about = ref)}
                            id="about"
                            style={styles.aboutSectionContainer}
                        >
                            <Transition
                                items={isVisible || sectionsLoaded.includes('about')}
                                from={{ opacity: 0 }}
                                enter={{ opacity: 1 }}
                                leave={{ opacity: 0 }}
                                config={{ duration: 750 }}
                            >
                                {(isVisible) =>
                                    isVisible &&
                                    (({ opacity }) => (
                                        <div
                                            style={{
                                                opacity,
                                                ...styles.aboutSectionContent
                                            }}
                                        >
                                            <h1 style={styles.aboutSectionHeader} >
                                                more about me
                                            </h1>
                                            <div
                                                className="responsive-projects"
                                                style={styles.aboutSectionBodyContainer}
                                            >
                                                <div style={styles.aboutSectionBioWrapper} >
                                                    <div style={styles.aboutSectionInfoContainer} >
                                                        <h3 style={styles.aboutSectionInfoLabel} >
                                                            from
                                                        </h3>
                                                        <p style={styles.aboutSectionInfoValue} >
                                                            kansas city, mo
                                                        </p>
                                                    </div>
                                                    <div style={styles.aboutSectionInfoContainer} >
                                                        <h3 style={styles.aboutSectionInfoLabel} >
                                                            based in
                                                        </h3>
                                                        <p style={styles.aboutSectionInfoValue} >
                                                            chicago, il
                                                        </p>
                                                    </div>
                                                    <div style={styles.aboutSectionInfoContainer} >
                                                        <h3 style={styles.aboutSectionInfoEduHeader} >
                                                            education
                                                        </h3>
                                                        <div style={styles.aboutSectionInfoEduItem} >
                                                            <p style={styles.aboutSectionInfoEduLabel} >
                                                                <b style={styles.degreeLabel} >bachelor's</b>
                                                                {' '}loyola university chicago{' '}
                                                                <span
                                                                    className="code"
                                                                    style={styles.degreeYear}
                                                                >
                                                                    2017
                                                                </span>
                                                            </p>
                                                            <p style={styles.aboutSectionInfoEduValue} >
                                                                software engineering
                                                            </p>
                                                            <p style={styles.aboutSectionInfoEduValue} >
                                                                minors in computer crime & forensics and communications studies
                                                            </p>
                                                        </div>
                                                        <div style={styles.aboutSectionInfoEduItem} >
                                                            <p style={styles.aboutSectionInfoEduLabel} >
                                                            <b style={styles.degreeLabel} >master's</b>
                                                                {' '}loyola university chicago{' '}
                                                                <span
                                                                    className="code"
                                                                    style={styles.degreeYear}
                                                                >
                                                                    2018
                                                                </span>
                                                            </p>
                                                            <p style={styles.aboutSectionInfoEduValue} >
                                                                software engineering
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div style={styles.aboutSectionRightWrapper} >
                                                    <div style={styles.aboutSectionRightTextContainer} >
                                                        <h4 style={styles.aboutSectionRightText} >
                                                            i specialize in web and mobile application development
                                                        </h4>
                                                    </div>
                                                    <div style={styles.aboutSectionRightIconsContainer} >
                                                        <FaDesktop
                                                            size={100}
                                                            color="white"
                                                        />
                                                        <FaMobileAlt
                                                            size={100}
                                                            color="white"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </Transition>
                        </section>
                    )}
                </VisibilitySensor>
                <div style={styles.fullstackDivider} >
                    <FaUser {...styles.fullstackIcons} />
                    <div style={styles.fullstackConnection} ></div>
                    <FaServer {...styles.fullstackIcons} />
                </div>
                <VisibilitySensor
                    {...sensorConfig}
                    onChange={(isVisible) => this.updateActiveSection(isVisible, 'tech')}
                >
                    {({ isVisible }) => (
                        <section
                            ref={(ref) => (this.tech = ref)}
                            id="technologies"
                            style={styles.techSectionContainer}
                        >
                            <Transition
                                items={isVisible || sectionsLoaded.includes('tech')}
                                from={{ opacity: 0 }}
                                enter={{ opacity: 1 }}
                                leave={{ opacity: 0 }}
                                config={{ duration: 750 }}
                            >
                                {(isVisible) =>
                                    isVisible &&
                                    (({ opacity }) => (
                                        <div
                                            style={{
                                                opacity,
                                                ...styles.techSectionContentContainer
                                            }}
                                        >
                                            <h1 style={styles.techSectionHeader} >
                                                technologies
                                            </h1>
                                            <div
                                                className="responsive-tech"
                                                style={styles.iconRowContainer}
                                            >
                                                <div style={styles.iconContainer}>
                                                    <div style={styles.iconVisualsWrapper}>
                                                        <img
                                                            src="/static/img/language-javascript.png"
                                                            style={styles.icon}
                                                            // used to be 65x65 (wxh)
                                                        />
                                                        <CircleGraph
                                                            size="120px"
                                                            percentage={90}
                                                            barColor={colorPalette.orange}
                                                            animate
                                                        />
                                                    </div>
                                                    <p style={styles.iconLabel}>JavaScript (ES5+)</p>
                                                </div>
                                                <div style={styles.iconContainer}>
                                                    <div style={styles.iconVisualsWrapper} >
                                                        <img
                                                            src="/static/img/React-icon.png"
                                                            style={styles.icon}
                                                        />
                                                        <CircleGraph
                                                            size="120px"
                                                            percentage={85}
                                                            barColor={colorPalette.blue}
                                                            animate
                                                        />
                                                    </div>
                                                    <p style={styles.iconLabel}>React.js / React Native</p>
                                                </div>
                                                <div style={styles.iconContainer}>
                                                    <div style={styles.iconVisualsWrapper} >
                                                        <IoLogoNodejs
                                                            color="white"
                                                            size={65}
                                                            // used to be size 75
                                                        />
                                                        <CircleGraph
                                                            size="120px"
                                                            percentage={85}
                                                            barColor={colorPalette.green}
                                                            animate
                                                        />
                                                    </div>
                                                    <p style={styles.iconLabel}>Node.js</p>
                                                </div>
                                            </div>
                                            <div
                                                className="responsive-tech"
                                                style={{
                                                    flex: 1,
                                                    justifyContent: 'space-around',
                                                    alignItems: 'center',
                                                    marginBottom: '50px',
                                                }}
                                            >
                                                <div style={styles.barGraphColumnContainer} >
                                                    <div style={styles.barGraphContainer} >
                                                        <div style={styles.barGraphLabelContainer} >
                                                            <p style={styles.barGraphLabel} >
                                                                HTML5
                                                            </p>
                                                        </div>
                                                        <div style={styles.barContainer} >
                                                            <div style={{
                                                                    width: '75%',
                                                                    ...styles.bar
                                                                }}>
                                                            <p style={styles.barPrecentage} >75%</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div style={styles.barGraphContainer} >
                                                        <div style={styles.barGraphLabelContainer} >
                                                            <p style={styles.barGraphLabel} >CSS3</p>
                                                        </div>
                                                        <div style={styles.barContainer} >
                                                            <div style={{
                                                                    width: '70%',
                                                                    ...styles.bar
                                                                }}>
                                                            <p style={styles.barPrecentage} >70%</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div style={styles.barGraphContainer} >
                                                        <div style={styles.barGraphLabelContainer} >
                                                            <p style={styles.barGraphLabel} >GraphQL</p>
                                                        </div>
                                                        <div style={styles.barContainer} >
                                                            <div style={{
                                                                    width: '65%',
                                                                    ...styles.bar
                                                                }}>
                                                            <p style={styles.barPrecentage} >65%</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div style={styles.barGraphContainer} >
                                                        <div style={styles.barGraphLabelContainer} >
                                                            <p style={styles.barGraphLabel} >UI Design</p>
                                                        </div>
                                                        <div style={styles.barContainer} >
                                                            <div style={{
                                                                    width: '65%',
                                                                    ...styles.bar
                                                                }}>
                                                            <p style={styles.barPrecentage} >65%</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div style={styles.barGraphColumnContainer} >
                                                    <div style={styles.barGraphContainer} >
                                                        <div style={styles.barGraphLabelContainer} >
                                                            <p style={styles.barGraphLabel} >Express</p>
                                                        </div>
                                                        <div style={styles.barContainer} >
                                                            <div style={{
                                                                    width: '80%',
                                                                    ...styles.bar
                                                                }}>
                                                            <p style={styles.barPrecentage} >80%</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div style={styles.barGraphContainer} >
                                                        <div style={styles.barGraphLabelContainer} >
                                                            <p style={styles.barGraphLabel} >MongoDB</p>
                                                        </div>
                                                        <div style={styles.barContainer} >
                                                            <div style={{
                                                                    width: '75%',
                                                                    ...styles.bar
                                                                }}>
                                                            <p style={styles.barPrecentage} >75%</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div style={styles.barGraphContainer} >
                                                        <div style={styles.barGraphLabelContainer} >
                                                            <p style={styles.barGraphLabel} >Firebase</p>
                                                        </div>
                                                        <div style={styles.barContainer} >
                                                            <div style={{
                                                                    width: '80%',
                                                                    ...styles.bar
                                                                }}>
                                                            <p style={styles.barPrecentage} >80%</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div style={styles.barGraphContainer} >
                                                        <div style={styles.barGraphLabelContainer} >
                                                            <p style={styles.barGraphLabel} >Heroku</p>
                                                        </div>
                                                        <div style={styles.barContainer} >
                                                            <div style={{
                                                                    width: '75%',
                                                                    ...styles.bar
                                                                }}>
                                                            <p style={styles.barPrecentage} >75%</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </Transition>
                        </section>
                    )}
                </VisibilitySensor>
                <VisibilitySensor
                    {...sensorConfig}
                    onChange={(isVisible) => this.updateActiveSection(isVisible, 'projects')}
                >
                    {({ isVisible }) => (
                        <section
                            ref={(ref) => (this.projects = ref)}
                            id="projects"
                            style={styles.projectsContainer}
                        >
                            <Transition
                                items={isVisible || sectionsLoaded.includes('projects')}
                                from={{ opacity: 0 }}
                                enter={{ opacity: 1 }}
                                leave={{ opacity: 0 }}
                                config={{ duration: 750 }}
                            >
                                {(isVisible) =>
                                    isVisible &&
                                    (({ opacity }) => (
                                        <div
                                            style={{
                                                opacity,
                                                ...styles.projectsContentContainer
                                            }}
                                        >
                                            <h1 style={styles.projectsHeader} >
                                                projects
                                            </h1>
                                            <div
                                                className="responsive-projects"
                                                style={styles.projectsSections}
                                            >
                                                <div style={styles.projectsClosedSection} >
                                                    <h2 className="code" style={styles.projectsSectionHeader} >
                                                        ~/closed_source
                                                        <span style={styles.projectsSectionHeaderArrow} >
                                                            >
                                                        </span>
                                                    </h2>

                                                    <div style={styles.closedProjectContainer} >
                                                        <a href="https://www.axlry.com" >
                                                            <img
                                                                src="/static/img/axlry-logo.png"
                                                                style={styles.axlryLogo}
                                                            />
                                                        </a>
                                                        <p style={styles.closedProjectRole} >
                                                            cofounder<br/>
                                                            head of technological development
                                                        </p>
                                                        <p style={styles.closedProjectDesc} >
                                                            cross-platform mobile app to connect artists, managers, and labels with music video directors
                                                        </p>
                                                    </div>

                                                    <div style={styles.closedProjectContainer} >
                                                        <a
                                                            href="https://www.biggerthanbasketball.org"
                                                            style={styles.btbBackground}
                                                        >
                                                            <img
                                                                src="https://res.cloudinary.com/bigger-than-basketball/image/upload/fl_progressive/Bigger_Than_Basketball_LOGO_high_res.png"
                                                                style={styles.btbLogo}
                                                            />
                                                        </a>
                                                        <p style={styles.closedProjectRole} >
                                                            freelance web engineer
                                                        </p>
                                                        <p style={styles.closedProjectDesc} >
                                                            non-profit organization raising awareness and funding for research in Crohn's disease
                                                        </p>
                                                    </div>
                                                </div>
                                                <div style={styles.projectsOpenSection} >
                                                    <h2 className="code" style={styles.projectsSectionHeader} >
                                                        ~/open_source
                                                        <span style={styles.projectsSectionHeaderArrow} >
                                                            >
                                                        </span>
                                                    </h2>
                                                    <div style={styles.openProjectsList} >
                                                        <div style={styles.openProjectContainer} >
                                                            <a 
                                                                style={{ textDecoration: 'none' }}
                                                                href="https://github.com/dallen4/next-boilerplate"
                                                            >
                                                                <h3 className="code" style={styles.openProjectTitle} >
                                                                    next-boilerplate
                                                                </h3>
                                                                <FaGithub
                                                                    color="white"
                                                                    size={20}
                                                                    style={styles.githubIcon}
                                                                />
                                                            </a>
                                                            <p style={styles.openProjectDesc} >
                                                                simple boilerplate for Next.js + ExpressJS apps
                                                            </p>
                                                        </div>
                                                        <div style={styles.openProjectContainer} >
                                                            <h3 className="code" style={styles.openProjectTitle} >
                                                                RealMark
                                                            </h3>
                                                            <p style={styles.openProjectDesc} >
                                                                cross-platform mobile app for collaborative markdown note-taking
                                                            </p>
                                                        </div>
                                                        <div style={styles.openProjectContainer} >
                                                            <a 
                                                                style={{ textDecoration: 'none' }}
                                                                href="https://github.com/dallen4/volt-compiler"
                                                            >
                                                                <h3 className="code" style={styles.openProjectTitle} >
                                                                    volt-compiler
                                                                </h3>
                                                                <FaGithub
                                                                    color="white"
                                                                    size={20}
                                                                    style={styles.githubIcon}
                                                                />
                                                            </a>
                                                            <p style={styles.openProjectDesc} >
                                                                compiler for an alternative syntax for bootstrapping Firebase Security Rules
                                                            </p>
                                                        </div>
                                                        <div style={styles.openProjectContainer} >
                                                            <a 
                                                                style={{ textDecoration: 'none' }}
                                                                href="https://github.com/dallen4/react-scroll-indicator"
                                                            >
                                                                <h3 className="code" style={styles.openProjectTitle} >
                                                                    react-scroll-indicator
                                                                </h3>
                                                                <FaGithub
                                                                    color="white"
                                                                    size={20}
                                                                    style={styles.githubIcon}
                                                                />
                                                            </a>
                                                            <p style={styles.openProjectDesc} >
                                                                simple React component from a scrolling progress bar
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </Transition>
                        </section>
                    )}
                </VisibilitySensor>
                <Footer/>
            </ScrollIndicatorPage>
        );
    }
}
