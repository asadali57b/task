class Logger {
    logInfo(message){
        console.log(`[${new Date().toISOString()}][INFO]`,message);
    }
    logError(error){
        console.log(`[${new Date().toDateString()}][ERROR]`,error)
    }
}
module.exports=new Logger();