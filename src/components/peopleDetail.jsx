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
                                 <div className="item-center-contain" style={{lineHeight: '.4rem'}}><p>守护部位：{this.state.data.watch}</p></div>
                             )
                         }
                         <div className="item-center-contain"><p>性别：{this.state.data.sex === 1?'男':'女'}</p></div>
                         <div className="item-center-contain"><p>年龄：{this.state.data.age}</p></div>
                         {
                             this.props.period && (
                                 <div className="item-center-contain"><p>管辖时间：{this.state.data.period}</p></div>
                             )
                         }
                         {
                             this.props.area && (
                                 <div className="item-center-contain"><p>管辖区域：{this.state.data.area}</p></div>
                             )
                         }
                         {
                            this.props.good && (
                                <div className="item-center-contain">
                                    <p>
                                        擅长：<br/>
                                        {this.state.data.good?this.state.data.good.split('\n').map((d,i)=><div key={i}>{d}</div>) : ''}

                                    </p>
                                </div>
                            )
                         }
                         {
                            this.props.case && (
                                <div className="item-center-contain">
                                    <p>
                                        案件处理：<br/>
                                        {this.state.data.case?this.state.data.case.split('\n').map((d,i)=><div key={i}>{d}</div>) : ''}
                                    </p>
                                </div>
                            )
                         }
                         {
                             this.props.path && (
                                 <div className="item-center-contain">
                                    <p>
                                        路线规划：<br/>
                                        {this.state.data.path?this.state.data.path.split('\n').map((d,i)=><div key={i}>{d}</div>) : ''}
                                    </p>
                                </div>
                             )
                         }

                     </div>
                 </div>
            </div>
        )
    }
}