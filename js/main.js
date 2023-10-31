let n=prompt("Enthe the head or tail");

let promise=new Promise((resolve,reject)=>{
    if(n=="head"){
        resolve()
    }
    else if(n=="tail"){
       reject()
    }
    else{
        document.write("Enter only head or tail");
    }
});
function success(){
    document.write("Success");
}
function failure(){
    document.write("Failure");
}
promise.then(success).catch(failure);