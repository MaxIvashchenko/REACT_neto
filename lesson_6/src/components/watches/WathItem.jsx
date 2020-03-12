import React from 'react'
import moment from 'moment'
import 'moment/locale/ru';

export default class WathItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        this[this.props.id] = setInterval(() => {
            this.setState({ time: moment().subtract(this.props.localTimezone, 'hours').add(this.props.timeZone, 'hours').format('hh:mm:ss') })
            console.log('tic')
            // console.log(this.props.id )
            // console.log(this[this.props.id])

        }, 1000)
        
    }

    componentWillUnmount() {
        clearInterval(this[this.props.id]);
    }

    render() {
        return (

                <div className="watches-wrap">
                    <h3 >{this.props.name}</h3>
                    <div className="watches">
                        {this.state.time}
                        <span className="remove" onClick={() =>  { this.props.handleRemove(this.props.id) } }>✘</span>
                    </div>
                </div>

        )
    }


}