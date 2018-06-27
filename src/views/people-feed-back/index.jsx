import React from 'react';
import Form from '../../components/form';
import bannerImage from '../../assets/images/people_login.jpg';


export default class PeopleFeedBack extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sex: false,
            id: '2',
            image: bannerImage,
            title: '民情反馈'
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
