///////////////////////////////////////////////////
//***************RADIX SORT HELPER 1 ************/
///////////////////////////////////////////////////

// getDigit function returns the digit in num at the given place value.
// getDigit(12345,0)//5 times
// //if the given place is 0, it needs to look at all 5 numbers so 5 times.
function getDigit(num, place){    
    return Math.floor(Math.abs(num) / Math.pow(10, place) % 10)
}

//getDigit(7323)
//return Math.floor(Math.abs(num) / Math.pow(10, place) % 10)
                     //7323      / Math.pow(10, 2) % 10
                     // 7323     / 100   % 10
                     //73.23 % 10
                     //modulo is 3

console.log(getDigit(12345, 12))
// getDigit(12345,0)//5 times
// //if the given place is 0, it needs to look at all 5 numbers so 5 times. 
// getDigit(12345,1)//4 times
// getDigit(12345,2)//3 times
// getDigit(12345,3)//2 times
// getDigit(12345,4)//1 time
// getDigit(12345,5)//0 time





















///////////////////////////////////////////////////
//***************RADIX SORT HELPER 2 ************/
///////////////////////////////////////////////////


function digitCount(num){
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) +1
}
//console.log(digitCount(21388))

















///////////////////////////////////////////////////
//***************RADIX SORT HELPER 3 ************/
///////////////////////////////////////////////////


function mostDigits(nums){
    let maxDigits = 0;
    for(let i = 0; i < nums.length;  i++ ){
        maxDigits = Math.max(maxDigits, digitCount(nums[i]))
    }
    return maxDigits
}
console.log(mostDigits([66,55,44,21,33,45,54]))
















///////////////////////////////////////////////////
//******************** RADIX SORT *****************/
///////////////////////////////////////////////////


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