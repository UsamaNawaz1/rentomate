import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";

import Loader from "../components/Loader";
import Message from "../components/Message";

import { updateUser, getUserDetail } from "../actions/userActions.js";
import { USER_UPDATE_RESET, USER_LOGIN_SUCCESS } from '../constants/userConstants'


function User({history}) {

  
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const {userInfo} = userLogin;

  const userDetail = useSelector((state) => state.userDetail);
  const {error, loading, user} = userDetail;

  const userUpdate = useSelector((state) => state.userUpdate);
  const {success} = userUpdate;

  const [email, setEmail] = useState('')
  // const [CNIC, setCNIC] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [description, setDescription] = useState('')
  const [cnic, setCnic] = useState('')
  const [address, setAddress] = useState('')
  const [role, setRole] = useState('')
  const [message, setMessage] = useState('')

  useEffect(()=>{

    if(!userInfo){
      history.push('/login')
    }else{
      if(!user || !user.user_profile || success){
        dispatch({type:USER_UPDATE_RESET})
        dispatch(getUserDetail('profile')) //sending profile so that we get like /users/profile/
        
        
      }else{
        setEmail(user.user_profile.user.email)
        setName(user.user_profile.user.name)
        setPhone(user.user_profile.phone_number)
        setDescription(user.user_profile.description)
        setCnic(user.user_profile.cnic)
        setAddress(user.user_profile.address)
        setRole(user.user_profile.address.role)
      }
    }
   
  }, [dispatch, history, userInfo, user, success])

  const submitHandler = () => {
    console.log('updating');
    
    dispatch(updateUser({'id':user.id, 'email':email, 'phone':phone, 'address':address, 'description':description, 'cnic':cnic }))
    
  }

  return (
    <>
      <Container fluid>
        {loading ? (
                <Loader />
              ) : error ? (
                <Message status="error">{error}</Message>
              ) : (
                <Row>
                  <Col md="8">
                    <Card>
                      <Card.Header>
                        <Card.Title as="h4">Edit Profile</Card.Title>
                      </Card.Header>
                      <Card.Body>
                        <Form onSubmit={submitHandler}>
                        <Row>
                            <Col className="pr-1" md="6">
                              <Form.Group>
                                <label>Email</label>
                                <Form.Control
                                  defaultValue={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                  placeholder="name@email.com"
                                  type="email"
                                  
                                ></Form.Control>
                              </Form.Group>
                            </Col>
                            <Col className="pl-1" md="6">
                              <Form.Group>
                                <label>CNIC</label>
                                <Form.Control
                                  defaultValue={cnic}
                                  placeholder="Enter the CNIC"
                                  type="text"
                                  onchange={(e) => setCnic(e.target.value)}
                                  disabled
                                ></Form.Control>
                              </Form.Group>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="pr-1" md="6">
                              <Form.Group>
                                <label>Full Name</label>
                                <Form.Control
                                  defaultValue={name}
                                  onChange={(e) => setName(e.target.value)}
                                  placeholder="Enter the full name"
                                  type="text"
                                  disabled
                                ></Form.Control>
                              </Form.Group>
                            </Col>
                            <Col className="pl-1" md="6">
                              <Form.Group>
                                <label>Phone</label>
                                <Form.Control
                                  defaultValue={phone}
                                  onChange={(e) => setPhone(e.target.value)}
                                  placeholder="Enter the Phone"
                                  type="text"
                                ></Form.Control>
                              </Form.Group>
                            </Col>
                          </Row>
                          <Row>
                            <Col md="12">
                              <Form.Group>
                                <label>Address</label>
                                <Form.Control
                                  defaultValue={address}
                                  onChange={(e) => setAddress(e.target.value)}
                                  placeholder="Home Address"
                                  type="text"
                                ></Form.Control>
                              </Form.Group>
                            </Col>
                          </Row>
                          <Row>
                            {/* <Col className="pr-1" md="4">
                              <Form.Group>
                                <label>City</label>
                                <Form.Control
                                  defaultValue={city}
                                  onChange={(e) => setCity(e.target.value)}
                                  placeholder="City"
                                  type="text"
                                ></Form.Control>
                              </Form.Group>
                            </Col>
                            <Col className="px-1" md="4">
                              <Form.Group>
                                <label>State</label>
                                <Form.Control
                                  defaultValue={state}
                                  onChange={(e) => setState(e.target.value)}
                                  placeholder="State"
                                  type="text"
                                ></Form.Control>
                              </Form.Group>
                            </Col> */}
                            <Col className="pl-1" md="4">
                                <Form.Group>
                                <label>Role</label>
                                  <Form.Control
                                    defaultValue={userInfo.user_profile? userInfo.user_profile.user_type : ""}
                                    placeholder="Home Address"
                                    type="text"
                                    disabled
                                  ></Form.Control>
                                </Form.Group>
                            </Col>
                          </Row>
                          <Row>
                            <Col md="12">
                              <Form.Group>
                                <label>About Me</label>
                                <Form.Control
                                  cols="80"
                                  defaultValue={userInfo.user_profile? userInfo.user_profile.description : ""}
                                  placeholder="Here can be your description"
                                  rows="4"
                                  onChange={(e) => setDescription(e.target.value)}
                                  as="textarea"
                                ></Form.Control>
                              </Form.Group>
                            </Col>
                          </Row>
                          <Button
                            className="btn-fill pull-right"
                            type="submit"
                            variant="primary"
                            style={{textTransform:"none"}}
                          >
                            Update Profile
                          </Button>
                          <div className="clearfix"></div>
                        </Form>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md="4">
                    <Card className="card-user">
                      <div className="card-image">
                        
                      </div>
                      <Card.Body>
                        <div className="author">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <img
                              alt="..."
                              className="avatar border-gray"
                              style={{textAlign:"center", justifyContent:"center", margin:"auto"}}
                              src={userInfo.user_profile? userInfo.user_profile.image : ""}
                            ></img>
                            <h5 className="title fw-bold">{name}</h5>
                          </a>
                          <p className="description">{email}</p>
                        </div>
                        <p className="description text-center">
                        Owning a home is a keystone of wealth<br></br>Both financial affluence and emotional security.” <br></br>
                          I'm in that two seat Lambo.
                        </p>
                      </Card.Body>
                      <hr></hr>
                      <div className="button-container mr-auto ml-auto">
                        <Button
                          className="btn-simple btn-icon"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          variant="link"
                        >
                          <i className="fab fa-facebook-square"></i>
                        </Button>
                        <Button
                          className="btn-simple btn-icon"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          variant="link"
                        >
                          <i className="fab fa-twitter"></i>
                        </Button>
                        <Button
                          className="btn-simple btn-icon"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          variant="link"
                          
                        >
                          <i className="fab fa-google-plus-square"></i>
                        </Button>
                      </div>
                    </Card>
                  </Col>
                </Row>
              )}
        
      </Container>
    </>
  );
}

export default User;
