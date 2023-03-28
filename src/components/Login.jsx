import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { FcGoogle } from 'react-icons/fc';
import loginBackground from '../assets/login-background.mp4';
import jwt_decode from 'jwt-decode';
import logo from '../assets/logo.png';

import { client } from '../client';

const Login = () => {
  const navigate = useNavigate();

  const responseGoogle = (response) => {
    const decode = jwt_decode(response.credential);
    localStorage.setItem('user inspired', JSON.stringify(decode));

    const { name, sub, picture } = decode;

     const doc = {
      _id: sub,
      _type: 'user',
      userName: name,
      image: picture,
    };

    client.createIfNotExists(doc).then(() => {
      navigate('/', { replace: true });
    });
  };

  return (
    <GoogleOAuthProvider clientId={`${process.env.REACT_APP_GOOGLE_API_TOKEN}`}>
    <div className='flex justify-start items-center flex-col h-screen'>
      <div className='relative w-full h-full'>
        <video
          src={loginBackground}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className='w-full h-full object-cover' />
        
        <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay'>
          <div className='mb-5'>
            <img src={logo} alt="logo" width="130px"/>
          </div>

          <div className="shadow-2xl">
            <GoogleLogin
              render={(renderProps) => (
                <button
                  type="button"
                  className="bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <FcGoogle className="mr-4" /> Sign in with google
                </button>
              )}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy="single_host_origin"
              />
          </div>
        </div>
      </div>
      </div>
      </GoogleOAuthProvider>
  )
}

export default Login
