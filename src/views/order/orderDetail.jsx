import React from 'react';
import '../../assets/css/order.less';
import banner from '../../assets/images/police-detail.jpg'
import { Toast } from 'antd-mobile';
import request from '../../tools/request';

export default class orderList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bannerImg: banner,
            data: {}
        }
    };


    componentDidMount() {
        document.title = '预约办事'
        request.post('patrol/staff/list', {
            id: this.props.params.id
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
            <div className="order-detail">
                <div className="banner">
                  <img src={this.state.bannerImg} />
                </div>
                <div className="police">
                    <span> {this.state.data.name}</span>
                    <a>线上接单：{this.state.data.info_count}</a>
                    <div className="top-button">预约</div>
                </div>
                <div className="police-content">
                    <span>黄警官介绍:</span>
                    <p>
                        {this.state.data.detail}
                    </p>




                </div>
            </div>

        )
    }
  }

