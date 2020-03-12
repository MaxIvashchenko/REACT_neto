import React from 'react'
import WatchModel from './model/WatchModel'
import WathItem from './WathItem';

export default class Watches extends React.Component {

    state = {
        timeZone: 0,
        name: 'Стандартное время',

        watches: [new WatchModel('Kiev', 2)]
    };

    localTimezone = -(new Date().getTimezoneOffset() / 60);


    handleChange = evt => {
        const name = evt.target.name;
        const value = evt.target.value;
        this.setState({ [name]: value });
    }
    handleSubmit = (evt) => {
        evt.preventDefault();
        this.setState({ watches: [...this.state.watches, new WatchModel(this.state.name, this.state.timeZone)] });
    }
    handleRemove = (id) => {
        this.setState({ watches: [...this.state.watches.filter((o, i) => i !== id)] })
    }

    render() {
        return (

            <React.Fragment>
                <form onSubmit={this.handleSubmit}>

                    <label htmlFor="name"> Название
                <input name="name" type='text' id="name" value={this.state.watches.name} onChange={this.handleChange} required />
                    </label>

                    <label htmlFor="timeZone">Временная зона
                <input name="timeZone" type='text' id="timeZone" value={this.state.watches.timeZone} onChange={this.handleChange} required />
                    </label>

                    <button type="submit">Добавить</button>
                </form>

                <div>
                    {this.state.watches.map((watch, i) => (
                       <> <WathItem
                            key={i}
                            id={i} 
                            name={watch.name}
                            localTimezone={this.localTimezone}
                            timeZone={watch.timeZone}
                            handleRemove={this.handleRemove} />
                            </>
                    ))}
                </div>
            </React.Fragment>

        )
    }
}