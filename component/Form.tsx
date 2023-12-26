'use client'

import { contactBot } from "@/lib/action";
import { ChangeEvent, FormEvent, useState } from "react";
import toast, { Toaster } from "react-hot-toast";


const Form = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [subject, setSubject] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'subject':
                setSubject(value);
                break;
            case 'message':
                setMessage(value);
                break;
            default:
                break;
        }
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setLoading(true);
            const formData = {
                name: name,
                email: email,
                message: message,
                subject: subject
            };

            await contactBot(formData);
            setLoading(false);
            toast.success('Message sent succesfully')
        } catch (error) {
            toast.error('Error occured ! Please try again later')
            setLoading(false);
        }
    }

    return (
        <>
            <Toaster toastOptions={{
                style: {
                    backgroundColor: '#333', // Change background color to a dark shade
                    color: '#fff', // Change text color to white or lighter shade
                    boxShadow: '0 4px 8px rgba(0,0,0,0.3)', // Adjust box shadow for dark background
                },
            }} />
            <form onSubmit={handleSubmit} style={{ flexDirection: 'column' }} action="" method="post" className='ss:w-[500px] w-[300px] mx-auto mt-[40px] flex items-center justify-center '>
                <input value={name} name="name" onChange={handleChange} type="text" placeholder='Your good name!' className='outline-none border-[0.3px] border-gray-100 text-white bg-transparent px-4 py-2 my-2 rounded-3xl w-full' />
                <input value={email} name="email" onChange={handleChange} type="email" placeholder='Enter your email!' className='outline-none border-[0.3px] border-gray-100 text-white bg-transparent px-4 py-2 my-2 rounded-3xl w-full' />
                <input value={subject} name='subject' onChange={handleChange} type="text" placeholder='Subject : Hiring/ Need help/For project' className='outline-none border-[0.3px] border-gray-100 text-white bg-transparent px-4 py-2 my-2 rounded-3xl w-full' />
                <textarea value={message} onChange={handleChange} placeholder='Message...' name="message" rows={3} cols={5} className='outline-none border-[0.3px] border-gray-100 text-white bg-transparent px-4 py-2 my-2 rounded-3xl w-full' />
                <button disabled={loading || name?.length < 3 || email?.length < 5 || subject.length < 4 || message.length < 5} type="submit" className={`w-full text-gray-900 xs:text-md text-sm my-4 font-semibold px-8 py-2 rounded-3xl bg-green-300 border-b-4 border-green-500  disabled:opacity-[0.5]`}>{loading ? 'Submitting...' : 'Submit'}</button>
            </form>
        </>
    )
}

export default Form