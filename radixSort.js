///////////////////////////////////////////////////
//***************RADIX SORT HELPER 1 ************//
///////////////////////////////////////////////////

// getDigit function returns the digit in num at the given place value.
// getDigit(12345,0)//5
// //if the given place is 0, the number at the location 0 is 5.
//the place counts starts from the right to left. 1 -> 10 -> 100 -> 1000 -> 10000 ...
function getDigit(num, place){    
    return Math.floor(Math.abs(num) / Math.pow(10, place) % 10)
}

//getDigit(-7323,2)
//return Math.floor(Math.abs(num) / Math.pow(10, place) % 10)
//.abs return only absolute values
                     //7323       / Math.pow(10, 2) % 10
                     //7323       / 100            %  10
                     //73.23 % 10 
                     //modulo is 3

console.log("getDigit 0", getDigit(7323, 0))//3
console.log("getDigit 1", getDigit(7323, 1))//2
console.log("getDigit 2", getDigit(7323, 2))//3
console.log("getDigit 3", getDigit(7323, 3))//7

// getDigit(12345,0)//5 
// //if the given place is 0, the number at the location is 5
// getDigit(12345,1)//4 
// getDigit(12345,2)//3 
// getDigit(12345,3)//2 
// getDigit(12345,4)//1 
// getDigit(12345,5)//0 





















///////////////////////////////////////////////////
//***************RADIX SORT HELPER 2 ************/
///////////////////////////////////////////////////
//how many numbers of numbers are there in the longest number (lol)

function digitCount(num){
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) +1
}

console.log("digitCount", digitCount(7323))//4

















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
console.log("mostDigit", mostDigits([23,334,21, 3421, 1453, 9898, 7323])) //4
















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

 console.log(radixSort([23,334,21, 3421, 1453, 9898, 7323]))