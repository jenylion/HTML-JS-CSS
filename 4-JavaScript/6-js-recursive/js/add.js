function add(num) {
    if (num == 0) {
        return 0
    }
    return add(num - 1) + num
}
function factor(num) {
    if (num == 1) {
        return 1
    }
    return factor(num - 1) * num
}
