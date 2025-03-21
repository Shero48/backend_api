const express=require('express');
const app=express();
const cors=require('cors');
const cloud=require('cloudinary').v2;
app.use(cors());
const multer=require('multer');
const {user,db}=require('./db');

const storage=multer.diskStorage({
    filename:(req,file,cb)=>{
        const f_name=file.originalname;
        console.log(file,"file",f_name)
        
        cb(null,f_name.toString());
    }
})
const upload=multer({storage:storage,limits:80000000,dest:'upload/'}).single("image");
app.use(express.json());
cloud.config({
    cloud_name: 'dtc066h1l',
    api_key: '576652122649488',
    api_secret: '_wgz69WoXzP6bC7NAPUNaep_MQc',
    secure: true,
  });

app.post('/post',upload,async(req,res)=>{
    try{
        const {tittle,dec,price,discount,category,quantity}=req.body;
        const image=req.file;
        //console.log(req.body,req.file,image.filename);
        
        let link;
        if(image){
            console.log("work");
            const store=await cloud.uploader.upload(image.path.toString(),{resource_type:"auto",public_id:image.filename.toString()},(err,res)=>{
                console.log(res,"success");
                if(err)  return err;
            });
            link=store.secure_url;
            console.log(link);
        }else{
            return res.status(500).json("empty file please send image");
        }
        const post=await user.insertOne({
            tittle:tittle,
            dec:dec,
            image:link,
            price:price,
            discount:discount,
            category:category,
            quantity:quantity
        })
        res.status(200).json({
            mes:"upload success",
            post
        })
    }catch(err){
        console.log(err);
    }
})
app.get('/images',async(req,res)=>{
    try{
        const post=await user.find({});
        res.status(200).json({
            mes:"data finded",
            post
        })
    }catch(err){
        console.log(err);
    }
})

app.listen(2000,()=>{
    console.log("server is running");
    db();
})