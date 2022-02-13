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
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
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
        setStreet(user.user_profile.address.street)
        setCity(user.user_profile.address.city)
        setState(user.user_profile.address.state)
        setRole(user.user_profile.address.role)
      }
    }
   
  }, [dispatch, history, userInfo, user, success])

  const submitHandler = () => {
    console.log('updating');
    dispatch(updateUser({'id':user.id, 'email':email, 'phone':phone }))
    
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
                                  defaultValue="3520253681731"
                                  placeholder="Enter the CNIC"
                                  type="text"
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
                                  defaultValue={street}
                                  onChange={(e) => setStreet(e.target.value)}
                                  placeholder="Home Address"
                                  type="text"
                                ></Form.Control>
                              </Form.Group>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="pr-1" md="4">
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
                            </Col>
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
                                  defaultValue="Lamborghini Mercy, Your chick she so thirsty, I'm in
                                  that two seat Lambo."
                                  placeholder="Here can be your description"
                                  rows="4"
                                  as="textarea"
                                ></Form.Control>
                              </Form.Group>
                            </Col>
                          </Row>
                          <Button
                            className="btn-fill pull-right"
                            type="submit"
                            variant="primary"

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
                        <img
                          alt="..."
                          src={
                            require("../assets/img/photo-1431578500526-4d9613015464.jpeg")
                              .default
                          }
                        ></img>
                      </div>
                      <Card.Body>
                        <div className="author">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <img
                              alt="..."
                              className="avatar border-gray"
                              src={require("../assets/img/faces/face-3.jpg").default}
                            ></img>
                            <h5 className="title">Mike Andrew</h5>
                          </a>
                          <p className="description">michael24</p>
                        </div>
                        <p className="description text-center">
                          "Lamborghini Mercy <br></br>
                          Your chick she so thirsty <br></br>
                          I'm in that two seat Lambo"
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
