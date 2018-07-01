import React from 'react';
import '../../assets/css/order.less';
import people from '../../assets/images/sum.png'


export default class orderList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headImg: people
        };
    }
    render() {
        return (
            <div className="order-list">
                <div className="team-box center">
                    <div className="team-item ">
                        <div className="team-item-top team-center">
                            <img src={this.state.headImg}/>
                            <div className="top-center">
                                <span>黄警官</span>
                                <br/>
                               <span className="gray">线上接单：9</span>
                            </div>
                            <div className="top-button">预约</div>
                        </div>
                        <div className="team-item-center team-center">
                            <div className="item-center-script"><span>黄警官简介：</span></div>
                            <div className="item-center-script"><span>黄警官属于什么什么管辖黄警官属于什么什么管辖黄警官属于什么什么管辖黄警官属于什么</span></div>
                        </div>
                        <div className="team-item-more team-center">
                            <span>查看更多……</span>
                            <a>></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}