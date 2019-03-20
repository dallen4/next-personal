// TextEditor component
import React, { Component } from 'react';
import {
    Editor,
    EditorState,
    RichUtils,
    convertToRaw,
    convertFromHTML,
} from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { colorPalette } from '../../styles/colors';
import { styles } from './styles';

export default class TextEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rendered: false,
            modified: false,
            editorState: EditorState.createEmpty(),
            showToolbar: true,
        };

        this.focus = () => this.editor.focus();
        this.onChange = (editorState) => this.setState({
            editorState,
            modified: true,
        });
    }

    componentDidMount() {
        this.setState({
            rendered: true
        });
    }

    static getDerivedStateFromProps(props, state) {
        if (props.editorState && !state.modified)
            return { editorState: convertFromHTML(props.editorState) };
        return null;
    }

    onClickEditor = () => {
        this.focus();
        this.getHTML();
    };

    // 3- Show the toolbar
    showToolbar = () => {
        this.setState({
            showToolbar: true,
        });
    };

    handleKeyCommand = (command) => {
        const { editorState } = this.state;
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            this.onChange(newState);
            return true;
        }
        return false;
    };

    toggleToolbar = (inlineStyle) => {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle));
    };

    getHTML = () => {
        let { editorState } = this.state;
        const raw = convertToRaw(editorState.getCurrentContent());
        const markup = draftToHtml(raw);
        return markup;
    };

    render() {
        const { editorState } = this.state;

        const toolbarStyle = {
            display: 'block',
            backgroundColor: colorPalette.blue,
            color: 'white',
            padding: 10,
            borderTopLeftRadius: '5px',
            borderTopRightRadius: '5px',
        };
        return (
            <div style={{ maxWidth: '60%' }}>
                <div style={toolbarStyle} >
                    {this.state.showToolbar && (
                        <ToolBar
                            editorState={editorState}
                            onToggle={this.toggleToolbar}
                        />
                    )}
                </div>
                <div
                    style={{
                        backgroundColor: colorPalette.white,
                        padding: '10px',
                        borderBottomLeftRadius: '5px',
                        borderBottomRightRadius: '5px',
                        minHeight: '200px',
                    }}
                    onClick={this.onClickEditor}
                >
                    {this.state.rendered && (
                        <Editor
                            customStyleMap={styleMap}
                            editorState={editorState}
                            handleKeyCommand={this.handleKeyCommand}
                            onChange={this.onChange}
                            placeholder="Tell a story..."
                            spellCheck={true}
                            ref={ref => this.editor = ref}
                            onBlur={() => this.props.onContentChange(this.getHTML())}
                        />
                    )}
                </div>
            </div>
        );
    }
}

// Custom overrides for each style
const styleMap = {
    CODE: {
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        fontFamily: '\'Source Code Pro\', monospace',
        padding: 4,
    },
    BOLD: {
        fontWeight: 'bold',
    },
    ITALIC: {
        fontStyle: 'italic',
    },
    UNDERLINE: {
        textDecoration: 'underline',
    },
    STRIKETHROUGH: {
        textDecoration: 'line-through',
    },
};

class ToolbarButton extends React.Component {
    constructor() {
        super();
        this.onToggle = (e) => {
            e.preventDefault();
            this.props.onToggle(this.props.style);
        };
    }

    render() {
        let dynamicStyle = this.props.active ? styleMap[this.props.style] : {};
        const buttonStyle = {
            padding: 10,
            ...dynamicStyle,
        };
        return (
            <span onMouseDown={this.onToggle} style={buttonStyle}>
                {this.props.label}
            </span>
        );
    }
}

var toolbarItems = [
    { label: 'B', style: 'BOLD' },
    { label: 'I', style: 'ITALIC' },
    { label: 'U', style: 'UNDERLINE' },
    { label: 'S', style: 'STRIKETHROUGH' },
    { label: 'Code', style: 'CODE' },
];

const ToolBar = (props) => {
    var currentStyle = props.editorState.getCurrentInlineStyle();
    return (
        <div>
            {toolbarItems.map((toolbarItem) => (
                <ToolbarButton
                    key={toolbarItem.label}
                    active={currentStyle.has(toolbarItem.style)}
                    label={toolbarItem.label}
                    onToggle={props.onToggle}
                    style={toolbarItem.style}
                />
            ))}
        </div>
    );
};
