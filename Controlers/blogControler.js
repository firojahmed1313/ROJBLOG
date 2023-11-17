import {Blog} from "../Models/blog.js"

export const createNewBlog =async (req,res)=>{

    const { title, description, imgUrl } = req.body;

    const blog = await Blog.create({
        title,
        description,
        imgUrl,
        user: req.user
    });
    res.status(201).json({
        success: true,
        blog
    })
}


export const getMyBlog = async(req,res)=>{
    const userid = req.user._id;
    const blogData = await Blog.find({user:userid})
    res.status(200).json({
        success: true,
        blogData
    })
}


export const changeBlog =async()=>{
    const { title, description, imgUrl } = req.body;
    const id = req.params.id;

    const blogData = await Blog.findById(id)
    if(!blogData) return res.status(404).json({
        success: false,
        massage:"Blog not found "
    })
    blogData.title=title;
    blogData.description=description;
    blogData.imgUrl=imgUrl;
    blogData.save();
    res.json({
        success: true,
        massage:"update Blog",
        blogData
    })
}


export const deleteBlog =async()=>{
    const { title, description, imgUrl } = req.body;
    const id = req.params.id;

    const blogData = await Blog.findById(id)
    if(!blogData) return res.status(404).json({
        success: false,
        massage:"Blog not found "
    })

    res.json({
        success: true,
        massage:"Blog Deleted "
    })
}