import React from 'react';
import '../assets/css/peopleDetail.less';
import people from '../assets/images/sum.png'


export default class PeopleDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headImg:people
        };
    }

    detailItem () {
        return (
            <div className="item-center-script"><span>守护部位：</span><a>部位一</a></div>
        )
    }

    render() {
        return (
            <div className="people-detail">
                 <div className="detail-box center">
                     <div className="team-item-top team-center">
                         <img src={this.state.headImg}/>
                         <span>{this.props.role}：黄某某</span>
                     </div>
                     <div className="team-item-center team-center">
                         <div>{this.props.departmentShow && this.detailItem()}</div>
                         <div className="item-center-script"><span>性别：</span><a>女</a></div>
                         <div className="item-center-script"><span>年龄：</span><a>56</a></div>
                         <div className="item-center-script"><span>管辖时间：</span><a>每周一至周日</a></div>
                         <div className="item-center-contain"><span>路线规划：</span><a className="">沙河撒很傻很傻很傻傻傻回很少说话双手合十沙河撒
                             很傻很傻很傻傻傻回很少说话双手合十沙河撒很傻很傻很傻傻傻回很少说话双手合十</a></div>
                     </div>
                 </div>
            </div>
        )
    }
}