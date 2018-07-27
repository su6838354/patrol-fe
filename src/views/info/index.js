/**
 * Created by pdd on 2018/7/26.
 */

import React from 'react';
import request from '../../tools/request';
import { Button, Toast } from 'antd-mobile';
import './index.less';

export default class Info extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            search: {
                mobile: '13636672480'
            },
            data: []
        }
    }

    componentDidMount() {
        window.document.title = '反馈预约查询';
    }

    queryData = () => {
        request.post('patrol/info/list', {
            mobile: this.state.mobile,
        }).then(({ data }) => {
            if (data.code === 0) {
                this.setState({
                    data: data.data
                })
            }
        }).catch((err) => {
            Toast.fail('请求失败');
        });
    }

    renderItem = () => {
        return (
            <div>
                <div >
                    <span>姓名</span><span>马云</span>
                </div>
                <div>
                    <span>手机</span><span>13636672455</span>
                </div>
                <div>
                    <span>性别</span><span>男</span>
                </div>
                <div>
                    <span>预约对象</span><span>王警官</span>
                </div>

                <div>
                    <span>内容描述</span><span>我是撒哈撒阿达的硕大的</span>
                </div>
                <div>
                    <span>图片</span>
                    <img />
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className='info'>
                <div className='title'>反馈预约查询</div>
                <div className='info-mobile'>
                    <span>手机号:</span>
                    <input className='mobile-input'/>
                </div>
                <div className='info-mobile'>
                    <span>类型：</span>
                    <select className='mobile-input'>
                        <option>请选择</option>
                        <option>预约办事</option>
                        <option>政务反馈</option>
                        <option>民情反馈</option>
                    </select>
                </div>
                <Button type="primary" onClick={this.queryData}>查询</Button>
                <div>
                    {this.renderItem()}
                </div>
            </div>
        );
    }
}