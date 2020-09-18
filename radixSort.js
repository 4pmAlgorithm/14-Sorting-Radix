function getDigit(num, place){
    
    return Math.floor(Math.abs(num) / Math.pow(10, place) % 10)
}
console.log(getDigit(12345, 0))

function digitCount(num){
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) +1
}
console.log(digitCount(21388))

function mostDigits(nums){
    let maxDigits = 0;
    for(let i = 0; i < nums.length;  i++ ){
        maxDigits = Math.max(maxDigits, digitCount(nums[i]))
    }
    return maxDigits
}


function radixSort(nums){
    let maxDigitCount = mostDigits(nums)
    for(let k = 0; k < maxDigitCount; k++){
        let digitBuckets = Array.from({length: 10}, () => [] )
        for(let i = 0; i < nums.length; i++){
            let digit = getDigit(nums[i], k)
            digitBuckets[digit].push(nums[i])
        }
        nums = [].concat(...digitBuckets)
    }
    return nums
}

console.log(radixSort([23,334,21, 3421, 1453, 9898]))