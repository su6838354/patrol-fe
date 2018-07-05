import React from 'react';
import Form from '../../components/form';
import bannerImage from '../../assets/images/appoint.png';


export default class Appointment extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sex: false,
            id: '3',
            image: bannerImage,
            title: '预约办事',
            type: 'yuyue'
        }
    }
    render () {
        return(
            <div>
                <Form
                    sexShow = {this.state.sex}
                    feedId = {this.state.id}
                    imageUrl = {this.state.image}
                    {...this.state}
                />
            </div>
        )
    }
}
