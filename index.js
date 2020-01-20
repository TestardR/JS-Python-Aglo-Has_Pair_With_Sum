const array = [1, 2, 4, 7]

function hasPairWithSum(arr, sum) {
    const mySet = new Set();
    const len = arr.length

    for(let i = 0; i < len; i++) {
        if(mySet.has(arr[i])) {
            return true
        } 
        mySet.add(sum - arr[i])
    }
    return false;
}


