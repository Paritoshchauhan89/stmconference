import React from 'react'
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../Pages/redux/store";
import logo from '../../api/Assets/img/stmconf..png';

const Navbar = () => {
 

  let isLogin = useSelector((state) => state.isLogin);
  isLogin = isLogin || localStorage.getItem("userId");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //state
  // const [value, setValue] = useState();

  //logout
  const handleLogout = () => {
    try {
      dispatch(authActions.logout());
      alert("Logout Successfully");
      navigate("/login");
      localStorage.clear();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg  sticky-top bg-light shadow  bg-white ">
        <div className="container ">
          <Link className="navbar-brand" to="/">
            <img src={logo} width={'150'} alt="logo" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-10 mb-2 mb-lg-0 m-2">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about">About</Link>
              </li> <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/all-sponsers">Sponsers</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/venue">Venue</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle active" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Who we are
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/blogs">Blogs</Link></li>
                  <li><Link className="dropdown-item" to="/terms-and-conditions">Terms and Conditions</Link></li>
                  <li><Link className="dropdown-item" to="/publication-management">Publication Management</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="/faq">Faq</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/contact">Contact Us</Link>
              </li>
              {!isLogin && (
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/login"><span className='btn btn-dark' style={{width:80}} >Login</span></Link>
              </li>
                 )}
                    {isLogin && (
                
                <li>
                 <Link className="nav-link active" aria-current="page" to="/dashboard/add-speaker"><span className='btn btn-dark' style={{width:100}}>Dashboard</span></Link>
                 </li>
               )}
              {isLogin && (
                
                <li>
                 <Link className="nav-link active" aria-current="page" to="/"><span className='btn btn-dark' style={{width:80}} onClick={handleLogout} >LogOut</span></Link>
                 </li>
               )}
              
         
             
            </ul>


          </div>

        </div>
      </nav>




    </>
  )
}

export default Navbar