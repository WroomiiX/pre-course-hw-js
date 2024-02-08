const giveMeRightCondition = (value1= 200, value2=100, maximum=100) => {
    if (value1 === value2 && value1 <= maximum) {
        console.log('Success!');
    } else {
        console.log('Something wrong!');
    }
}
giveMeRightCondition()

