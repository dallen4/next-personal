// TextEditor component
import React, { Component } from 'react';
import 'react-quill/dist/quill.core.css';
import 'react-quill/dist/quill.snow.css';
import { styles } from './styles';

export default class TextEditor extends Component {

    constructor(props) {
        super(props);
        if (typeof window !== 'undefined')
            this.quill = require('react-quill');
    }

    getModules = {
        toolbar: {
            container: [
                [{ 'header': [1, 2, false] }],
                ['bold', 'italic', 'underline','strike', 'blockquote'],
                [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
                ['link'],
                ['clean']
            ],
        },
    };

    render() {
        const Quill = this.quill;

        return (
            <div style={styles.editorContainer} >
                {this.quill && (
                    <Quill
                        ref={ref => this.editor = ref}
                        modules={this.getModules}
                        {...this.props}
                    >
                        <div style={styles.inputContainer} />
                    </Quill>
                )}
            </div>
        );
    }
}
