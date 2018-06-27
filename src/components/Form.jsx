/**
 * Created by pdd on 2018/6/22.
 */

import React from 'react';
import '../assets/css/form.less';




export default class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    state = {
        selectedFile: null
    };

    componentDidMount() {
        this.props.changeTitle('政务反馈');
    }


    uploadHandler = () => {
        console.log(this.state.selectedFile)
    }

    renderList() {
        return (
            <div className="login-item-sex">
                <div className="item-label">性别</div>
                <input type="radio" name="sex" value='male'/><label>男</label>
                <input name="sex" checked type="radio" value="female"/><label>女</label>
            </div>
        )
    }
    render () {
        return (
            <div className="form">
                <div className="banner">
                   <img src={this.props.imageUrl}/>
                </div>
                <div className="login-box center">
                    <div className="login-item">
                        <div className="item-label">姓名</div>
                        <input/>
                    </div>
                    <div>{this.props.sexShow && this.renderList()}</div>

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