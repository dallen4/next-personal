import React from 'react';
import Head from 'next/head';
import VisibilitySensor from 'react-visibility-sensor';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { IoLogoNodejs, IoLogoJavascript } from 'react-icons/io';
import '../styles/base.css';
import '../styles/index.css';

let scrollToComponent = () => {};
let innerHeight = 400;

export default class Home extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            activeSection: 'home'
        };

        this.updateActiveSection = this.updateActiveSection.bind(this);

    }

    componentDidMount() {
        scrollToComponent = require('react-scroll-to-component');
        if (window)
            innerHeight = window.innerHeight;
    }

    updateActiveSection = (isVisible, section) => {
        if (isVisible) {
            scrollToComponent(this[section], { duration: 500 });
            this.setState({ activeSection: section });
        }
    };

    render() {

        let { innerHeight, activeSection } = this.state;

        let sensorConfig = {
            partialVisibility: true,
            offset: {
                top: innerHeight * 0.25,
                bottom: innerHeight * 0.25,
            },
        };

        return (
            <div>
                <Head>
                    <title>Nieky Allen</title>
                </Head>
                <div style={{ width: '80%', marginLeft: '10%', marginRight: '10%', paddingTop: '15px', position: 'fixed', display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }} >
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
                <FiChevronUp
                    onClick={() => scrollToComponent(this.home)}
                    style={{ display: activeSection !== 'home' ? 'block' : 'none', position: 'fixed', bottom: 0, right: 0 }}
                    size={45}
                    color="white"
                />
                <VisibilitySensor
                    {...sensorConfig}
                    onChange={isVisible => this.updateActiveSection(isVisible, 'home')}
                >
                    <div
                        ref={ref => this.home = ref}
                        className="fullscreen-container parallax-bg"
                        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a20bc6324f6ef2969d9a7cae56b8d4d1&auto=format&fit=crop&w=1000&q=95")' }}
                    >
                        <div style={{ height: '100%', width: '100%', backgroundColor: 'rgba(0.2, 0.3, 2, 0.7)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }} >
                            <div style={{ height: '50%', marginTop: '15%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }} >
                                <h1 style={{ color: 'rgb(22, 175, 101)' }} >hey, I'm Nieky.</h1>
                                <h3 style={{ color: 'rgb(28, 109, 161)' }} >thanks for checking out my site</h3>
                                <h2 style={{ color: 'rgb(252, 154, 31)' }} >Software Engineer</h2>
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
            </div>
        )
    }
}
