
const stringToProper = (lowercaseString = '') => {
    return lowercaseString.charAt(0).toUpperCase() + lowercaseString.substr(1);
};

export {
    stringToProper,
};
