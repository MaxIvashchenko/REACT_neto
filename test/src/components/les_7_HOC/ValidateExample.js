

const mul = (a, b) => a * b;
const add = (a, b) => a + b;
const div = (a, b) => a / b;
const sub = (a, b) => a - b;

// function operationExecutor(a, b, operation) {
//     if (!isNumber(a) || !isNumber(b)) {
//         return new Error("Оба аргумента должны быть числами.")
//     }
//     return operation(a, b);
// }

const isNumber = (value) => typeof value === "number";

function withValidator(isValid, operation) {
    return function (...args) {
        if (!args.every(isValid)) {
            return new Error("Передан некорректный аргумент");
        }
        return operation.apply(this, args);
    };
}

function withLogger(tag, operation) {
    return function(...args) {
        console.log(tag, ...args);
        return operation.apply(this, args);
    };
}

const loggedNumberAdd = withLogger('сумма', add)
const numberAdd = withValidator(isNumber, add);
const numberMul = withValidator(isNumber, mul);
const loggedNumberSum = withLogger (
    'сумма',
    withValidator(isNumber, add)
)

loggedNumberSum(6,1)
numberMul( 3, 5)
numberAdd(6, 1)