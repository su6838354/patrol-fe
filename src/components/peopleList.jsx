import React from 'react';
import '../assets/css/peopleList.less';
import people from '../assets/images/sum.png'
import more from '../assets/images/more.png'
import { Toast } from 'antd-mobile';
import request from '../tools/request';
import { hashHistory } from 'react-router';

export default class PeopleList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           headImg:people,
            data: [],
            limit: 10,
            offset: 0,
            more:more,
        };
    }

    componentDidMount () {
        this.context.changeTitle(this.props.title);
        request.post('patrol/staff/list', {
            type: this.props.type,
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

    render () {
        return (
            <div className="people-list">
                <div className="team-box center">
                    {
                        this.state.data.map(item => {
                            return (
                            <div key={item.id} className="team-item ">
                                <div className="team-item-top team-center">
                                    <img src={item.avatar}/>
                                    <span>{this.props.role}：{item.name}</span>
                                </div>
                                <div className="team-item-center team-center">
                                    {
                                        this.props.watch && (
                                            <div className="item-center-script"><span>守护部位：</span><a>{this.state.data.watch}</a></div>
                                        )
                                    }
                                    <div className="item-center-script"><span>性别：</span><a>{item.sex === 1? '男':'女'}</a></div>
                                    <div className="item-center-script"><span>管辖区域：</span><a>{item.area}</a></div>
                                </div>
                                <div className="team-item-more team-center" onClick={() => {
                                    hashHistory.push(this.props.detailPath + '/' + item.id)
                                }}>
                                    <span>查看更多……</span>
                                    <a><img src={this.state.more}/></a>
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



PeopleList.contextTypes = {
    changeTitle: React.PropTypes.func
};