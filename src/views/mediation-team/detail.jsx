import React from 'react';
import PeopleDetail from '../../components/peopleDetail'


export default class mediationDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            department: false,
            id: '1',
            title: '人民调解队伍',
            role: '调解员',
            period: false,
            area: true,
            good: true,
            case: true,
        }
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