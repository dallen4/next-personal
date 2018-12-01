import React from 'react';
import Head from 'next/head';
import VisibilitySensor from 'react-visibility-sensor';
import ScrollIndicatorPage from '../components/ScrollIndicatorPage';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { IoLogoNodejs, IoLogoJavascript } from 'react-icons/io';
import '../styles/base.css';
import '../styles/index.css';
import { styles } from '../styles';

let scrollToComponent = () => {};
let innerHeight = 400;

export default class Home extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            activeSection: 'home',
            isScrolling: false,
        };

        this.updateActiveSection = this.updateActiveSection.bind(this);
        this.backToTop = this.backToTop.bind(this);

    }

    componentDidMount() {
        scrollToComponent = require('react-scroll-to-component');
        if (window)
            innerHeight = window.innerHeight;
    }

    updateActiveSection = (isVisible, section) => {
        // console.log(Date.now(), ' ', this.state.isScrolling)

        if (this.state.isScrolling)
            return;

        if (isVisible) {
            // scrollToComponent(this[section], { duration: 500 });
            this.setState({ activeSection: section });
        }
    };

    backToTop = () => {
        this.setState({ isScrolling: true }, () => {
            // console.log(Date.now(), ' ', this.state.isScrolling)
            scrollToComponent(this.home, { duration: 500 });
            setTimeout(this.setState({
                activeSection: 'home',
                isScrolling: false,
            }), 5000);
        });
    };

    render() {

        let { activeSection } = this.state;

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
                <Head>
                    <title>Nieky Allen</title>
                    <meta charset="utf-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                    <meta name="theme-color" content="#000000"/>
                    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                </Head>
                <div style={styles.navContainer} >
                    <p
                        onClick={() => scrollToComponent(this.about)}
                        className="nav-link"
                        style={{ display: 'inline-block', padding: '4px', backgroundColor: 'white', borderRadius: '4px', textDecoration: activeSection === 'about' ? 'underline' : 'none' }}
                    >
                        about
                    </p>
                    <p
                        onClick={() => scrollToComponent(this.tech)}
                        className="nav-link"
                        style={{ display: 'inline-block', padding: '4px', backgroundColor: 'white', borderRadius: '4px', textDecoration: activeSection === 'tech' ? 'underline' : 'none' }}
                    >
                        technologies
                    </p>
                    <p
                        className="nav-link"
                        style={{ display: 'inline-block', padding: '4px', backgroundColor: 'white', borderRadius: '4px' }}
                    >
                        projects
                    </p>
                </div>
                <div style={backToTopButtonStyles} >
                    <FiChevronUp
                        onClick={this.backToTop}
                        size={45}
                        color="white"
                    />
                </div>
                <VisibilitySensor
                    {...sensorConfig}
                    onChange={isVisible => this.updateActiveSection(isVisible, 'home')}
                >
                    <div
                        ref={ref => this.home = ref}
                        className="fullscreen-container parallax-bg"
                        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a20bc6324f6ef2969d9a7cae56b8d4d1&auto=format&fit=crop&w=1000&q=95")' }}
                    >
                        <div style={styles.HomeSectionContentContainer} >
                            <div style={{ height: '50%', marginTop: '0%', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
                                <h1 style={styles.HomeSectionH1} >hey, I'm Nieky.</h1>
                                <h3 style={styles.HomeSectionH3} >thanks for checking out my site</h3>
                                <h2 style={styles.HomeSectionH2} >Software Engineer</h2>
                            </div>
                            <FiChevronDown
                                onClick={() => window.scrollTo(0, window.innerHeight)}
                                size={55}
                                color="white"
                            />
                        </div>
                    </div>
                </VisibilitySensor>
                <VisibilitySensor
                    {...sensorConfig}
                    onChange={isVisible => this.updateActiveSection(isVisible, 'about')}
                >
                    <div
                        ref={ref => this.about = ref}
                        id="about"
                        className="fullscreen-container"
                        style={{ backgroundColor: 'rgb(28, 109, 161)' }}
                    >
                        <h1 style={{ margin: 0 }} >more about me</h1>
                        <div style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }} >
                            <h2 style={{ flex: 1, color: 'rgb(252, 154, 31)' }} >Volt Compiler</h2>
                            <h2 style={{ flex: 1, color: 'rgb(252, 154, 31)' }} >RealMark</h2>
                        </div>
                    </div>
                </VisibilitySensor>
                <VisibilitySensor
                    {...sensorConfig}
                    onChange={isVisible => this.updateActiveSection(isVisible, 'tech')}
                >
                    <div
                        ref={ref => this.tech = ref}
                        id="technologies"
                        className="fullscreen-container parallax-bg"
                        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1473873446975-123c5143248b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=339ba470b071f6b0d7536e7b1619efca&auto=format&fit=crop&w=1400&q=95")' }}
                    >
                        <div style={{ height: '100%', width: '100%', backgroundColor: 'rgba(0.2, 0.3, 2, 0.5)' }} >
                            <h1 style={{ margin: 0, padding: '25px', color: 'rgb(22, 175, 101)', textAlign: 'center' }} >technologies</h1>
                            <div style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }} >
                            <h2 style={{ flex: 1, color: 'rgb(252, 154, 31)' }} >AXLRY</h2>
                            <IoLogoJavascript color="white" size={45} />
                            <IoLogoNodejs color="white" size={45} />
                            <h2 style={{ flex: 1, color: 'rgb(252, 154, 31)' }} >Bigger Than Basketball</h2>
                            </div>
                        </div>
                    </div>
                </VisibilitySensor>
            </ScrollIndicatorPage>
        )
    }
}
