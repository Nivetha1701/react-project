import '../Components/Home.css';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
function Home()
{
    return(
        <div>
            <h2>Home page</h2>
        </div>
    )
}
function Login()
{
    return(
        <div>
            <h2>Login</h2>
        </div>
    )
}
function Home()
{
    return(
        <div>
            <h2>Sign up</h2>
        </div>
    )
}
function Navbar()
{
    return(
        <Router>
            <nav>
                <ul>
                    <li className="active">
                        <Link to="/" className='Link'>Home</Link>
                    </li>
                    <li className="">
                        <Link to="/Login" className='Link'>Login</Link>
                    </li>
                    <li className="active">
                        <Link to="/Signup" className='Link'>Signup</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/Login' element={<Login/>}/>
                <Route exact path='/Signup' element={<Signup/>}/>
            </Routes>
        </Router>
    )
}