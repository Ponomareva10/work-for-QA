function num (test) {
    let arr = [2, 3, 4, 5]
    for (i = 0; i < arr.length; i++) {
        if (test % i == 0) {
            console.log(arr[i])
        }
    }
}
num(22)