const mongoose = require('mongoose');

const productSchema= new  mongoose.Schema({

    name:{
        type:String,
        required:[true,"Product names is required"],
        trim:true,
        maxLength:[100,'Name  Cannot exceed 100 Characters']

    },
    description:{

        type: String,
        trim:true
    },

    price:{
        type:Number,
        required:[true,'price is required'],
        min:[0,"Price cannot be Negative"]
    },
    category:{
        type:String,
        enum:['electronices','clothing','food','others'],
        default:'others'
    },
    stock:{
        type:Number,
        default:0,
        min:0
    },
    isActive:{

        type:Boolean,
        default:true
    }

},{
    timestamps:true
});

module.exports= mongoose.model("Product",productSchema);