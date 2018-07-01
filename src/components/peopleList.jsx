import React from 'react';
import '../assets/css/peopleList.less';
import people from '../assets/images/sum.png'



export default class PeopleList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           headImg:people
        };
    }
    peopleItem() {
        return (
            <div className="item-center-script"><span>守护部位：</span><a>部位一</a></div>
        )
    }
    render () {
        return (
            <div className="people-list">
                <div className="team-box center">
                    <div className="team-item ">
                        <div className="team-item-top team-center">
                            <img src={this.state.headImg}/>
                            <span>{this.props.role}：黄某某</span>
                        </div>
                        <div className="team-item-center team-center">
                            <div>{this.props.departmentShow && this.peopleItem()}</div>
                            <div className="item-center-script"><span>性别：</span><a>女</a></div>
                            <div className="item-center-script"><span>管辖区域：</span><a>港西镇啥啥啥村</a></div>
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