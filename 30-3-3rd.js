function pyramid(row){
    for(var i = 0; i <=row; i++){
        var space="";
        for(let s = 0; s<=(row-i-1); s++){
            space= space+" ";
        }
        var result="";
        for (var j = 1; j <=2*i+1; j++ ){
            result= result+"*"; 
        }
        console.log(space+result);
          result="";
    }
   return result;
}
console.log(pyramid(5));