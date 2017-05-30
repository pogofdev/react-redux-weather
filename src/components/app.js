import React, { Component, PropTypes } from 'react';
import RichTextEditor from 'react-rte';
import SearchBar from '../containers/search_bar';

export default class App extends Component {

    static propTypes = {
        onChange: PropTypes.func
    };

    state = {
        value: RichTextEditor.createValueFromString("<b>chao ban</b>", 'html')
    }

    onChange = (value) => {
        this.setState({ value });
        console.log(value.toString('html'));
        // if (this.props.onChange) {
        //     // Send the changes up to the parent component as an HTML string.
        //     // This is here to demonstrate using `.toString()` but in a real app it
        //     // would be better to avoid generating a string on each change.
        //     this.props.onChange(
        //         value.toString('html')
        //     );
        // }
    };

    render () {
        return (
            <div>
                <SearchBar />
                <RichTextEditor
                    value={this.state.value}
                    onChange={this.onChange}
                />
            </div>
        );
    }
}
