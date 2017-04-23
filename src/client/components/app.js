import React, { Component } from 'react';

import ChatInput from '../containers/chat-input';
import MessagesBox from '../containers/messages-box';

export default class App extends Component {
  render() {
    return (
      <div>
        <MessagesBox/>
        <ChatInput/>
      </div>
    );
  }
}
