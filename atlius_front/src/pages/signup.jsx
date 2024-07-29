import Layout from '../components/layout'
import { getCookie } from 'cookies-next';
import Link from 'next/link'
import { useRouter } from 'next/router'

const SignupPage = ()=> {
    const router = useRouter()
    const { msg } = router.query
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordAgain, setPasswordAgain] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:8081/v1/register/',{firstName, lastName, email, password});
            console.log(response)
        }catch(error){
            console.error(error)
        }
    }

    return (
        <Layout pageTitle="Signup">
            <Link href="/">Home</Link><br/>
            {msg ?
                <h3 className="red">{msg}</h3>
            :
                <></>
            }
            <h2>Sign up</h2>
            <form onSubmit={handleSubmit}>
            <input minLength="3" name="first_name" id="first_name" type="text" placeholder='first name' onChange={(e)=>setFirstName(e.target.value)} required></input><br/>
            <input minLength="5" name="last_name" id="last_name" type="text" placeholder='last name' onChange={(e)=>setLastName(e.target.value)} required></input><br/>
                <input minLength="3" name="username" id="username" type="text" placeholder='username' onChange={(e)=>setEmail(e.target.value)} required></input><br/>
                <input minLength="5" name="password" id="password" type="password" placeholder='password' onChange={(e)=>setPassword(e.target.value)} required></input><br/>
                <input minLength="5" name="passwordagain" id="passwordagain" type="password" placeholder='password again' onChange={(e)=>setPasswordAgain(e.target.value)} required></input><br/>
                <input type="submit" value="Signup"/>
            </form>
        </Layout>
    );
}
