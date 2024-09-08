const { default: connectDB } = require("@/database");
const { default: Blog } = require("@/models/blog");
const { NextResponse } = require("next/server");

export async function GET() {
    
    try {
        await connectDB()
        const getDataFromDatabase = await Blog.find({})
        if(getDataFromDatabase.length > 0){
            return NextResponse.json({
                success: true,
                data: getDataFromDatabase
            })
        }else{
            return NextResponse.json({
                success: false,
                message: "Error: Something Went Wrong....",
                error: error.message,
            })
        }
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: "Error: Something Went Wrong....",
            error: error.message,
        })
    }
}