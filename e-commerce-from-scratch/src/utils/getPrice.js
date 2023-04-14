const getPriceParts = (price) => {
    let temp = price.toString()
    let index = temp.indexOf(".");
    const intPart = parseInt(price.toFixed(1));
    const floatPart = temp.slice(index+1) 

    return {
        intPart ,
        floatPart
    }
}

export default getPriceParts;