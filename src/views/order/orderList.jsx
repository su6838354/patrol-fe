import React from 'react';
import '../../assets/css/order.less';
import people from '../../assets/images/sum.png'
import more from '../../assets/images/more.png'
import { Toast } from 'antd-mobile';
import request from '../../tools/request';
import { hashHistory } from 'react-router';


export default class orderList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headImg: people,
            more:more,
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
            // const data={"code":0,"data":[{"id":66,"name":"好人","type":"police","avatar":"http://sy-image-upyun.test.upcdn.net//sample-upload-btn-pic-add@3x.png","sex":1,"age":20,"watch":"","area":"山东","period":"","good":"射击","path":"","case":"","detail":"牛逼的人","create_time":1531068005,"info_count":1},{"id":9,"name":"syE","type":"police","avatar":"","sex":1,"age":20,"watch":null,"area":"11ssds","period":"周一","good":"优秀","path":"商场","case":"打架","detail":"nihaoE","create_time":1530704503,"info_count":1},{"id":8,"name":"sy","type":"police","avatar":"","sex":1,"age":21,"watch":null,"area":"11ssds","period":"周一","good":"优秀EE","path":"商场","case":"打架","detail":"哈哈哈哈哈","create_time":1530704500,"info_count":2},{"id":7,"name":"sy","type":"police","avatar":"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1141440301,1480022084&fm=27&gp=0.jpg","sex":1,"age":20,"watch":null,"area":"11ssds","period":"周一","good":"优秀","path":"商场","case":"打架","detail":"哈哈哈哈哈","create_time":null,"info_count":2}],"total":4,"message":"success"}
            // this.setState({
            //     data: data.data
            // })
        });
    }

    componentDidUpdate(_, preState) {
        if (preState.data.length === 0 && this.state.data.length !== 0) {
            const top = window.sessionStorage.getItem(this.state.detailPath);
            if (top) {
                document.querySelector('.am-drawer-content').scrollTop = parseInt(top)
            }
        }
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
                                            <span className="gray">线上接单 : {item.info_count}</span>
                                        </div>
                                        <div className="top-button" onClick={() => {
                                            sessionStorage.setItem('police_id', item.id);
                                            hashHistory.push('appointment')
                                        }}>预 约</div>
                                    </div>
                                    <div className="team-item-center team-center">
                                        <div className="item-center-script"><p>黄警官简介：</p></div>
                                        <div className="item-center-script"><p>{item.detail}来我家还没满两个月，第一天来的时候那个凶，每次逗它就咬，咬手咬脚。满地咬碎的纸和划破的窗户都是它的杰作。  现在快半岁了，咬的脾气没改，每天5点多咬醒我，要出去玩，出去玩一趟之后，又回来咬我，拿个喷雾吓它，没喷它，它就一眼不满的看了我，然后又跑出去玩了。 ​​​  性子太野，不知道拿它怎么办。现在也能欺负玩具了。😂 😂 😂   明明看上去很可爱，性格却很狂躁，吃不消了。  (￣ω￣(￣ω￣〃)ゝ    </p></div>
                                    </div>
                                    <div className="team-item-more team-center" onClick={() => {
                                        window.sessionStorage.setItem(this.state.detailPath, document.querySelector('.am-drawer-content').scrollTop);
                                        hashHistory.push(this.state.detailPath + '/' + item.id)
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