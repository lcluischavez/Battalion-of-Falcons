import React, { useContext, useRef } from 'react'
import { useState, useEffect } from 'react'
import { MessageContext } from './MessageProvider'
import { UserContext } from '../user/UserProvider'
import './Messages.css'

export default props => {
    const { user } = useContext(UserContext)
    const { addMessage, messages, updateMessage } = useContext(MessageContext)
    const messageMessage = useRef('')
    const [message, changeMessageState] = useState({})

    const editMode = props.match.params.hasOwnProperty('messageId')

 const handleControlledInputChange = event => {
    const newMessage = Object.assign({}, message)
    newMessage[event.target.name] = event.target.value
    changeMessageState(newMessage)
  }

 const setDefaults = () => {
    if (editMode) {
      const messageId = parseInt(props.match.params.messageId)
      const selectedMessage = messages.find(m => m.id === message) || {}
      changeMessageState(selectedMessage)
    }
  }

  useEffect(() => {
    setDefaults()
  }, [messages])

  const foundMessageUser = user.find(
    singleUser =>
      singleUser.id === parseInt(localStorage.getItem('currentUser'))
  )
  console.log(foundMessageUser)

  const constructNewMessage = () => {
    const messagesId = parseInt(message.messagesId)

    if (messages.id === 0) {
      window.alert('Please select a Message')
    } else {
      if (editMode) {
        updateMessage({
          message: message.message,
          userId: message.userId,
          senderName: message.senderName,
          id: message.id,
          usersId: parseInt(localStorage.getItem('nutshell__message'))
        }).then(() => props.history.push('/messages'))
      } else {
        addMessage({
          message: messageMessage.current.value,
          userId: parseInt(localStorage.getItem('currentUser')),
          senderName: foundMessageUser.name
        }).then(() => props.history.push('/messages'))
      }
    }
  }

  return (
    <form className='eventForm'>
      <h2 className='eventForm__title'>New Message</h2>
      <div className='form-group'>
        <label htmlFor='messageMessage'>Message</label>
        <input
          type='text'
          id='messageMessage'
          ref={messageMessage}
          required
          autoFocus
          className='form-control'
          placeholder='Message'
        />
      </div>
      <button
        type='submit'
        onClick={evt => {
          evt.preventDefault() // Prevent browser from submitting the form
          constructNewMessage()
        }}
        className='btn btn-primary'
      >
        Save Message
      </button>
    </form>
  )
}
