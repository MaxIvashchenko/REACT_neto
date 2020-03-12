import React from 'react';
import moment from 'moment'
import 'moment/locale/ru';

export default function DateTimePretty(date) {
    return function (Component) {
        return class Kol extends React.Component {
            state = { date: '' }
            changeTime() {
                const minutesFormDate = moment().diff(moment(date), 'minutes')
                if (minutesFormDate < 60) {
                    return `${minutesFormDate} minutes ago`
                } else if (minutesFormDate > 60 && minutesFormDate < 1440) {
                    return `${Math.floor(minutesFormDate / 60)} hours ago`
                } else  {
                    return `${Math.floor(minutesFormDate / 1440 )} days ago`
                }
            }
            componentDidMount() {
                this.setState({ date: this.changeTime() })
            }

            render() {
                
                return <Component date={this.state.date} />
            }
        }
    };
}