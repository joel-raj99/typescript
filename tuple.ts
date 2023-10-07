//simple tuple

let mytuple:[string,number,boolean]
mytuple=['joel',1500,true]
console.log(mytuple)

//empty tuple
var tup=[]
tup=[1]
tup=[2]
console.log(tup)

// operatipn tuple
var mytuple1 = [10,"Hello","World","typeScript"]; 
console.log("Items before push "+mytuple1.length)    // returns the tuple size 

mytuple.push(12)                                    // append value to the tuple 
console.log("Items after push "+mytuple1.length) 
console.log("Items before pop "+mytuple1.length) 
console.log(mytuple1.pop()+" popped from the tuple") // removes and returns the last item
  
console.log("Items after pop "+mytuple1.length)



//