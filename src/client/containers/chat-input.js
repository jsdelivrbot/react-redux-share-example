import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { sendMessage } from '../actions/chat-actions'

class ChatInput extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  render() {
    const onChange = e => this.setState({ value: e.target.value });
    const { value } = this.state;
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <input type='text' onChange={ onChange } value={ value }/>
      </form>
    );
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.sendMessage("Lawrence Vo", this.state.value);
    this.setState({ value: "" });
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ sendMessage }, dispatch);
}

export default connect(null, mapDispatchToProps)(ChatInput);
