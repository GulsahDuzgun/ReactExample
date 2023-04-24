const TotalPrice = (item) => {
    let flag = false;
    console.log(item)
    if(!!item) {
        let temp;

        if(!flag) {
            temp = 0;
            flag = true
        }
        temp = temp + item?.price
        console.log(temp)
        return temp;

    } else {
        return 0;
    }
}

export default TotalPrice;