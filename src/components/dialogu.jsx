'use client'
import React from 'react'

function Dialogu({ loading, setLoading, blogFormData, setBlogFormData, handleFormDataSubmit}) {
    console.log(blogFormData);
    
  return (
    <div>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button className="btn text-white px-4" onClick={()=>document.getElementById('my_modal_1').showModal()}>open modal</button>
        <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Press ESC key or click the button below to close</p>
            <div className="modal-action">
            <form className='w-full'>
                <div className='w-full'>
                    <input type="text" name='title' placeholder="Enter Title" value={blogFormData.title} onChange={
                        (e) => setBlogFormData({...blogFormData, title: e.target.value})
                    }className="input input-bordered w-full max-w-sm" />
                </div>
                <div className='my-5'>
                    <textarea name='description' value={blogFormData.description} onChange={
                        (e) => setBlogFormData({...blogFormData, description: e.target.value})
                    } className="textarea textarea-bordered w-full max-w-sm" placeholder="Bio"></textarea>
                </div>
                {/* if there is a button in form, it will close the modal */}
                <div className='flex justify-between'>
                    <button className="btn">Close</button>
                </div>
            </form>
            <button onClick={handleFormDataSubmit} className='btn'>
                {
                    loading ? 'Saving Changes' : 'Save Changes'
                }
            </button>
            </div>
        </div>
        </dialog>
    </div>
  )
}

export default Dialogu