function radixSort(numArr){
    let maxDigits = 0;
    for(let i = 0; i < numArr.length; i++){
        maxDigits = Math.max(maxDigits, digitCount(nums[i]))
    }

    const digitCount = (num) => {
        if(num === 0) return 1;
        return Math.floor(Math.log10(Math.abs(num))) +1
    }
    
    for(let k = 0; i < maxDigits; k++){
        let digitBuckets = Array.from({length: 10}, () => [])
        console.log("digitBucket1", digitBuckets)

        for(let j = 0; j < numArr.length; j++){
            


        }
    }

}

