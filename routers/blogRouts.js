import express from "express"
import { changeBlog, createNewBlog, deleteBlog, getMyBlog } from "../Controlers/blogControler.js";
import { isSignin } from "../middlewares/auth.js";

const router = express();
router.get("/blog/create",(req,res)=>{
    res.render("createBlog.ejs");
})
router.post("/api/blog/new",isSignin,createNewBlog);

router.get("/api/blog/myBlog",isSignin,getMyBlog);

router.put("/api/blog/updateBlog/:id",isSignin,changeBlog);

router.delete("/api/blog/deleteBlog/:id",isSignin,deleteBlog);


export default router