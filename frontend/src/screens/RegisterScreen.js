import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from "../components/Loader";
import Message from "../components/Message";
import { register } from '../actions/userActions'
import FormContainer from "../components/FormContainer";

const RegisterScreen = ({location, history}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [user_type, setUserType] = useState('')
    const [address, setAddress] = useState('')
    const [phone_number, setPhoneNumber] = useState('')
    const [profileImage, setProfileImage] = useState()

    const dispatch = useDispatch()

    const redirect = Location.search ? location.search.split('=')[1] : '/'

    const userRegister = useSelector(state => state.userRegister)
    const {error, loading, userInfo} = userRegister

    useEffect(() => {
        if(userInfo){
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('user_type', user_type);
        formData.append('phone_number', phone_number);
        formData.append('address', address);
        formData.append('profileImage', profileImage);
        dispatch(register(formData));
    } 

    return (
        <FormContainer>
            <h1 style={{fontWeight:"700", fontSize:"30px"}}>Create new Account</h1>
            
            <br></br><br></br>
            {error && <Message status="error">{error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>
            <Form.Group controlId='name'>
                    <Form.Label>
                        Name
                    </Form.Label>
                    <Form.Control
                        type='name'
                        placeholder='Enter the full name'
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <br></br>
                <Form.Group controlId='email'>
                    <Form.Label>
                        Email Address
                    </Form.Label>
                    <Form.Control
                        type='email'
                        required
                        placeholder='Enter the email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <br></br>
                <Form.Group controlId='password'>
                    <Form.Label>
                        Password
                    </Form.Label>
                    <Form.Control
                        type='password'
                        required
                        placeholder='Enter the password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <br></br>
                
                <Form.Select aria-label="Default select example" required onChange={(e) => setUserType(e.target.value)}
                >
                    <option>Select Account Type</option>
                    <option value="Tenant">Tenant</option>
                    <option value="LandLord">LandLord</option>
                    
                </Form.Select>
                <br></br>

                <Form.Group controlId='phone_number'>
                    <Form.Label>
                        Phone Number
                    </Form.Label>
                    <Form.Control
                        required
                        type='phone_number'
                        placeholder='Enter the phone number'
                        value={phone_number}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <br></br>
                <Form.Group controlId="formFileMultiple" className="mb-3">

                        <Form.Label>Add Profile Picture</Form.Label>
                        <Form.Control onChange={(e) => setProfileImage(e.target.files[0])}  type="file" />
                </Form.Group>
                <br></br>
                <Form.Group controlId='address'>
                    <Form.Label>
                        Address
                    </Form.Label>
                    <Form.Control
                        type='address'
                        placeholder='Enter the Address'
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <br></br>
                <Button type='submit' variant='primary'>Register</Button>
            </Form>

            <Row className="py-3">
                <Col>
                    Have an account? <Link to={redirect ? `/login?redirect=${redirect}`: '/login'}>Login</Link>
                </Col>
            </Row>
        </FormContainer>
    )
}

export default RegisterScreen