import React from 'react'
import ProjectList from './ProjectList'
import Toolbar from './Toolbar'


export default class Portfolio extends React.Component {
    constructor(props) {

        super(props);

        this.projects = props.projects;

        this.state = {
            filters: props.filters,
            selected: props.selected,
            projects: props.projects
        }

    }
    onSelectFilter = (filter) => {
        this.setState({
            selected: filter,
            projects: filter === 'All' ? this.projects : this.projects.filter(item => item.category === filter)
        })
    } 

    render() {
        return (<>
            <Toolbar
                filters={this.state.filters}
                selected={this.state.selected}
                onSelectFilter={(filter) => this.onSelectFilter(filter)}
            />
            <ProjectList projects={this.state.projects} />
        </>
        )
    }

}