import React, { useState } from 'react';
import api from '../api';
import Cookies from 'js-cookie';

const Login = () => {
  const [email, setEmail] = useState('test@gmail.com');
  const [name, setName] = useState('tester');
  const [imageUrl, setImageUrl] = useState('https://a.com');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await api.post('/api/auth/login', { email, name, imageUrl });
      console.log('Login response data:', response.data);

      // 쿠키에 토큰이 제대로 설정되는지 확인
      console.log('Access Token:', Cookies.get('access_token'));
      console.log('Refresh Token:', Cookies.get('refresh_token'));

      // 쿠키 설정 코드 제거
      alert('Login successful');
      window.location.href = '/protected';
    } catch (error) {
      console.error('Login failed', error);
      alert('Login failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Image URL:</label>
        <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
