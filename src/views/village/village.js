/**
 * Created by pdd on 2018/8/4.
 */

import React from 'react';
import './index.less';
import { hashHistory } from 'react-router';


const villages=['静南小区','团结村','富民村','排衙村',
    '北闸村','新港村','北双村','盘西村','协西村','协兴村','协北村','双津村'];



class Village extends React.Component {
    constructor(props) {
        super(props);
        const { type } = props;
        if (type === 'help') {
            window.document.title = '帮教小组成员'
        }
        if (type === 'mediation') {
            window.document.title = '人民调解队伍'
        }
    }

    componentDidMount() {
        // const { type } = this.props;
        // if (type === 'help') {
        //     window.document.title = '帮教小组成员'
        // }
        // if (type === 'mediation') {
        //     window.document.title = '人民调解队伍'
        // }

    }

    render() {
        const { type } = this.props;
        const villageElem = villages.map((item) => {
            return (
                <div className='item' key={item} onClick={() => {
                    if (type === 'help') {
                        hashHistory.push('helper/' + item)
                    }
                    if (type === 'mediation') {
                        hashHistory.push('mediation/' + item)
                    }
                }}>
                    {item}
                    <div className='arrow'></div>
                </div>
            )
        })

        return (
            <div className='vvvvv'>

                <div className='title'>
                    {window.document.title}村落列表
                </div>
                <div className='village'>
                    {villageElem}
                </div>
            </div>
        )
    }
}

export default Village;
