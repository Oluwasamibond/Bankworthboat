import React from 'react'

const Contact = () => {
  return (
    <div name='contact'>
        <div className='container flex justify-center items-center mt-10'>
            <form method='POST' action='https://getform.io/f/agdyggnb' className='flex flex-col max-w-[600px] w-full '>
                <div className='pb-8 m-auto'>
                    <h2 className='text-3xl text-secondary font-semibold inline border-b-4 border-primary'>Contact</h2>
                </div>
                <input className='p-2 bg-primary' type="text" placeholder='Name' name='name' />
                <input className='my-4 p-2 bg-primary' type="text" placeholder='Email' name='email' />
                <textarea className='bg-primary p-2' placeholder='Message' rows='10'>Message</textarea>
                <button className="bg-secondary text-tertiary py-2 mt-2 px-4 font-semibold rounded-md hover:scale-105 transition duration-300 ease-in-out">
                 Submit
            </button>
            </form>
        </div>
    </div>
  )
}

export default Contact