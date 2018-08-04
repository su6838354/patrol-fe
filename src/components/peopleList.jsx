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
            isDelete: 0,
            status: 'online',
            type: this.props.type,
            limit: this.state.limit,
            offset: this.state.offset,
            village: this.props.params.village,
        }).then(({ data }) => {
            if (data.code === 0) {
                this.setState({
                    data: data.data
                })
            }
        }).catch((err) => {
            Toast.fail('请求失败');
            // const data={"code":0,"data":[{"id":65,"name":"溯源","type":"help","avatar":"http://sy-image-upyun.test.upcdn.net//sample-upload-ic-tongguo@3x.png","sex":1,"age":1,"watch":"","area":"22","period":"","good":"222222","path":"","case":"","detail":"","create_time":1531066241,"info_count":0},{"id":64,"name":"sr","type":"help","avatar":"","sex":1,"age":1,"watch":"","area":"","period":"","good":"","path":"","case":"","detail":"","create_time":1531064952,"info_count":0},{"id":63,"name":"苏远","type":"help","avatar":"","sex":1,"age":12,"watch":"","area":"s","period":"","good":"sssssss","path":"","case":"","detail":"","create_time":1531064924,"info_count":0},{"id":61,"name":"qwqwe","type":"help","avatar":"","sex":1,"age":0,"watch":"","area":"","period":"","good":"","path":"","case":"","detail":"","create_time":1531034510,"info_count":0},{"id":54,"name":"232333333","type":"help","avatar":"","sex":0,"age":213232,"watch":"2323","area":"121","period":"2323","good":"232","path":"213213","case":"321323","detail":"213213","create_time":1531029810,"info_count":0},{"id":11,"name":"sy","type":"help","avatar":"","sex":1,"age":26,"watch":null,"area":"11ssds","period":"周一","good":"优秀2323","path":"商场","case":"打架","detail":"哈哈哈哈哈","create_time":1530704503,"info_count":0}],"total":6,"message":"success"}
            // this.setState({
            //     data: data.data
            // })
        });
    }

    componentDidUpdate(_, preState) {
        if (preState.data.length === 0 && this.state.data.length !== 0) {
            const top = window.sessionStorage.getItem(this.props.detailPath);
            if (top) {
                document.querySelector('.am-drawer-content').scrollTop = parseInt(top)
            }
        }
    }

    render () {
        return (
            <div className="people-list">
                <div className="team-box center">
                    {
                        this.state.data.length === 0 && (
                            <div className='no-data'>暂无数据哦！</div>
                        )
                    }
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
                                            <div className="item-center-script"><span>守护部位：</span><a>{item.watch}</a></div>
                                        )
                                    }
                                    <div className="item-center-script"><span>性别：</span><a>{item.sex === 1? '男':'女'}</a></div>
                                    {
                                        this.props.area && (
                                            <div className="item-center-script"><span>管辖区域：</span><a>{item.area}</a></div>
                                        )
                                    }
                                    {
                                        this.props.path && (
                                            <div className="item-center-script"><span>路径规划：</span><a>{item.path}</a></div>
                                        )
                                    }
                                </div>
                                <div className="team-item-more team-center" onClick={() => {
                                    window.sessionStorage.setItem(this.props.detailPath, document.querySelector('.am-drawer-content').scrollTop);
                                    hashHistory.push(this.props.detailPath + '/' + item.id)
                                }}>
                                    <span>查看更多…</span>
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
