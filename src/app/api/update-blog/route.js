import connectDB from "@/database";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";

const EditBlog = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required()
}).options({stripUnknown: true});

export async function PUT() {
    try{
        await connectDB()
    const {searchParams} = new URL(req.url)
    const id = searchParams.get('id')

    if(!id){
        return NextResponse.json({
            success: false,
            message: 'Blog ID is required'
        })
    }
    const {title, description} = await req.json()

    const { error } = EditBlog.validate({ title, description });

        if(error){
            return NextResponse.json({
                success: false,
                message: error.details[0].message
            })
        }
        
        const updateBlogByID = await Blog.findOneAndUpdate({_id:id}, {title, description}, {new:true})
        if(updateBlogByID){
            return NextResponse.json({
                success: true,
                message: 'Blog Successfully Updated'
            })
        }else{
            return NextResponse.json({
                success: false,
                message: "Error: Something Went Wrong Trying to Update the Blog Please Try Again....",
            })
        }
    }catch(e){
        console.log(e)
        return NextResponse.json({
            success: false,
            message: "Error: Something Went Wrong Please Try Again....",
            error: e.message
    })
    }

}