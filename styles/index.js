// Home route styles

import { colorPalette } from '../config/color';

const styles = {
    navContainer: {
        width: '80%',
        marginLeft: '10%',
        marginRight: '10%',
        paddingTop: '15px',
        position: 'fixed',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    navLink: {
        display: 'inline-block',
        padding: '4px',
        backgroundColor: colorPalette.white,
        borderRadius: '4px',
    },
    backTopButton: {
        position: 'fixed',
        bottom: 0,
        right: 0,
        padding: 0,
        marginBottom: '8px',
        borderTopLeftRadius: '5px',
        borderBottomLeftRadius: '5px',
        backgroundColor: 'rgba(180,180,180,0.6)',
    },
    homeSectionContentContainer: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    homeSectionContent: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    homeSectionH1: {
        fontSize: '1.8rem',
        color: colorPalette.green,
    },
    homeSectionH2: {
        color: colorPalette.blue,
    },
    homeSectionH3: {
        color: colorPalette.orange,
    },
    aboutSectionContainer: {
        minHeight: '70vh',
        width: '100%',
        backgroundColor: colorPalette.gray,
    },
    aboutSectionContent: {
        minHeight: '100%',
        height: 'auto',
        width: '90%',
        marginLeft: '5%',
        marginRight: '5%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    aboutSectionHeader: {
        margin: 0,
        padding: 0,
        marginTop: '110px',
        color: colorPalette.orange,
        fontSize: '1.8rem',
    },
    aboutSectionBodyContainer: {
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
    },
    aboutSectionBioWrapper: {
        flex: 1,
        margin: '10px',
        marginTop: '5px',
        marginBottom: '20px',
    },
    aboutSectionInfoContainer: {
        marginBottom: '10px',
    },
    aboutSectionInfoLabel: {
        display: 'inline',
        margin: 0,
        padding: 0,
        color: colorPalette.green,
    },
    aboutSectionInfoValue: {
        display: 'inline',
        margin: 0,
        padding: 0,
        paddingLeft: '12px',
        color: colorPalette.white,
    },
    aboutSectionInfoEduItem: {
        marginBottom: '7px',
    },
    aboutSectionInfoEduHeader: {
        margin: 0,
        marginBottom: '7px',
        padding: 0,
        color: colorPalette.green,
    },
    aboutSectionInfoEduLabel: {
        margin: 0,
        padding: 0,
        color: colorPalette.white,
    },
    degreeLabel: {
        paddingRight: '2px'
    },
    degreeYear: {
        fontSize: '0.9rem',
        paddingLeft: '2px'
    },
    aboutSectionInfoEduValue: {
        margin: 0,
        padding: 0,
        color: colorPalette.white,
        paddingLeft: '12px',
        fontSize: '0.9rem',
    },
    aboutSectionRightWrapper: {
        height: '100%',
        minHeight: '200px',
        width: '100%',
        flex: 1,
        margin: '10px',
        marginTop: '15px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    aboutSectionRightTextContainer: {
        flex: 1,
    },
    aboutSectionRightText: {
        margin: 0,
        textAlign: 'center',
        color: 'rgb(28, 109, 161)',
    },
    aboutSectionRightIconsContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    fullstackDivider: {
        height: '100%',
        width: '86%',
        marginTop: '40px',
        marginLeft: '7%',
        marginRight: '7%',
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    fullstackConnection: {
        flex: 1,
        height: 0,
        marginLeft: '10px',
        marginRight: '10px',
        borderTop: '4px dashed rgb(28, 109, 161)',
    },
    fullstackIcons: {
        size: 50,
        color: 'rgb(211,211,211)',
    },
    techSectionContainer: {
        minHeight: '100vh',
        height: 'auto',
        backgroundColor: colorPalette.gray,
    },
    techSectionContentContainer: {
        minHeight: '100vh',
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    techSectionHeader: {
        margin: 0,
        marginTop: '100px',
        color: 'rgb(22, 175, 101)',
        textAlign: 'center',
        fontSize: '1.8rem',
    },
    iconRowContainer: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    iconContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '20px',
    },
    iconVisualsWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    icon: {
        height: '60px',
    },
    iconLabel: {
        color: colorPalette.white,
    },
    barGraphColumnContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    barGraphContainer: {
        width: '100%',
        height: '20px',
        marginBottom: '18px',
        backgroundColor: 'rgba(180,180,180,0.6)',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    barGraphLabelContainer: {
        height: '20px',
        minWidth: '20%',
        width: 'auto',
        padding: '1px',
    },
    barGraphLabel: {
        display: 'inline',
        color: colorPalette.white,
        fontSize: '0.9rem',
        width: 'auto',
    },
    barContainer: {
        height: '16px',
        width: '80%',
        margin: '2px',
    },
    bar: {
        height: '100%',
        backgroundColor: colorPalette.blue,
    },
    barPrecentage: {
        display: 'inline',
        fontSize: '14px',
        marginLeft: '3px',
        color: colorPalette.white,
    },
    projectsContainer: {
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    projectsContentContainer: {
        height: '100%',
        width: '90%',
        marginLeft: '5%',
        marginRight: '5%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    projectsHeader: {
        margin: 0,
        padding: 0,
        color: 'rgb(28, 109, 161)',
        fontSize: '1.8rem',
        textAlign: 'right',
    },
    projectsSections: {
        justifyContent: 'space-around',
        alignItems: 'flex-start',
    },
    projectsClosedSection: {
        flex: 1,
        margin: '10px',
        marginTop: '5px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    projectsSectionHeader: {
        color: colorPalette.orange,
    },
    projectsSectionHeaderArrow: {
        paddingLeft: '5px',
        color: colorPalette.green,
    },
    closedProjectContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    axlryLogo: {
        width: '213px',
        height: '150px',
    },
    btbLogo: {
        maxHeight: '100px',
    },
    btbBackground: {
        backgroundColor: 'white',
        marginTop: '40px',
        marginBottom: '8px',
        padding: '8px',
    },
    closedProjectRole: {
        alignSelf: 'flex-start',
        margin: 0,
        color: 'white',
        fontSize: '0.9rem',
        fontStyle: 'italic',
    },
    closedProjectDesc: {
        margin: 0,
        paddingTop: '6px',
        color: 'white',
        fontSize: '0.9rem',
    },
    projectsOpenSection: {
        width: '100%',
        flex: 1,
        margin: '10px',
    },
    openProjectsList: {
        margin: '10px',
    },
    openProjectContainer: {
        marginBottom: '20px',
    },
    openProjectTitle: {
        display: 'inline',
        margin: 0,
        paddingBottom: '8px',
        color: 'white',
    },
    openProjectDesc: {
        margin: 0,
        color: 'white',
        fontSize: '0.9rem',
    },
    githubIcon: {
        paddingLeft: '10px',
    },
};

export { styles };
