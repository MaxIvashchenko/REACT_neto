import React from 'react'

import WithLogger from './WithLogger'
import Counter from './Counter'
// import SayHi from './SayHi'


const LoggedComponent = WithLogger(Counter)


export default class HOC extends React.Component {

    state = {
        value: 0
    };
 

    render() {
        const { value } = this.state
        return (
            <>
                <LoggedComponent
                    value={value}
                    addOne={() => this.setState(({ value }) => ({ value: value + 1 }))}
                    decOne={() => this.setState(({ value }) => ({ value: value - 1 }))}
                />

            </>
        )
    }
}

