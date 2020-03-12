
export default function SayHi(Component) {

    return function (props, ...args) {
        
        console.log(`${props.value - 10} - my value minus 10`);

        return Component.apply(this, [props, ...args])
    }
}