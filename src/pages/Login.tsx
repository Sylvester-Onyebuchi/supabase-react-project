import { Button, Form, Input, message } from 'antd'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../services/user';
import toast from 'react-hot-toast';

function Login() {

    const [loading, setLoading] = useState(false);   
    const navigate = useNavigate()
    const [messageApi, contextHolder] = message.useMessage();
  
    const onfinish = async(values:any) => {
        try {
            setLoading(true);
            const response:any = await loginUser(values);
            if(!response.success) {
                throw new Error(response.error.message);
            }
            toast.success("Login successful!");
            navigate('/');
            
        } catch (error:any) {
           messageApi.error(error.message || "Something went wrong") 
        }finally {
            setLoading(false);
        }
    }

  return (
    <div className='bg-gray-200 h-screen flex justify-center items-center'>
        {contextHolder}
        <div className='bg-white border-gray-300 shadow-sm p-5 rounded w-[420px]'>
            <h1 className='text-xl font-bold'>Login Page</h1>
            <p className='text-sm font-semibold text-gray-500 mb-5'>
                Login to your account to continue
            </p>
            <hr className='border-gray-300 my-5' />

            <Form layout='vertical' autoComplete='off'
            onFinish={onfinish}>
                

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
                loading={loading} disabled={loading}
                >LOGIN</Button>

                <span className='text-sm font-semibold'>
                    Already have an account? <Link to="/register">Register</Link>
                </span>
            </Form>
        </div>
    </div>
  )
}

export default Login