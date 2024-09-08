'use client'

import React, { useState } from 'react'
import Dialogu from '../dialogu'



function BlogOverView({blogList}) {
    const initailFormBlogData = {
        title: '',
        description: ''
    }
    const [loading, setLoading] = useState(false)
    const [blogFormData, setBlogFormData] = useState(initailFormBlogData)
    const [currentBlogId, setCurrentBlogId] = useState(null)

    async function handleFormDataSubmit(){
        try {
            setLoading(true)
            const response = await fetch('/api/add-blog', {
                method: 'POST',
                body: JSON.stringify(blogFormData)
            })
            const result = await response.json()
            if(result?.success){
                setBlogFormData(initailFormBlogData)
                setLoading(false)
            }
            console.log(result);
            
        } catch (error) {
            console.log(error);
            setLoading(false)
            setBlogFormData(initailFormBlogData)
        }
    }

    // function handle Delete
    async function handleDeleteByID(id){
        try {
            const response = await fetch(`/api/delete-blog?id=${id}`, {
                method: 'DELETE'
            })
            const result = await response.json()
            if(result?.success){
                console.log('successfully deleted');
                
            }
        } catch (error) {
            
        }
    }

    // funciton to handle Edit
     function handleBlogEdit(blogItem){

        setCurrentBlogId(blogItem?._id)
        setBlogFormData({
            title: blogItem?.title,
            description: blogItem?.description
        })
    }
    console.log(currentBlogId);
    
  return (
    <div className=" flex flex-col gap-10 min-h-screen p-8 bg-gradient-to-r from-purple-700 to-blue-700 font-bold text-4xl">
        <div>

           <Dialogu 
            loading={loading}
            setLoading={setLoading}
            blogFormData={blogFormData}
            setBlogFormData={setBlogFormData}
            handleFormDataSubmit={handleFormDataSubmit}
           />
        </div>
        <div className='  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
            
            {
                blogList && blogList.length > 0 ?
                blogList.map((item) =>(
                    <div className="card card-compact bg-base-100 w-96 shadow-xl" key={item._id}>
                        <figure>
                            <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{item.title}</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                            </div>
                            <div className='flex justify-between'>

                                <button onClick={()=> handleBlogEdit(item)} className="btn btn-primary px-10">Edit</button>
                                <button onClick={()=>handleDeleteByID(item._id)} className='btn btn-error px-10'>Delete</button>
                            </div>
                        </div>
                    </div>
                    
                ))
                :null
            }
            
        </div>
        
    </div>
  )
}

export default BlogOverView