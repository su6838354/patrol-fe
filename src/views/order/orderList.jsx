import React from 'react';
import '../../assets/css/order.less';
import people from '../../assets/images/sum.png'
import { Toast } from 'antd-mobile';
import request from '../../tools/request';
import { hashHistory } from 'react-router';


export default class orderList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headImg: people,
            detailPath: 'order-detail',
            type: 'police',
            data: [],
            limit: 10,
            offset: 0
        };
    }

    componentDidMount() {
        document.title = '预约办事'
        request.post('patrol/staff/list', {
            type: this.state.type,
            limit: this.state.limit,
            offset: this.state.offset,
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

    render() {
        return (
            <div className="order-list">
                <div className="team-box center">
                    {
                        this.state.data.map(item => {
                            return (
                                <div className="team-item ">
                                    <div className="team-item-top team-center">
                                        <img src={item.avatar}/>
                                        <div className="top-center">
                                            <span>{item.name}</span>
                                            <br/>
                                            <span className="gray">线上接单：{item.info_count}</span>
                                        </div>
                                        <div className="top-button">预约</div>
                                    </div>
                                    <div className="team-item-center team-center">
                                        <div className="item-center-script"><span>黄警官简介：</span></div>
                                        <div className="item-center-script"><span>{item.detail}</span></div>
                                    </div>
                                    <div className="team-item-more team-center" onClick={() => {
                                        hashHistory.push(this.state.detailPath + '/' + item.id)
                                    }}>
                                        <span>查看更多……</span>
                                        <a>></a>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        )
    }
}