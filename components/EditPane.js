// Editor component

import React, { Component } from 'react';
import { writePalette } from '../styles/colors';
import TextInput from '../components/TextInput';
import TextEditor from './TextEditor/TextEditor';
import CustomSelect from './CustomSelect';
import Button from './Button';

export default class EditPane extends Component {

    constructor(props) {
        super(props);

        this.savePost = this.savePost.bind(this);

    }

    containsErrors = () => {
        let errors = [
            this.titleInput.containsError(),
            this.categorySelect.value().length === 0,
            this.contentInput.isEmpty(),
        ];

        return errors.includes(true) ? true : false;
    };

    savePost = () => {
        console.log(this.titleInput.value());
        console.log(this.categorySelect.value());
        console.log(this.contentInput.getHTML());
    };

    render() {
        return (
            <div style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
            }} >

                <TextInput
                    ref={ref => this.titleInput = ref}
                    label={'title'}
                    errorMsg={'Title cannot be empty'}
                />

                <CustomSelect
                    ref={ref => this.categorySelect = ref}
                />

                <TextEditor
                    ref={ref => this.contentInput = ref}
                />

                <Button
                    label={'Save'}
                    onClick={this.savePost}
                    disabled={false}
                />
            </div>
        );
    }
}
