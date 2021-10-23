// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import dbConnect from "../../utils/dbConnection";
dbConnect()
 const note=async (req,res)=>{
  res.json({test:"test"})
}

export  default note;