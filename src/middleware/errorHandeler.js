const errorHandeler =(err,res,req,next)=>{

    console.log(err.stack);

    const ststusCode=err.ststusCode || 500;
    const message= err.message ||'Internal server error';

    res.status(ststusCode).json({
        success:false,
        ...err[process.env.NODE_ENV ==='developement' && {stack:err.stack}]
    });
}

module.exports = errorHandeler;