// import React from 'react' 

export default function WithLogger(Component) {

    return function (props, ...args) {
        console.log(props);
       
        return Component.apply(this, [props, ...args])
    }
    
    //  или так с помощью Класса

    // return class extends React.Component {
    //     render() {
    //         console.log(this.props);
    //         return <Component {...this.props} /> // передает все пропсы
    //     }
    // }

}

