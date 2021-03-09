function smallestOfThree(x, y, z) {
    let smallest = Number.MAX_SAFE_INTEGER;
    smallest = smaller(x, smallest)
    smallest = smaller(y, smallest)
    smallest = smaller(z, smallest)
    function smaller(n, small) {
        if (n < small) {
            small = n;
        }
        return small;
        //return n < small ? n : small
    }
    return smallest;
}
console.log(smallestOfThree(25464, 5523, 33643));