/**
 * Created by pdd on 2018/7/26.
 */

import React from 'react';
import request from '../../tools/request';
import { isPoneAvailable } from '../../tools/util';
import { Button, Toast } from 'antd-mobile';
import './index.less';
import more from '../../assets/images/sum.png'

export default class Info extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            search: {
                mobile: '',
                type: undefined,
            },
            data: [],
            more: more
        }
    }

    componentDidMount() {
        window.document.title = '反馈预约查询';
    }

    queryData = () => {
        if (!isPoneAvailable(this.state.search.mobile)) {
            Toast.info('手机号码不正确', 1);
            return;
        }
        request.post('patrol/info/list', {
            mobile: this.state.search.mobile,
            type: this.state.search.type,
            limit: 10000,
        }).then(({ data }) => {
            if (data.code === 0) {
                this.setState({
                    data: data.data
                });
                console.log(this.state.data);
            }
        }).catch((err) => {
            console.error(err);
            Toast.fail('请求失败');
        });
    }

    renderItem = (item, index) => {
        let statusTxt = '待处理';
        if (item.status === 'accept') {
            statusTxt = '已接受'
        }
        if (item.status === 'refuse') {
            statusTxt = '已拒绝'
        }

        return (
            <div className='info-item' key={index}>
                <div className='info-item-text'>
                    姓名：<span>{item.name}</span>
                </div>
                <div className='info-item-text'>
                    手机：<span>{item.mobile}</span>
                </div>
                <div className='info-item-text'>
                    性别：<span>{item.sex ? '男':'女'}</span>
                </div>
                {
                    item.police && (
                        <div className='info-item-text'>
                            预约对象：<span>{item.police.name}</span>
                        </div>
                    )
                }
                {
                    item.status && (
                        <div className='info-item-text'>
                            状态：<span>{statusTxt}</span>
                        </div>
                    )
                }
                 <p><a>内容描述：</a>{item.content}</p>
                {
                    item.image_url && (
                        <div className='info-item-img'>
                            <span>图片:</span>
                            <img src={item.image_url + '!/fw/400'} />
                        </div>
                    )
                }
            </div>
        );
    }

    render() {
        return (
            <div className='info'>
                <div className='title'>反馈预约查询</div>
                <div className='info-mobile'>
                    <span>手机号:</span>
                    <input value={this.state.search.mobile} onChange={(e) => {
                        this.setState({
                            search: {...this.state.search, mobile: e.target.value}
                        })
                    }} className='mobile-input'/>
                </div>
                <div className='info-mobile'>
                    <span>类型：</span>
                    <select className='mobile-input' onChange={(e) => {
                        this.setState({
                            search: {...this.state.search, type: e.target.value || undefined}
                        })
                    }}>
                        <option value=''>全部</option>
                        <option value='yuyue'>预约办事</option>
                        <option value='people'>警情报送</option>
                        <option value='govern'>工作情况反馈</option>
                    </select>
                </div>
                <Button type="primary" onClick={this.queryData}>查询</Button>
                <div>
                    {
                        this.state.data.map((item, index) => {
                            return this.renderItem(item, index);
                        })
                    }
                </div>
            </div>
        );
    }
}