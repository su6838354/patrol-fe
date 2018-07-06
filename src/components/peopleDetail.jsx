import React from 'react';
import '../assets/css/peopleDetail.less';
import people from '../assets/images/sum.png'
import request from '../tools/request';
import { Toast } from 'antd-mobile';

export default class PeopleDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headImg:people,
            data: {},
        };
    }

    componentDidMount() {
        document.title = this.props.title;
        request.post('patrol/staff/list', {
            id: this.props.params.id,
        }).then(({ data }) => {
            if (data.code === 0) {
                this.setState({
                    data: data.data[0]
                })
            }
        }).catch((err) => {
            Toast.fail('请求失败');
        });
    }

    render() {
        return (
            <div className="people-detail">
                 <div className="detail-box center">
                     <div className="team-item-top team-center">
                         <img src={this.state.data.avatar}/>
                         <span>{this.props.role}：{this.state.data.name}</span>
                     </div>
                     <div className="team-item-center team-center">
                         {
                             this.props.watch && (
                                 <div className="item-center-script"><span>守护部位：</span><a>{this.state.watch}</a></div>
                             )
                         }
                         <div className="item-center-contain"><span>性别：</span><a>女</a></div>
                         <div className="item-center-contain"><span>年龄：</span><a>56</a></div>
                         {
                             this.props.period && (
                                 <div className="item-center-contain"><span>管辖时间：</span><a>{this.state.data.period}</a></div>
                             )
                         }
                         {
                             this.props.area && (
                                 <div className="item-center-contain"><span>管辖区域：</span><a>{this.state.data.area}</a></div>
                             )
                         }
                         {
                            this.props.good && (
                                <div className="item-center-contain"><span>擅长：</span><a>{this.state.data.good}</a></div>
                            )
                         }
                         {
                            this.props.case && (
                                <div className="item-center-contain"><span>案件处理：</span><a>{this.state.data.case}</a></div>
                            )
                         }
                         {
                             this.props.path && (
                                 <div className="item-center-contain"><span>路线规划：</span><a className="">{this.state.data.path}</a></div>
                             )
                         }

                     </div>
                 </div>
            </div>
        )
    }
}