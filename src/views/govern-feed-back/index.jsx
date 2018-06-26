/**
 * Created by pdd on 2018/6/22.
 */

import React from 'react';
import './index.less';

export default class GovernFeedBack extends React.Component {

    state = {
        selectedFile: null
    }

    componentDidMount() {
        this.props.changeTitle('政务反馈');
    }

    fileChangedHandler = (event) => {
        this.setState({selectedFile: event.target.files[0]})
    }

    uploadHandler = () => {
        console.log(this.state.selectedFile)
    }

    render () {
        return (
            <div className="govern-feed-back">
                <div className="banner">
                </div>
                <div className="login-box center">
                <div className="login-item">
                    <div className="item-label">姓名</div>
                    <input/>
                </div>
                <div className="login-item-sex">
                    <div className="item-label">性别</div>
                    <input type="radio" name="sex" value='male'/><label>男</label>
                    <input name="sex" checked type="radio" value="female"/><label>女</label>
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
                    <div onClick={(e) => {
                        this.file.click()
                    }}>
                        <div className="upload"/>
                        <input id="add-file" ref={(file) => this.file = file } className="upload-input" type="file" />

                        <span>上传文件（需小于10M）</span>

                    </div>

                    <button className="submit" onClick={this.uploadHandler}>提交</button>
                </div>
            </div>

            </div>
        )
    }
}