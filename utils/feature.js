import jwt from "jsonwebtoken";



export const createCookie = (user , res , massage) => {
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SCODE);
  console.log(token)
  res
    .status(201)
    .cookie("token", token, {
      expires: new Date(Date.now() + 1000 * 60 * 50),
      sameSite: process.env.NODE_MODE === "devlopment" ? "lax" : "none",
      secure: process.env.NODE_MODE === "devlopment" ? false :true ,
    })
    .json({
      success:true,
      massage, 
      user,
      token,
    });
};
