// Editor component

import React, { Component } from 'react';
import Select from 'react-select';
import { Mutation } from 'react-apollo';
import 'react-quill/dist/quill.core.css';
import 'react-quill/dist/quill.snow.css';
import { colorPalette } from '../styles/colors';
import TextInput from '../components/TextInput';
import TextEditor from './TextEditor/TextEditor';

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

        this._onTitleChange = this._onTitleChange.bind(this);
        this._onCategoriesChange = this._onCategoriesChange.bind(this);
        this._onCategoryInputChange = this._onCategoryInputChange.bind(this);
        this._onCategoryKeyDown = this._onCategoryKeyDown.bind(this);
        this._onEditorChange = this._onEditorChange.bind(this);
        this._onSave = this._onSave.bind(this);

    }

    _onTitleChange(event) {

        this.setState({ title: event.target.value });

    }

    _onCategoriesChange = (categories) => {

        this.setState({ categories });

    };

    _onCategoryInputChange = (categoryInput) => {

        this.setState({ categoryInput });

    };

    _onCategoryKeyDown = ({ keyCode }) => {

        if (keyCode === 13) {

            let { categoryOptions, categories, categoryInput } = this.state;

            let category = {
                value: categoryInput.toLowerCase(),
                label: categoryInput.charAt(0).toUpperCase() + categoryInput.substring(1),
            };

            categoryOptions.push(category)

            categories.push(category);

            this._onCategoryInputChange('');
        }
        
    };

    _onEditorChange = (body) => {

        this.setState({ body });

    };

    _onSave = (data) => {
        // TODO
    };

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

        let {
            categoryOptions,
            categories,
            categoryInput,
        } = this.state;

        // TODO break out into own components
        return (
            <div style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
            }} >
                
                <TextInput/>

                
                <Select
                    isMulti
                    placeholder='Search categories or create a new one...'
                    value={categories}
                    styles={{
                        container: (base) => ({ ...base, width: '40%' })
                    }}
                    onChange={this._onCategoriesChange}
                    inputValue={categoryInput}
                    onInputChange={this._onCategoryInputChange}
                    onKeyDown={this._onCategoryKeyDown}
                    isValidNewOption={value => console.log(value)}
                    options={categoryOptions}
                />
                
                <TextEditor/>

                <button style={{ width: '120px', padding: '10px', backgroundColor: colorPalette.blue, color: colorPalette.white }} className='button' >Save</button>

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
