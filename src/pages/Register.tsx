import { Button, Form, Input, message } from 'antd'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import supabaseConfig from '../config/supabase-config'
import { registerUser } from '../services/user';
import toast from 'react-hot-toast';

function Register() {

    const [loading, setLoading] = useState(false);   
    const navigate = useNavigate()
    const [messageApi, contextHolder] = message.useMessage();

    const onfinish = async(values:any) => {
        try {

            setLoading(true);
            const response:any = await registerUser(values);
            if(!response.success) {
                throw new Error(response.message);
            }
            
            toast.success("Registration successful! Please check your email to verify your account.");
            navigate('/login');

           
            
        } catch (error: any) {

            messageApi.error(error.message || "Something went wrong")
            
        }finally {
            setLoading(false);
        }
    }

  return (
    <div className='bg-gray-200 h-screen flex justify-center items-center'>
        <div className='bg-white border-gray-300 shadow-sm p-5 rounded w-[420px]'>
            <h1 className='text-xl font-bold'>Register</h1>
            <p className='text-sm font-semibold text-gray-500 mb-5'>
                Create an accoun to get started
            </p>
            <hr className='border-gray-300 my-5' />

            <Form layout='vertical' autoComplete='off'
            onFinish={onfinish}>
                <Form.Item label="Name" name="name" rules={[{
                    required: true,
                    message: "Please enter your name"
                }]}>
                    <Input type="text" placeholder='name'/>
                </Form.Item>

                <Form.Item label="Email" name="email" 
                rules={[{
                    required: true,
                    message: "Please enter your email"
                }]}
                >
                    <Input type="email" placeholder='Email' />
                </Form.Item>

                <Form.Item label="Password" name="password"
                rules={[{
                    required: true,
                    message: "Please enter your password"
                }]}>
                    <Input.Password type="password" placeholder='Password'/>
                </Form.Item>

                <Button htmlType='submit' block type='primary' className='mb-3'
                loading={loading} disabled={loading}  >REGISTER</Button>

                <span className='text-sm font-semibold'>
                    Already have an account? <Link to="/login">Login</Link>
                </span>
            </Form>
        </div>
    </div>
  )
}

export default Register