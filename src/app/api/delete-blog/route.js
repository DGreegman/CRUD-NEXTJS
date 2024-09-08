import connectDB from "@/database"
import Blog from "@/models/blog";

export async function DELETE(req){
    try {
        // const id = req.params.id;
        await connectDB();
        const {searchParams} = new URL(req.url)
        const id = searchParams.get('id')

        if(!id){
            return NextResponse.json({
                success: false,
                message: "Error: Blog ID is Required...."
            })
        }
        const deletCurrentBlogByID = await Blog.findByIdAndDelete(id)
        if(deletCurrentBlogByID){
            return NextResponse.json({
                success: true,
                message: "Error: Counldn't delete the Blog"
            })
        }else{
            return NextResponse.json({
                success: false,
                message: "Error: Something Went Wrong...."
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