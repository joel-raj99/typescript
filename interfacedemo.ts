interface values{
    x:number,
    y:number
}
let addition = (val:values)=>{return val.x + val.y}

let division =(val:values)=>{return val.x / val.y}

let subraction =(val:values)=>{return val.x - val.y}

let multiplication =(val:values)=>{return val.x * val.y}

let percentage =(val:values)=>{return val.x % val.y}

const values : values ={ x:150, y:120};
console.log(values.x)
console.log(values.y)

let  add_result: number = addition(values);
let div_result: number = division(values);
let sub_result: number =subraction(values);
let mul_result: number = multiplication(values);
let per_result :number = percentage(values);

console.log("add:" + add_result);
console.log("div"  +div_result);
console.log("mul"+mul_result);
console.log("sub" +sub_result);
console.log("per"+per_result);