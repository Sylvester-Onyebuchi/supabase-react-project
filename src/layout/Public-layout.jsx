import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import supabaseConfig from '../config/supabase-config';
import toast from 'react-hot-toast';

function publicLayout({children}) {

  const navigate = useNavigate();

  const checkSession = async () => {
      const data = await supabaseConfig.auth.getSession();
      if(data.session){
        navigate('/')
      }
    }
  useEffect(() => {
    
    checkSession();
    
  }, [])
  return (
    <div>{children}</div>
  )
}

export default publicLayout