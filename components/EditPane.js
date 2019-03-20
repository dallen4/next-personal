// Editor component

import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { writePalette } from '../styles/colors';
import TextInput from '../components/TextInput';
import TextEditor from './TextEditor/TextEditor';
import CustomSelect from './CustomSelect';

export default class EditPane extends Component {

    constructor(props) {

        super(props);

        this.state = {
            title: '',
            categoryOptions: [],
            categories: [],
            categoryInput: '',
            body: '',
        };

        this._onEditorChange = this._onEditorChange.bind(this);
        this._onSave = this._onSave.bind(this);

    }

    _onEditorChange = (body) => this.setState({ body });

    _onSave = (data) => {
        // TODO
        console.log(this.titleInput.value());
        console.log(this.categorySelect.value());
    };

    render() {

        // TODO break out into own components
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
                
                <TextEditor onContentChange={this._onEditorChange} />

                <button
                    style={{ width: '120px', padding: '10px', backgroundImage: `linear-gradient(to right, ${writePalette.lightBlue}, ${writePalette.blue})`, borderRadius: '5px', color: writePalette.white }}
                    className='button'
                    onClick={this._onSave}
                >
                    Save
                </button>

                {/* <Mutation
                    mutation={NEW_POST}
                    variables={{
                        title,
                        categories,
                        body
                    }}
                    onCompleted={this._onSave}
                >
                    {(mutation, { loading, error }) => {
                        if (loading) {
                            return <h2>loading...</h2>;
                        } else if (error) {
                            return <h3>{error.message}</h3>;
                        } else
                            return (
                                <button onClick={mutation} className='button' >Save</button>
                            );
                        }
                    }
                </Mutation> */}
            </div>
        );
    }
}
