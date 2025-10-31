import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getLoggedInUser } from '../services/user';
import toast from 'react-hot-toast';
import { Button, Spin } from 'antd';
import supabaseConfig from '../config/supabase-config';

function Home() {

  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const getUser = async () => {
    try {
      setLoading(true);
      const response:any = await getLoggedInUser();
      if (response.error) {
        throw new Error(response.error.message);
      }
      setUser(response.data);
     
      
    } catch (error: any) {
      toast.error(error.message || "Something went wrong");
      navigate('/login');
     
      
    }finally {
      setLoading(false);
    }
  }

  const onLogout = async() => {
    try {
      const response = await supabaseConfig.auth.signOut();
      if (response.error) {
        throw new Error(response.error.message);
      }
      toast.success("You have Logged out successfully");
      navigate('/login');
    } catch (error) {
      toast.error((error as Error).message || "Something went wrong");
      
    }
  }

  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className='p-5 flex flex-col gap-5 justify-center items-center'>
      
      <h1>Home Page</h1>
      {loading && (<div className='flex justify-center items-center h-96'>
        <Spin size='large' />
      </div>)}
      {user && (
        <div className='flex flex-col gap-2'>
          <h1>Welcome, {user.name || "User"}!</h1>
          <Button onClick={onLogout} type='primary' danger>Logout</Button>
        
        </div>
      )}


    </div>
  )
}

export default Home