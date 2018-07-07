/**
 * Created by pdd on 2018/7/7.
 */

import './index.less';

function pad(num, n) {
    let len = num.toString().length;
    while(len < n) {
        num = "0" + num;
        len++;
    }
    return num;
}

export default (props) => {

    const  {
        id,
        sexShow,
        name,
        sex,
        mobile,
        content,
        image_url
    } = props;
    const session_id = pad(id, 6);
    return (
        <div className="content">
        <div className="title">提交信息</div>
            <div>流水号：{session_id}</div>
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