import React, { Component } from 'react';
import { connect } from 'react-redux';

class Legend extends Component {
    constructor(props) {
        super(props);

        this.state = {search: ''}
    }

    render() {
        return (
            <div className="input-form">
              <form onSubmit={event => this.onSubmit(event.target.value)}>
                <input
                  value={this.state.search}
                  onChange={event => this.onInputChange(event.target.value)}
                />
                <button>
                  Search
                </button>
              </form>
            </div>
        );
    }

    onClickSubmit(event) {
        event.preventDefault();
        let { search } = this.state;
        this.setState( {search: ''});
        this.props.onSubmit(search);
    }
    onInputChange(search) {
        this.setState({search});
    }

export default Legend;
