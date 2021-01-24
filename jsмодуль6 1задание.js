const test = function(a){
    let x = 0;
    let y = 0;
    let z = 0;
    let s = 0;
    for(let i=0; i<a.length; i++){
        if(a[i]%2 == 0){
      x = x+1
      }else if(a[i]==0){
      z++
      }
      else{
      y++
      }
      
    }
    console.log(x, y, z)
    }
    test([4, 5, 2, 14, 244, 0, "fwef"])