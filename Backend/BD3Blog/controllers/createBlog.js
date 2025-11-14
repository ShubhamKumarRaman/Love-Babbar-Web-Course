const blog = require('../models/Blog')

exports.createBlog  = async(req, res)=>{
    try{
        const {blog, likesCount, comments} = req.body;

        const response = await Blog.create({blog, likesCount, comments});

        res.status(200)
        .json({
            success:true, 
            data:response, 
            message:'Entry created successfully'
        })
    }catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false, 
            data:'Internal Server Error', 
            message:err.message
        })
    }
}