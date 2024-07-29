import Layout from '../components/layout'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react';
import axios from axios;

const LoginPage =() =>{
    const router = useRouter()
    const { msg } = router.query
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:8081/v1/login/',{email, password});
            
        }catch(error){
            console.error(error)
        }
    }
    return (
        <Layout pageTitle="Login">
            <Link href="/">Home</Link><br/>
            {msg ?
                <h3 className="red">{msg}</h3>
            :
                <></>
            }
            <h2>Log in</h2>
            <form onSubmit={handleSubmit}>
                <input minLength="3" name="username" id="username" type="text" placeholder='username' onChange={(e)=>setEmail(e.target.value)} required></input><br/>
                <input minLength="5" name="password" id="password" type="password" placeholder='password' onChange={(e)=>setPassword(e.target.value)} required></input><br/>
                <input type="submit" value="Login"/>
            </form>
        </Layout>
    );
}

export default LoginPage;