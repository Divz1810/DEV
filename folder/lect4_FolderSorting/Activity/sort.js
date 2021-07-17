let fs= require("fs");
let extensions= require("./extensions");

//folder name
let testFolderPath= "./testFolder";
let contents= fs.readdirSync(testFolderPath); //reads content from testFolderPath i.e testFolder
//console.log(contents);

for(let i=0;i<contents.length;i++){
    let file= contents[i];
    sort(file);
}

//function sort
function sort(file){
    let ext= file.split(".")[1];
    let folderName = getFolderName(ext);
    //console.log(ext, folderName);

    let folderPath = testFolderPath+"/"+folderName;
    if(!fs.existsSync(folderPath)){
        fs.mkdirSync(folderPath);
    }
    let source= testFolderPath+"/"+file;
    let dest= folderPath+"/"+file;

    fs.copyFileSync(source, dest);//copy file from source to dest
    fs.unlinkSync(source);//remve file from source
}

function getFolderName(ext){
    let folderName;
    for(let key in extensions){
        if(extensions[key].includes(ext)){
            folderName= key;
            return folderName;
        }
    }
}