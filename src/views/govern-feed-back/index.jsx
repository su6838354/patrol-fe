/**
 * Created by pdd on 2018/6/22.
 */

import React from 'react';
import Form from '../../components/form';
import bannerImage from '../../assets/images/govern.jpg';

export default class GovernFeedBack extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sex: true,
            id: '1',
            image: bannerImage,
            title: '政务反馈'
        }
    }
    render () {
        return(
            <div>
                <Form
                    sexShow = {this.state.sex}
                    feedId = {this.state.id}
                    imageUrl = {this.state.image}
                />
            </div>
        )
    }
}