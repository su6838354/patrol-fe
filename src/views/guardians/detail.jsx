import React from 'react';
import PeopleDetail from '../../components/peopleDetail'


export default class leading extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            department: true,
            id: '1',
            title: '重点守护部位人员',
            role: '负责人',
            watch: true,
            period: true,
            path: true,

        };
    }
    render () {
        return(
                <PeopleDetail
                    departmentShow = {this.state.department}
                    feedId = {this.state.id}
                    title = {this.state.title}
                    role = {this.state.role}
                    {...this.state}
                    {...this.props}
                />
        )
    }
}