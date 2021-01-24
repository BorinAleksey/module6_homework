
const func = function(x){
	for(let i=2; i<x; i++){
  if(x % i === 0){
     return false
  }else if(x>1000){
  return "данные неверны"
  }
  }
  return true
  }
  
  

console.log(func(3))