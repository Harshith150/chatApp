import React from 'react'
import Nav from './Nav'
import Messages from './Messages'
import TypeMessage from './TypeMessage'

function ChatUser() {
  return (
    <div>
      <Nav></Nav>
      <Messages></Messages>
      <TypeMessage></TypeMessage>
    </div>
  )
}

export default ChatUser
