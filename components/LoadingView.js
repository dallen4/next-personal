import React from 'react';
import { BarLoader } from 'react-spinners';

const LoadingView = ({ loading, message, error, errorMsg, fullscreen, dark }) => {
    return (
        <div
            style={{
                height: fullscreen ? '100vh' : '100%',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <style jsx>{`
                .barWrapper {
                    background-color: rgba(23,171,141, 0.3);
                }
            `}</style>
            <div className={'barWrapper'} >
                <BarLoader
                    color={'rgb(23,171,141)'}
                    loading={loading && !error}
                />
            </div>
            <p style={dark ? {} : { color: 'white' }} >{error ? errorMsg : message}</p>
        </div>
    );
}

LoadingView.defaultProps = {
    loading: true,
    message: 'loading...',
    error: null,
    fullscreen: true,
    dark: false,
};

export default LoadingView;
