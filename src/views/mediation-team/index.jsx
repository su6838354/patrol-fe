/**
 * Created by pdd on 2018/6/24.
 */

import React from 'react';
import './index.less';


export default class MediationTeam extends React.Component {


    render () {
        return (
            <div className="mediation-team">
                <div className="team-box center">
                <div className="team-item ">
                  <div className="team-item-top team-center">
                    <img src="../../assets/images/sum.png"/>
                    <span>调解员：黄某某</span>
                  </div>
                  <div className="team-item-center team-center">
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