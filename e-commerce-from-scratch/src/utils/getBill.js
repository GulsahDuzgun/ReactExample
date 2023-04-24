const totalPrice = (arr) => {
    let temp = 0;

    if(!!arr) {
        arr?.map((item) => {
            return temp = temp + item?.price

        })
    } else {
        return 0;
    }
}

export default totalPrice;