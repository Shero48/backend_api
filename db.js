const mongoose=require('mongoose');
const schema=mongoose.Schema;

const db=async()=>{
        await mongoose.connect('mongodb://localhost:27017/e_com').then(res=>{
            console.log("db connected");
        }).catch(err=>{
            console.log("err occuered : ",err);
        })
}

const model=new schema({
    tittle:{
        type:String,
        required:true
    },
    dec:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    discount:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    }
},{timestamps:true});

const user=mongoose.model("product",model);

module.exports={user,db};