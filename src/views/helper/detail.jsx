import React from 'react';
import PeopleDetail from '../../components/peopleDetail'


export default class helperDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            department: false,
            id: '1',
            title: '重点部位守护',
            role: '帮教人员'
        }
    }
    render () {
        return(
                <PeopleDetail
                    departmentShow = {this.state.department}
                    feedId = {this.state.id}
                    title = {this.state.title}
                    role = {this.state.role}
                />
        )
    }
}