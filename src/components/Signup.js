import React, {useState} from "react";
import './Signup.css';
import { useNavigate } from 'react-router-dom';
import FormImage from './assets/MHlogo.webp';

function Signup() {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    });

    const [showPassword, setShow] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleTogglePassword = () => {
        setShow(!showPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/shop');
    };

    return(
        <div className="background">
            <div className="box">
                <div className="signup-box">
                    <div>
                        <img src={FormImage} alt="Logo" style={{ backgroundColor: '#000000', padding: '20px', marginBottom: '20px' }}/>
                    </div>
                    {/* Get new logo for sign up page, preferable a square with MH logo that isn't full name as header makes redundant*/}
                    <div>
                        <h4>Sign up to continue</h4>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div style={{ padding: '5px 5px' }}>
                            <input type="email"
                                id="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div style={{ padding: '5px 2px' }}>
                            <input type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                
                            />
                         
                        </div>
                        <div style={{ padding: '2px 5px' }}>
                            <button type="button" onClick={handleTogglePassword} >
                                {showPassword ? "Hide Password" : "Show Password"}
                            </button>
                        </div>   
                        <div style={{ padding: '5px 5px' }}>
                            <input type="firstName"
                                id="firstName"
                                name="firstName"
                                placeholder="First Name"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div style={{ paddingBottom: '5px', marginBottom: '10px' }}>
                            <input type="lastName"
                                id="elastNamemail"
                                name="lastName"
                                placeholder="Last Name"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" style={{ display: 'inline-block', margin: 'auto', padding: '5px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px' }}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup;