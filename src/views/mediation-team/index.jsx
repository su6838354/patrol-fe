/**
 * Created by pdd on 2018/6/24.
 */

import React from 'react';
import PeopleList from '../../components/peopleList'


export default class MediationTeam extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            department: false,
            id: '1',
            title: '人民调解队伍',
            role: '调解员',
            type: 'mediation',
            detailPath: '/mediation-detail',
            area: true,
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