import React from 'react';
import '../../assets/css/order.less';
import banner from '../../assets/images/police-detail.jpg'


export default class orderList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bannerImg: banner
        }
        };

    render() {
        return (
            <div className="order-detail">
                <div className="banner">
                  <img src={this.state.bannerImg} />
                </div>
                <div className="police">
                    <span> 黄警官</span>
                    <a>线上接单：9</a>
                    <div className="top-button">预约</div>
                </div>
                <div className="police-content">
                    <span>黄警官介绍:</span>
                    <p>
                        黄警官简介： 黄警官属于什么什么辖区，专职处理本辖区内的事件，擅长 处理什么什么种类的案件，具有8年的工作经验。黄警官属 于什
                    </p>




                </div>
            </div>

        )
    }
  }

