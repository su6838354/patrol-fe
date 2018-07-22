/**
 * Created by pdd on 2018/7/7.
 */

import './index.less';
import io from 'socket.io-client';
import React from 'react';
import { getUserIP, guid, getExternalIp, isPoneAvailable } from '../../tools/util'
import { InputItem, WingBlank, Modal, Toast} from 'antd-mobile';

const PlaceHolder = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder`} >{restProps.phone}</div>
);


export default class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: '',
            ip: guid(),
            externalIp: '0.0.0.0',
            msgs: [],
            status: '',
            phone: ''
        };
        this.ReceiveAudio = new Audio();
        this.ReceiveAudio.src = "http://ypy.weichongming.com/sample-upload-8855.mp3";
        this.SendAudio = new Audio();
        this.SendAudio.src = "http://ypy.weichongming.com/sample-upload-7820.mp3";
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
        document.querySelector('.input-send-msg').addEventListener('keyup', (e) => {
            if (e.keyCode === 13) {
                this.sendMsg()
            }
        })
    }

    componentDidUpdate () {
        if (this.state.status === 'chat') {
            this.container.scrollTop = this.container.scrollHeight;
        }
    }

    sendMsg = (m) => {
        const msg = m || this.state.msg;
        if (!msg) {
            return
        }
        // if there is a non-empty message and a socket connection
        this.playSend();
        this.socket.emit('send message from user', {
            msg,
            from: 'me',
            username: this.state.phone,
        });
        this.setState({
            msg: '',
            msgs: [
                ...this.state.msgs,
                {from: 'me', msg: msg, username: this.state.phone},
            ]
        }, () => {
            localStorage.setItem(this.state.phone, JSON.stringify(this.state.msgs));
        })
    }

    playSend () {
        this.SendAudio.play();
    }

    playReceive () {
        this.ReceiveAudio.play();
    }

    render() {


        return (
            <div className={'chat'}>
                <Modal
                    visible={this.state.status !== 'chat'}
                    transparent
                    maskClosable={false}
                    title="在线沟通"
                    footer={[{ text: '开始沟通', onPress: () => {
                        if (isPoneAvailable(this.state.phone)) {
                            this.setState({ status: 'chat' });
                            this.manager = io.Manager(
                                'http://139.196.243.147:3333',
                                // 'http://127.0.0.1:3333',
                                {
                                    query:{username: this.state.phone},
                                    reconnectionAttempts: 100,
                                    reconnectionDelay: 4000,
                                    autoConnect: false
                                });

                            this.socket = this.manager.socket('/');
                            this.socket.on('send message from admin to user', (data) => {
                                this.playReceive();
                                this.setState({
                                    msgs: [
                                        ...this.state.msgs,
                                        { from: 'admin', msg: data.msg},
                                    ]
                                }, () => {
                                    localStorage.setItem(this.state.phone, JSON.stringify(this.state.msgs));
                                })
                            });
                            this.socket.open();
                            let msgs = []
                            try {
                                const s = localStorage.getItem(this.state.phone);
                                if (s) {
                                    msgs = JSON.parse(s);
                                    this.setState({
                                        msgs
                                    });
                                }
                            } catch (ex) {
                                console.error(ex)
                            }
                        } else {
                            Toast.info('手机号码不正确', 0.5);
                        }

                    } }]}
                >
                    <div style={{ height: 50, overflow: 'scroll' }}>
                        <InputItem
                            placeholder="请输入电话号码"
                            onChange={(v) => this.setState({ phone: v })}
                        >手机号码</InputItem>

                    </div>
                </Modal>

                <div className={"container"} ref={(div) => this.container = div}>
                    <WingBlank size="sm"><PlaceHolder phone={this.state.phone} /></WingBlank>
                    {
                        this.state.msgs.map(item => {
                            return <div className={`msg ${item.from}`}><div>{item.msg}</div></div>
                        })
                    }
                </div>
                <div className='input'>
                    <input className={'input-send-msg'} value={this.state.msg} onChange={(e) => {
                        this.setState({ msg: e.target.value });
                    }} placeholder={"请输入"}/>
                    <div className={"send"} onClick={() => this.sendMsg()}/>
                </div>
            </div>
        )
    }
}