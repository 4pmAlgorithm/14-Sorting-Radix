function getDigit(num, place){
    return Math.floor(Math.abs(num) / Math.pow(10, place) % 10)
}


function radixSort(numArr){

    const digitCount = (num) => {
        if(num === 0) return 1;
        return Math.floor(Math.log10(Math.abs(num))) +1
    }

   
    let maxDigits = 0;
    
    for(let i = 0; i < numArr.length; i++){
        maxDigits = Math.max(maxDigits, digitCount(numArr[i]))
    }
    console.log(maxDigits)



    for(let k = 0; k < maxDigits; k++){
        let digitBuckets = Array.from({length: 10}, () => [])
        console.log("digitBucket1", digitBuckets)

        
        for(let j = 0; j < numArr.length; j++){
            let digit = getDigit(numArr[j], k)   
               console.log(digit)
               digitBuckets[digit].push(numArr[j])
        }

        numArr = [].concat(...digitBuckets)

    }

    return numArr

}

console.log(radixSort([23,334,21, 3421, 1453, 9898, 7323]))