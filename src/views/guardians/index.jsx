import React from 'react';
import PeopleList from '../../components/peopleList'

export default class Guardians extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            department: true,
            id: '1',
            title: '重点部位守护',
            role: '负责人'
        }
    }
    render () {
        return(
            <div>
                <PeopleList
                    departmentShow = {this.state.department}
                    feedId = {this.state.id}
                    title = {this.state.title}
                    role = {this.state.role}
                />
            </div>
        )
    }
}