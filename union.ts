
function printStatusCode (code: string | number){
 console.log(`My code is ${code}.`)
}

printStatusCode(404);
printStatusCode('404');


function code (code : string | boolean ){
    console.log(`my code is${code}`)
    
}
code(true);
code('404');

function  prints (code : number | boolean )
{
    console.log(`code is ${code}`)
}
prints(404);
prints(false)