import React from 'react';
import LoadingView from '../components/LoadingView';

export default () => (
    <LoadingView
        fullscreen={true}
        loading={false}
        error={true}
        errorMsg={'Oops! How did you end up here?'}
    />
);
