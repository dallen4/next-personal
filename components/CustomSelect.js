
import React, { Component } from 'react';
import Select from 'react-select';

export default class CustomSelect extends Component {
    constructor(props) {
        super(props);

        this.state = {
            categoryOptions: [],
            categories: [],
            categoryInput: '',
        };

        this._onCategoriesChange = this._onCategoriesChange.bind(this);
        this._onCategoryInputChange = this._onCategoryInputChange.bind(this);
        this._onCategoryKeyDown = this._onCategoryKeyDown.bind(this);
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

    value = () => this.state.categories;

    render() {
        let {
            categoryOptions,
            categories,
            categoryInput,
        } = this.state;

        return (
            <Select
                instanceId={'categories'}
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
        );
    }
}
