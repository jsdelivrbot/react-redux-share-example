import React, { Component } from 'react';
import { connect } from 'react-redux';

class MessagesBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <ul>{ this.renderMessages.call(this) }</ul>;
  }

  renderMessages() {
    return this.props.messages.map((m, i) => {
      return <li key={ i }>{ m.text }</li>
    });
  }
}

const mapStateToProps = state => ({ messages: state.messages });

export default connect(mapStateToProps)(MessagesBox);
