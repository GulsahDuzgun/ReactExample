const TotalPrice = (item, temp) => {
    //console.log(item)

    if(item !== null) {
        let temp2 = temp + item?.price
        console.log(temp2)
        return temp2;

    } else {
        return 0;
    }
}

export default TotalPrice;