import React, { Component, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { socketService } from '../service/socketService.js'
import Avatar from '@material-ui/core/Avatar';
import SendIcon from '@material-ui/icons/Send';
import CloseIcon from '@material-ui/icons/Close';

export function Chat() {
    const [state, setState] = useState({
        msg: { txt: '' },
        msgs: [{ from: '', txt: 'שלום לך, תודה שפנית אלינו' }],
        isBotMode: false,
        currTypingUser: {
            username: '',
            isTyping: false
        }
    })
    // const { currTypingUser, msg } = state
    // // const { isOpen, eventi, loggedinUser } = this.props

    // useEffect(() => {
    //     socketService.setup()
    //     socketService.emit('chat topic', 2222)

    //     socketService.on('chat addMsg', addMsg)

    //     socketService.on('userTyping', setUserTyping)
    //     return () => {
    //         socketService.off('chat addMsg', addMsg)
    //         socketService.off('userTyping', setUserTyping)

    //         socketService.terminate()
    //         clearTimeout(this.timeout)
    //     }
    // }, [])
    // // const savedMsgs = socketService.getMsgsFromStorage() || [];
    // // this.setState({ msgs: savedMsgs });

    // const setUserTyping = ({ username, msg }) => {

    //   setState({ currTypingUser: { username, isTyping: !!msg } }, () => {
    //         console.log('currTypingUser: ', state.currTypingUser);
    //     })
    // }


    // const addMsg = (newMsg) => {

    //    setState(prevState => ({ msgs: [...prevState.msgs, newMsg] }), () => {

    //         // socketService.saveMsgsToStorage(this.state.msgs)
    //     })
    //     if (state.isBotMode) onSendBotResponse();
    // }

    // const onSendBotResponse = () => {
    //     // Handle case: send single bot response (debounce).
    //     this.timeout && clearTimeout(this.timeout)

    //     this.timeout = setTimeout(this.sendBotResponse, 1500)
    // }

    // const sendBotResponse = () => {
    //     this.setState(prevState => ({ msgs: [...prevState.msgs, { from: 'Bot', txt: 'You are amazing!' }] }), () => {
    //         // socketService.saveMsgsToStorage(this.state.msgs)
    //     })
    // }

    // const sendMsg = ev => {
    //     ev.preventDefault()

    //     const from = 'Me'

    //     socketService.emit('chat newMsg', { from, txt: state.msg.txt })
    //     this.setState({ msg: { from: 'Me', txt: '' } })
    // }

    // const msgHandleChange = async ev => {
    //     const { name, value } = ev.target
    //     const user = {
    //         username: 'guest',
    //         msg: value
    //     }
    //     socketService.emit('typing', user)

    //     setState(prevState => {
    //         return {
    //             msg: {
    //                 ...prevState.msg,
    //                 [name]: value
    //             }
    //         }
    //     })
    // }


    return (
        <div className={`chat ${true && 'active'}`}>
            <b className="chat-topic chat-layout flex space-between">  <div className="flex  space-between" ><div className="flex align-center" >
                {/* <Avatar className={'avatar'} /> */}
                <div>אנחנו כאן</div></div>
            </div><b><CloseIcon></CloseIcon></b></b>

            <h3>{state.currTypingUser?.isTyping && state.currTypingUser.username + ' is typing...'}</h3>

            <div className="chat-main-content">
                <ul className="chat-msgs chat-layout">
                    {state.msgs.map((msg, idx) => (
                        <div key={idx} className="flex align-center"><span className="from ">
                            <Avatar className={'avatar'} src={msg.from} /></span>{msg.txt}</div>
                    ))}
                </ul>  <hr ></hr>
                <form className="msg-form flex align-center space-between" >

                    <input
                        type="text"
                        value={state.msg.txt}


                        name="txt"
                        className="msg-input"
                        autoComplete="off" />
                    <SendIcon class="sent"></SendIcon>
                </form>
            </div >
        </div >
    )

}



