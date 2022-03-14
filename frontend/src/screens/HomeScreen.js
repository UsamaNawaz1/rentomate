import React, { useState, useEffect, useContext } from "react";
import { PropertyContext } from '../Contexts/PropertyContext';
import { Container, Row, Col, Image, Button, Form } from "react-bootstrap";

import { Link } from 'react-router-dom';
import HeroImage from "../images/hero-bg2.png";

import { useDispatch, useSelector } from "react-redux";
import { listProperties } from "../actions/propertyActions";
import { LinkContainer } from "react-router-bootstrap";

import HeroHomeThree from "../images/hero-home3.jpg";
import HeroHomeFour from "../images/hero-home41.png";

const HomeScreen = () => {
  var message = `We provide a complete service for the sale, purchase or
  rental of real estate.`;
  const dispatch = useDispatch();
  const {keyword, setKeyword, propertyType, setPropertyType} = useContext(PropertyContext);

  useEffect(() => {
    dispatch(listProperties(keyword, propertyType));
  }, [dispatch, keyword, propertyType]);

  return (
    
    <main>
     
      <section
        style={{
          backgroundColor: "#F4F5F9",

          borderRadius: "35px",
          minHeight: "542px",
        }}
      >
        <Container>
          <Row>
            <Col xs={12} md={7} lg={7}>
              <h1
                style={{
                  paddingTop: "120px",
                  fontSize: "55px",
                  lineHeight: "70px",
                  fontWeight: "700",
                  wordSpacing: "7px",
                  letterSpacing: "2px",
                  color: "black",
                  zIndex: "3",
                }}
              >
                Easy way to find a perfect property
              </h1>
              <h4
                className="new-line"
                style={{
                  paddingTop: "40px",
                  fontSize: "19px",
                  lineHeight: "40px",
                  color: "#7A7A7A",
                  zIndex: "3",
                }}
              >
                {message}
              </h4>
            </Col>
            <Col>
              <Image
                src={HeroImage}
                style={{
                  position: "absolute",
                  right: "0",
                  zIndex: "1",
                }}
              />
            </Col>
          </Row>
        </Container>
      </section>
      <div
        style={{
          width: "65%",
          height: "auto",
          margin: "auto",
          borderRadius: "30px",

          zIndex: "4",
          backgroundColor: "white",
          position: "relative",
          top: "-55px",
          boxShadow: "1px 1px 2px rgba(0, 0, 0, 0.25)",
          padding: "10px",
        }}
      >
        <Container>
        <Form>
          <Row>
            <Col className="p-3">
              <h7 className="fw-bold">Location</h7>
              <br></br>
              {/* <h8
                style={{
                  fontSize: "13px",
                  color: "#6B6B6B",
                }}
              >
                Select your city
              </h8> */}
              
              <Form.Group>
              
                <Form.Control
                  type="text"
                  value={keyword}
                  onChange={ (e) => setKeyword(e.target.value)}
                  size="sm"
                  className="pt-1"
                  placeholder="Select your city"
                  style={{ color: "#636363" }}
                  />

                </Form.Group>
              
              
            </Col>
            <Col className="p-3">
              <h7 className="fw-bold">Property Type</h7>
              <br></br>
              {/* <h8
                style={{
                  fontSize: "13px",
                  color: "#6B6B6B",
                }}
              >
                Choose property type
              </h8> */}
              <Form.Select className="pt-1" size="sm" onChange={(e) => setPropertyType(e.target.value)} aria-label="Default select example" style={{color:"#6B6B6B"}}>
                <option>Select property type</option>
                <option value="House">House</option>
                <option value="Apartment">Apartment</option>
                <option value="Plot">Plot</option>
                <option value="Hostel">Hostel</option>
              </Form.Select>
              
            </Col>
            <Col md={5} lg={5}>
              <Col className="p-3">
                <h7 className="fw-bold">Rent Range</h7>
                <br></br>
                <h8
                  style={{
                    fontSize: "13px",
                    color: "#6B6B6B",
                  }}
                >
                  Choose a price range
                </h8>
                <Link to='/properties'>
                  <Button
                    style={{
                      float: "right",
                      padding: "10px 15px 10px 15px",
                      marginTop: "-23px",
                    }}
                  >
                    <i style={{ fontSize: "20px" }} class="fas fa-search"></i>
                  </Button>
                </Link>
                
              </Col>
            </Col>
          </Row>
        </Form>
        </Container>
      </div>

      <div>
        <Container>
          <Row>
            <Col lg={6} md={6} xs={12} style={{ padding: "5px 45px 5px 0px" }}>
              <h1
                style={{
                  fontWeight: "700",
                  color: "black",
                  lineHeight: "50px",
                }}
              >
                Why you should rent your dream house with us?
              </h1>
            </Col>
            <Col lg={6} md={6} xs={12} style={{ padding: "5px 45px 5px 0px" }}>
              <h5
                style={{
                  fontWeight: "400",
                  color: "#7A7A7A",
                  lineHeight: "50px",
                }}
              >
                From moving in to moving out, we will be managing your entire
                process and keep you posted!
              </h5>
            </Col>
          </Row>
          <br></br>
          <br></br>
          <Row>
            <Col
              lg={6}
              md={6}
              xs={12}
              style={{
                padding: "5px 100px 5px 0px",
                display: "flex",

                borderRadius: "30px",

                overflow: "hidden",
                maxHeight: "710px",
              }}
            >
              <Image src={HeroHomeThree} fluid />
            </Col>
            <Col lg={6} md={6} xs={12} style={{ padding: "5px 45px 5px 0px" }}>
              <div
                style={{
                  borderRadius: "50%",
                  backgroundColor: "#D9EDFF",
                  width: "61px",
                  height: "61px",
                  textAlign: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <i
                  class="fas fa-file-contract"
                  style={{ margin: "auto", fontSize: "25px", color: "#38A7F5" }}
                ></i>
              </div>
              <br></br>
              <h3 className="fw-bold">Document Management</h3>
              <h6
                style={{
                  color: "#7A7A7A",
                  wordSpacing: "3px",
                  lineHeight: "30px",
                  textTransform:"none"
                }}
              >
                From lease documents to invoices, keep track of all documents on
                RentoMate.
              </h6>
              <br></br>
              <br></br>
              <div
                style={{
                  borderRadius: "50%",
                  backgroundColor: "#D9EDFF",
                  width: "61px",
                  height: "61px",
                  textAlign: "center",
                  justifyContent: "center",
                  display: "flex",
                  textTransform:"none"
                }}
              >
                <i
                  class="fas fa-money-check"
                  style={{ textAlign:"center", marginLeft:"-10px", marginTop:"17px", fontSize: "25px", color: "#38A7F5" }}
                ></i>
              </div>
              <br></br>
              <h3 className="fw-bold">Rental Payments</h3>
              <h6
                style={{
                  color: "#7A7A7A",
                  wordSpacing: "3px",
                  lineHeight: "30px",
                  textTransform:"none"
                }}
              >
                Let’s eliminate hectic process of managing rentals. Pay &
                Collect rents online through RentoMate.
              </h6>
              <br></br>
              <br></br>
              <div
                style={{
                  borderRadius: "50%",
                  backgroundColor: "#D9EDFF",
                  width: "61px",
                  height: "61px",
                  textAlign: "center",
                  justifyContent: "center",
                  display: "flex",
                  
                }}
              >
                <i
                  class="fas fa-paste"
                  style={{ margin: "auto", fontSize: "25px", color: "#38A7F5" }}
                ></i>
              </div>
              <br></br>
              <h3 className="fw-bold">Maintenance Requests</h3>
              <h6
                style={{
                  color: "#7A7A7A",
                  wordSpacing: "3px",
                  lineHeight: "30px",
                  textTransform:"none"
                }}
              >
                Rather than a call when you’re at dinner with family, learn
                about maintenance issues in RentoMate.
              </h6>
            </Col>
          </Row>
        </Container>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div>
        <Container>
          <section style={{ backgroundColor: "#0290F1", borderRadius: "30px" }}>
            <Row>
              <Col
                lg={7}
                md={7}
                xs={12}
                style={{ padding: "50px 30px 0px 60px" }}
              >
                <h1
                  style={{
                    fontSize: "24px",
                    fontWeight: "700",
                    color: "white",
                  }}
                >
                  Get your dream house
                </h1>
                <h3
                  style={{
                    color: "white",
                    fontSize: "16px",
                    padding: "10px 0px 12px 0px",
                  }}
                >
                  Everyone wants a piece of land. It’s the only sure investment.
                  It can never depreciate like a car or washing machine. Land
                  will only double its value in ten years.
                </h3>
                <Link to="/register">
                <Button
                  style={{
                    backgroundColor: "white" ,
                    color: "#0290F1",
                    fontSize: "13px",
                    padding: "5px 25px 5px 25px",
                    textDecoration: "none",
                    boxShadow: "none",
                    textTransform:"none",
                  }}
                >
                  Join Us Now
                </Button>
                </Link>
                
              </Col>
              <Col>
                <Image style={{ float: "right" }} src={HeroHomeFour} />
              </Col>
            </Row>
          </section>
        </Container>
      </div>
    </main>
  );
};

export default HomeScreen;
