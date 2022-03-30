var marks=75;
switch(true){
    case marks>90:result="A Grade";break;
    case marks>75:result="B Grade";break;
    case marks>60:result="C Grade";break;
    case marks>45:result="D Grade";break;
    case marks>36:result="E Grade";break;
    default:result="fail"
}
console.log(result);