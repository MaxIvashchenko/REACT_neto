import React from 'react'
import Panel from './Panel'
import List from './List'



export default class Test extends React.Component {
    constructor(props) {
        super(props);

        this.array = props.array;
        this.state = {
            filters: props.filters,
            selected: props.selected,
            array: props.array
        }
    }

    onSelectedFilter = (filter) => {
        this.setState({
            selected: filter,
            array: filter === 'All' ? this.array : this.array.filter(i => i.name === filter)
        })
    }


    render() {
        return (
            <div>
                <h1>-=* Hello *=-</h1>

                {this.array.map((o,i) => <p key={i}>{o.name} - {o.value}</p>)}
                
                <Panel
                    filters={this.state.filters}
                    selected={this.state.selected}
                    onSelectedFilter={(filter) => this.onSelectedFilter(filter)}
                />
                <List array={this.state.array}/>

            </div>
        )
    }
}