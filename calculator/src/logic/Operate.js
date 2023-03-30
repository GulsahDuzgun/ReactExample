import Big from "big.js";

export default function Operate(numberOne, numberTwo, operation) {
    const one = Big(numberOne)
    const two = Big(numberTwo)

    if(operation === "+") {
        return one.plus(two).toString();
    }else if( operation === "-") {
        return one.sub(two).toString();
    }else if( operation === "÷") {
        return one.div(two).toString();
    }else if( operation === "x") {
        return one.times(two).toString();
    }else if( operation === "%") {
        return one.mod(two).toString();
    }else {
        throw Error(`Unknown operation ${operation}`)
    }

}