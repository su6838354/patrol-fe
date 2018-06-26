/**
 * Created by pdd on 2018/6/22.
 */

import React from 'react';
import { Button } from 'antd-mobile';
import './index.less';

export default class PeopleFeedBack extends React.Component {

    state = {
        selectedFile: null
    }

    componentDidMount() {
        this.props.changeTitle('民情反馈');
    }

    fileChangedHandler = (event) => {
        this.setState({selectedFile: event.target.files[0]})
    }

    uploadHandler = () => {
        console.log(this.state.selectedFile)
    }

    render () {
        return (
            <div className="people-feed-back">
                <div className="banner">
                </div>
                <div className="login-box center">
                  <div className="login-item">
                    <div className="item-label">姓名</div>
                    <input/>
                  </div>
                <div className="login-item">
                    <div className="item-label">手机</div>
                    <input/>
                </div>

                <div className="login-item">
                    <div className="item-label">反馈内容描述</div>
                    <textarea  rows="5" />
                </div>
                    <div className="login-item">
                        <div className="item-label">上传照片</div>
                        <div className="upload"></div>
                        <input className="upload-input" type="file" onChange={this.fileChangedHandler}/>
                        <span>上传文件（需小于10M）</span>
                    <button className="submit" onClick={this.uploadHandler}>提交</button>
                    </div>
               </div>

               </div>
        )
    }
}