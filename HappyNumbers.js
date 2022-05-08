function HappyNumbers(num, counter = 0) {
    result = false;
    if (counter < 8) {
      let array = num.toString().split('').map(num => num * num)
      let sum = array.reduce((a, b) => a + b, 0)
  
      if (sum === 1) {
        return result = true
      }else {
        counter++
        HappyNumbers(sum, counter)
      }
    }
  
    // code goes here  
    return result;
  
  }
  
  // keep this function call here 
  console.log(HappyNumbers(readline()));