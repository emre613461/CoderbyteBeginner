function ThreeFiveMultiples(num) { 
    let arr = [];
    let tot = 0 ;
    for(var i = num - 1; i > 1; i--) {
      if(i % 5 === 0 || i % 3 === 0) {
        arr.push(i);
      }
    }
    for ( i = 0; i < arr.length; i++) {
      tot = tot + arr[i];
    }
  
    // code goes here  
    return tot; 
  
  }
     
  // keep this function call here 
  console.log(ThreeFiveMultiples(readline()));