const logger =(req,res,next)=>{

    const timestamps= new Date().toISOString();
    console.log(`[${timestamps}] ${req.method} ${req.originalUrl}`);
    next();
}

module.exports = logger;

