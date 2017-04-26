import React, { Component } from 'react';

import ChatInput from '../containers/chat-input';
import MessagesBox from '../containers/messages-box';

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <h3>
          Open two tabs and create an input in the textbox and press enter.
          Notice that the same text shows up in both tabs.
        </h3>
        <MessagesBox/>
        <ChatInput/>
      </div>
    );
  }
}
