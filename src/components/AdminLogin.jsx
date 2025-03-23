import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import axios from "axios"
import getBaseUrl from '../utils/baseURL'
import { useNavigate, Link } from 'react-router-dom'
import { BsBook } from 'react-icons/bs'

const AdminLogin = () => {
    const [message, setMessage] = useState("")
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const navigate = useNavigate()

    const onSubmit = async (data) => {
        try {
           const response = await axios.post(`${getBaseUrl()}/api/auth/admin`, data, {
                headers: {
                    'Content-Type': 'application/json',
                }
           })
           const auth = response.data;
            if(auth.token) {
                localStorage.setItem('token', auth.token);
                setTimeout(() => {
                    localStorage.removeItem('token')
                    alert('Token has been expired!, Please login again.');
                    navigate("/")
                }, 3600 * 1000)
            }

            alert("Admin Login successful!")
            navigate("/dashboard")

        } catch (error) {
            setMessage("Invalid admin credentials")
            console.error(error)
        }
    }

    return (
        <div className='min-h-[calc(100vh-120px)] flex justify-center items-center bg-gray-50'>
            <div className='w-full max-w-sm mx-auto bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4'>
                <div className='text-center mb-6'>
                    <div className="flex justify-center mb-2">
                        <BsBook className="text-primary text-3xl" />
                    </div>
                    <h2 className='text-2xl font-heading font-semibold text-gray-800'>Admin Login</h2>
                    <p className='text-sm text-gray-500 mt-2'>Access administrative dashboard</p>
                </div>

                {message && <p className='text-red-500 text-sm mb-4'>{message}</p>}

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-medium mb-2'>
                            Username
                        </label>
                        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-primary' 
                        type="text" 
                        placeholder='Admin username'
                        {...register("username", { 
                            required: "Username is required"
                        })}
                        />
                        {errors.username && <p className='text-red-500 text-xs mt-1'>{errors.username.message}</p>}
                    </div>
                    <div className='mb-6'>
                        <label className='block text-gray-700 text-sm font-medium mb-2'>
                            Password
                        </label>
                        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-primary' 
                        type="password" 
                        placeholder='Admin password'
                        {...register("password", { 
                            required: "Password is required"
                        })}
                        />
                        {errors.password && <p className='text-red-500 text-xs mt-1'>{errors.password.message}</p>}
                    </div>
                    <div className='mb-6'>
                        <button className='bg-primary hover:bg-primary/90 text-white font-medium py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline' 
                        type="submit"
                        >
                            Login as Admin
                        </button>
                    </div>
                </form>
                
                <div className="text-center">
                    <Link to="/" className="text-sm text-gray-600 hover:text-primary">
                        Return to home page
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin