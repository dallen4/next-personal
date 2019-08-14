import { writePalette } from '../../styles/colors';

const styles = {
    editorContainer: {
        width: '60%',
        borderBottomRightRadius: '5px',
        borderBottomLeftRadius: '5px',
        backgroundColor: writePalette.gray,
    },
    inputContainer: {
        borderColor: writePalette.lightBlue,
        padding: 0,
        height: '350px',
        borderBottomRightRadius: '5px',
        borderBottomLeftRadius: '5px',
        borderWidth: 0,
        backgroundColor: writePalette.white,
    },
};

export { styles };
