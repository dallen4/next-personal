
const stringToProper = (lowercaseString = '') => {
    return lowercaseString.charAt(0).toUpperCase() + lowercaseString.substr(1);
};

const formatDate = (date = new Date()) => new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
});

export {
    stringToProper,
    formatDate,
};
