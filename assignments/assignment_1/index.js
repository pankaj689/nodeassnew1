function getNameFromCommandLine() {
    // Write you code here, name should be taken as args in process.argv
    return process.argv[process.argv.length-1]
}

function getNameFromEnv() {
    // Write your code here
    return process.env.name
}

function getNameFromReadLine() {
    // Write your code hererw
    var namecom=require("readline");
    var ipt =namecom.createInterface({
        input:process.stdip,
        output:process.stdout
    })
    ipt.question("nmae",(ans)=>{
        console.log(ans)
    })
}

module.exports = {
    getNameFromCommandLine,
    getNameFromEnv,
    getNameFromReadLine
}