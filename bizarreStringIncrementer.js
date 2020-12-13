// Start your implementation here


function bizarreStringIncrementer(){
    const input = arguments[0];

    if (! input ){
        return "Invalid input string"
    }
    const reg = /\d+/g
    const extractedNumbers = input.match(reg)
    console.log(extractedNumbers)
    let numberIncremented = 1;
    
    if (extractedNumbers !== null){
        
        const lengthOfNumber = extractedNumbers[extractedNumbers.length-1].length
        
        numberIncremented =  parseInt(extractedNumbers[extractedNumbers.length-1])  +1;
        const splittedStrings = input.split(extractedNumbers[extractedNumbers.length -1]).filter(str => str)

    
        if (splittedStrings.length !== 0){
            return splittedStrings[0] + numberIncremented.toString().padStart(lengthOfNumber, '0')
        }else{
            return numberIncremented.toString().padStart(lengthOfNumber, '0')
        }

    }else{
        return input + numberIncremented;
    }
    


}
