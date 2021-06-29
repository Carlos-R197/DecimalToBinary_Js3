function toBase2(number) {
    var array = new Array()
    array[0] = 0
    var i = 0

    while(number !== 0) {
        array[i] = number % 2
        number = parseInt(number / 2)
        i++
    }

    return array.reverse().join('')
}

module.exports = toBase2