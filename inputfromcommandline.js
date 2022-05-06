//  console.log(process.argv)
/*for creating and adding textto it using terminal -
E:\node demo> node inputfromcommandline.js add apple.txt 'hellobroo'
* for removing file from terminal - node inputfromcommandline.js remove apple.txt */
const fs=require('fs');
const input=process.argv;
if(input[2]=='add'){
    fs.writeFileSync(input[3],input[4]);
}else if(input[2]=='remove'){
    fs.unlinkSync(input[3]);
}else{
    console.log('invalid command');
}
