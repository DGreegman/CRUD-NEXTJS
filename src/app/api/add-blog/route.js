import connectDB from "@/database"
import Blog from "@/models/blog"
import Joi from "joi"
import { NextResponse } from "next/server"

const AddNewBlog = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required()
}).options({stripUnknown: true});
export async function POST(req) {
    
    try {
        await connectDB()
        const extractBlogData = await req.json()
        const {title, description} = extractBlogData



        const { error } = AddNewBlog.validate({ title, description });

        if(error){
            return NextResponse.json({
                success: false,
                message: error.details[0].message
            })
        }
        
        const newBlogData = await Blog.create({title, description})
        if(newBlogData){
            return NextResponse.json({
                success: true,
                message: 'Blog Successfully Created'
            })
        }else{
            return NextResponse.json({
                success: false,
                message: "Error: Something Went Wrong Please Try Again....",
            })
        }

    } catch (error) {
        console.log(error)
        return NextResponse.json({
            success: false,
            message: "Error: Something Went Wrong Please Try Again....",
            error: error.message
        })
    }
}