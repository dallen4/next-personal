import { homePalette } from '../../styles/colors';

const styles = {
    footer: {
        height: '100px',
        paddingLeft: '5%',
        paddingRight: '5%',
        paddingBottom: '25px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    linkContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    link: {
        margin: '17px',
    },
    icon: {
        color: homePalette.white,
        size: 25,
    },
    copyrightContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    copyright: {
        margin: 0,
        padding: 0,
        color: homePalette.white,
    },
};

export { styles };
