/**
 * Created by pdd on 2018/7/7.
 */

import './index.less';
import io from 'socket.io-client';
import React from 'react';
import { getUserIP, guid, getExternalIp } from '../../tools/util'


export default class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: '',
            ip: guid(),
            externalIp: '0.0.0.0',
            msgs: [
            ]
        };
        const manager = io.Manager('http://139.196.243.147:3333',
            {
                reconnectionAttempts: 100,
                reconnectionDelay: 4000,
                autoConnect: true
            });

        this.socket = manager.socket('/');
        this.socket.on('send message from admin to user', (data) => {
            this.setState({
                msgs: [
                    ...this.state.msgs,
                    { from: 'admin', msg: data.msg},
                ]
            })
        });
    }

    componentDidMount() {
        document.title = '在线沟通';
        getUserIP((ip) => {
            this.setState({
                ip
            })
        });
        getExternalIp((ip) => {
            this.setState({
                externalIp: ip
            });
        })
    }

    componentDidUpdate () {
        this.container.scrollTop = this.container.scrollHeight;
    }

    sendMsg = () => {
        const msg = this.state.msg;
        // if there is a non-empty message and a socket connection
        this.socket.emit('send message from user', {
            msg,
            username: `${this.state.externalIp}-${this.state.ip}`,
        });
        this.setState({
            msg: '',
            msgs: [
                ...this.state.msgs,
                {from: 'me', msg: this.state.msg},
            ]
        })
    }

    render() {

        return (
            <div className={'chat'}>
                <div className={"container"} ref={(div) => this.container = div}>
                    {
                        this.state.msgs.map(item => {
                            return <div className={`msg ${item.from}`}><div>{item.msg}</div></div>
                        })
                    }
                </div>
                <div className='input'>
                    <input value={this.state.msg} onChange={(e) => {
                        this.setState({ msg: e.target.value });
                    }} placeholder={"请输入"}/>
                    <div className={"send"} onClick={this.sendMsg}/>
                </div>
            </div>
        )
    }
}