let fs = require("fs");
let files = ["../f1.txt" , "../f2.txt" , "../f3.txt"];

call(0);

function call(i){
    if(i<files.length){
        fs.readFile(files[i], function(err,data){
            console.log(data+""); 
            call(i+1);
        });
    }
}