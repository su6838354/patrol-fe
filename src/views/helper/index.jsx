import React from 'react';
import PeopleList from '../../components/peopleList'

export default class Helper extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            department: false,
            id: '1',
            title: '重点人员管控',
            role: '帮教人员',
            type: 'help',
            detailPath: 'helper-detail'
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
                    {...this.state}
                />
            </div>
        )
    }
}