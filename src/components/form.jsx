/**
 * Created by pdd on 2018/6/22.
 */

import React from 'react';
import '../assets/css/form.less';
import request from '../tools/request';
import { Toast, Icon } from 'antd-mobile';
import { isPoneAvailable, isNull } from '../tools/util'
import { upload } from '../tools/image';
import Info from '../components/info';
import { hashHistory } from 'react-router';



export default class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            image_url: null,
            params: {"type":"people","name":"111","sex":"1","mobile":"13636672480","content":"111","image_url":'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2498039726,598644916&fm=173&app=25&f=JPEG?w=218&h=146&s=1C904F9206316F941AB6FCE30300F009'},
            success: {
                code: -1
            }
        }
    }

    componentDidMount() {
        this.context.changeTitle(this.props.title);
    }


    uploadHandler = () => {
        const mobile = this.form.mobile.value;
        const name = this.form.name.value;
        const content = this.form.content.value;
        if (isNull(name)) {
            Toast.info('姓名不能为空', 1)
            return;
        }
        if (!isPoneAvailable(mobile)) {
            Toast.info('手机号码不正确', 1)
            return;
        }

        if (isNull(content)) {
            Toast.info('反馈内容描述不能为空', 1)
            return;
        }
        const params = {
            type: this.props.type,
            name,
            sex: this.form.sex.value,
            mobile,
            content,
            image_url: this.state.image_url,
            status: 'new'
        };
        if (this.props.type === 'yuyue') {
            params.police_id = sessionStorage.getItem('police_id');
        }
        this.setState({
            params
        });
        request.post('patrol/info/add', params).then(({ data }) => {
            if (data.code === 0) {
                Toast.success('提交成功', 2, () => {
                    this.setState({
                        success: data
                    })
                });
            }
        }).catch((err) => {
            Toast.fail('请求失败');
        });
    }

    renderList() {
        return (
            <div style={{display: `${this.props.sexShow?'block':'none'}`}} className="login-item-sex">
                <div className="item-label">性别</div>
                <input type="radio" defaultChecked="checked" name="sex" value='1'/><label>男</label>
                <input name="sex" type="radio" value="0"/><label>女</label>
            </div>
        )
    }

    renderSuccess = () => {
        return (
            <div className="order-success-page">
                <div className={'log'}>
                    <Icon type="check-circle-o" size={'5rem'} color={"#067cdd"} />
                </div>
                <div className="success-title">提交成功</div>
                <Info {...this.state.params} sexShow={this.props.sexShow} id={this.state.success.data.insertId} />
                <div className="success-go-btn" onClick={() => {
                    this.setState({
                        success: {},
                        image_url: null
                    })
                }}> 返回 </div>
            </div>
        )
    }

    render () {
        if (this.state.success.code === 0) {
            return this.renderSuccess()
        }

        return (
            <form className="form" ref={form => this.form = form}>
                <div className="banner icon" style={{backgroundImage:`url(${this.props.imageUrl})`}}>
                   {/* <img src={this.props.imageUrl}/> */}
                </div>
                <div className="login-box center">
                    <div className="login-item">
                        <div className="item-label">姓名</div>
                        <input name="name" ref={(name) => this.nameRef = name} maxLength={15} />
                    </div>
                    <div>{this.renderList()}</div>

                    <div className="login-item">
                        <div className="item-label">手机</div>
                        <input type={'tel'} name="mobile" maxLength={11} />
                    </div>

                    <div className="login-item">
                        <div className="item-label">反馈内容描述</div>
                        <textarea name="content"  rows="5" />
                    </div>
                    <div className="login-item">
                        <div className={'op'}>
                            <div>
                                <div className="item-label">上传照片</div>
                                <div onClick={(e) => {
                                    this.file.click()
                                }}>
                                    <div className="upload"/>
                                    <input id="add-file" onChange={(e) => {
                                        const file = e.target.files[0];
                                        Toast.info('图片上传中...', 100000);
                                        upload(file, ({code, data}) => {
                                            if (code === 0)  {
                                                this.setState({
                                                    image_url: data
                                                });
                                                Toast.success('图片上传成功', 1);
                                            } else {
                                                Toast.fail('图片上传失败')
                                            }
                                        })
                                    }} ref={(file) => this.file = file } className="upload-input" type="file" />

                                    <span>上传文件（需小于10M）</span>
                                </div>
                            </div>
                            {
                                (this.state.image_url) && <img className="preview" src={this.state.image_url} />
                            }
                        </div>

                        <button type="button" className="submit" onClick={this.uploadHandler}>提 交</button>
                    </div>
                </div>

            </form>
        )
    }
}

Form.contextTypes = {
    changeTitle: React.PropTypes.func
};