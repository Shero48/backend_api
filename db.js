const mongoose=require('mongoose');
const schema=mongoose.Schema;

    const db = async () => {
        try {
            await mongoose.connect('mongodb+srv://sunils:sunil@cluster0.qaaiy.mongodb.net/e_com?retryWrites=true&w=majority', {
                serverSelectionTimeoutMS: 30000, // 30 seconds timeout
                socketTimeoutMS: 45000,
            });
            console.log('✅ MongoDB Connected');
        } catch (err) {
            console.error('❌ MongoDB Connection Error:', err);
            process.exit(1);
        }
    };
    

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