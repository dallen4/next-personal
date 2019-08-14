import React, { Component } from 'react';
import Modal from 'react-modal';
import { FiX, FiCheck } from 'react-icons/fi';
import { FaExclamationTriangle } from 'react-icons/fa';

export default class SubscribeModal extends Component {
    render() {
        let { modalOpen, toggleModal } = this.props;
        return (
            <Modal
                isOpen={modalOpen}
                onRequestClose={toggleModal}
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0,0,0,0.5)',
                    },
                    content: {
                        top: 0,
                        bottom: 0,
                        right: 0,
                        left: 0,
                        border: 0,
                    }
                }}
            >
                <style jsx>{`
                    h3, h2, p {
                        margin: 0;
                        padding: 0;
                    }

                    h3 {
                        padding-bottom: 20px;
                    }
                `}</style>
                <h3>Subscriptions coming soon!</h3>
                <button
                    title={'close'}
                    style={{
                        backgroundColor: 'rgb(23,171,141)',
                        color: 'white',
                        padding: '6px 20px 6px 20px',
                        borderRadius: '5px',
                    }}
                    onClick={toggleModal}
                >
                    <p>
                        Close
                    </p>
                </button>
                {/* <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        paddingBottom: '25px',
                    }}
                >
                    <h2>Subscribe</h2>
                    <button onClick={toggleModal} >
                        <FiX
                            size={'25px'}
                            color={'rgb(66,66,66)'}
                        />
                    </button>
                </div>
                <div
                    style={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                    }}
                >
                    <StepIndicator
                        label={1}
                        status={'success'}
                    />
                    <div
                        style={{ flex: 1 }}
                    >
                        <p>Email</p>
                    </div>
                </div>
                <div
                    style={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                    }}
                >
                    <StepIndicator
                        label={2}
                        status={'error'}
                    />
                    <div
                        style={{ flex: 1 }}
                    >
                        <p>Topics</p>
                        <TopicList
                            topics={['Technology', 'Music', 'Lifestyle']}
                            activeTopics={['Technology', 'Music']}
                        />
                    </div>
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                    }}
                >
                    <button
                        style={{
                            backgroundColor: 'rgb(23,171,141)',
                            color: 'white',
                            padding: '6px 20px 6px 20px',
                            borderRadius: '5px',
                        }}
                        onClick={() => {}}
                    >
                        <p>
                            Subscribe
                        </p>
                    </button>
                </div> */}
            </Modal>
        );
    }
}

const StepIndicator = ({ label, status }) => {

    let icon = null;
    let backgroundColor = 'rgb(246,246,246)';
    let color = 'black';

    if (status === 'success') {
        icon = (
            <FiCheck
                color={'rgb(23,171,141)'}
            />
        );
        backgroundColor = 'rgb(23,171,141)';
        color = 'white';
    } else if (status === 'error') {
        icon = (
            <FaExclamationTriangle
                color={'rgb(236,56,58)'}
            />
        );
        backgroundColor = 'rgb(236,56,58)';
        color = 'white';
    }
    return (
        <div
            style={{
                width: '20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '0 15px 10px 10px',
            }}
        >
            <div
                style={{
                    width: '18px',
                    height: '18px',
                    borderRadius: '11px',
                    padding: '2px',
                    marginBottom: '2px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor,
                }}
            >
                <p
                    style={{
                        fontSize: '0.8rem',
                        color,
                    }}
                >
                    {label}
                </p>
            </div>
            {icon}
        </div>
    );
}

const TopicList = ({ topics, activeTopics }) => topics.map(topic => {

    let { backgroundColor, color } = activeTopics.includes(topic) ? {
        backgroundColor: 'rgb(23,171,141)',
        color: 'white',
    } : {
        backgroundColor: 'rgb(236,236,236)',
        color: 'black',
    }

    return (
        <div
            style={{
                margin: '4px',
                borderRadius: '17px',
                display: 'inline-flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor,
            }}
        >
            <p
                style={{
                    fontSize: '0.8rem',
                    color,
                    padding: '4px',
                    paddingLeft: '7px',
                    paddingRight: '7px',
                    fontWeight: 'lighter',
                }}
            >
                {topic}
            </p>
        </div>
    );
});
