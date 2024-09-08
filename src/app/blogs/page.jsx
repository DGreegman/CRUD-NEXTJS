import BlogOverView from '@/components/blogoverview'
import React from 'react'

async function fetchListOfBLogs(){
  try {
    const response = await fetch('http://localhost:3000/api/get-blogs', {
      method: 'GET',
      cache: 'no-store'
    })
  const data = await response.json()
  return data?.data
  } catch (error) {
    console.log(error);
    
    
  }
}
async function Blogs() {
  const blogList = await fetchListOfBLogs()
  console.log(blogList, 'blocglist');
  
  return (
    <div>
        <BlogOverView  blogList={blogList}/>
    </div>
  )
}

export default Blogs