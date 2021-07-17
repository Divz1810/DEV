let fs= require("fs");
let extensions= require("./extensions");

let testFolderPath= "./testFolder2";
let contents= fs.readdirSync(testFolderPath);
console.log(contents);

for(let i=0;i<contents.length;i++){
    let file= contents[i];
    sort(file,testFolderPath);
}

function sort(file, FolderPath){
    if(file.indexOf('.')>-1){
        let ext= file.split(".")[1];
        let folderName = getFolderName(ext);
        //console.log(ext, folderName);
             FolderPath = FolderPath+"/"+folderName;
            if(!fs.existsSync
                (FolderPath)){
                fs.mkdirSync(FolderPath);
            }
            let source= testFolderPath;
            let dest= testFolderPath+"/"+folderName;

            fs.copyFileSync(source, dest);//copy file from source to dest
            fs.unlinkSync(source);//remve file from source
    }else{
        let contents2= fs.readdirSync(FolderPath+"/"+file);
        for(let i=0;i<contents2.length;i++){
            let file2 = contents2[i];
            sort(file2, FolderPath+"/"+file);
        }
        contents2= fs.readdirSync(FolderPath+"/"+file);
        if(contents2.length==0){
            fs.rmdirSync(FolderPath+"/"+file);
        }
    }
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