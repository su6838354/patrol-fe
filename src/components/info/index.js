/**
 * Created by pdd on 2018/7/7.
 */

import './index.less';

export default (props) => {

    const  {
        sexShow,
        name,
        sex,
        mobile,
        content,
        image_url
    } = props;
    return (
        <div className="content">
        <div className="title">反馈信息</div>
        <div>姓名：{name}</div>
        <div>手机：{mobile}</div>
            {
                sexShow && <div>性别：{sex === 1 ? '男' : '女'}</div>
            }
        <div>反馈内容：{content}</div>
        <div style={{display: 'flex'}}>照片：<img className={'image'} src={image_url}></img></div>
        </div>
    )
}