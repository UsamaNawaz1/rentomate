import React, { useEffect } from "react";
import { Container, Row, Col, Image, Button, Carousel } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Box, Icon } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import HeroImage from "../images/hero-bg2.png";
import { listPropertyDetails } from "../actions/propertyActions";
import Loader from "../components/Loader";
import Message from "../components/Message";


const PropertyScreen = ({ match }) => {
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.propertyDetails);
  const { loading, error, property } = productDetails;
  useEffect(() => {
    dispatch(listPropertyDetails(match.params.id));
  }, [dispatch]);
  return (
    
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message status="error">{error}</Message>
      ) : (
        <Container>
          <Carousel variant="dark">
            <Carousel.Item as="div" style={{ width: "100%", height: "60vh" }}>
              <Image
                style={{ width: "100%", height: "100%" }}
                src={property.image}
                alt="First slide"
                fluid
              />
            </Carousel.Item>
            <Carousel.Item as="div" style={{ width: "100%", height: "60vh" }}>
              <Image
                style={{ width: "100%", height: "100%" }}
                src={HeroImage}
                alt="Second slide"
                fluid
              />
            </Carousel.Item>
            <Carousel.Item as="div" style={{ width: "100%", height: "60vh" }}>
              <Image
                style={{ width: "100%", height: "100%" }}
                src={property.image}
                alt="Third slide"
                fluid
              />
            </Carousel.Item>
          </Carousel>
          <Row style={{ marginTop: "25px" }}>
            <Col>
              <Box display="flex" alignItems="baseline">
                <Box
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="16px"
                  ml="2"
                  fontWeight="700"
                  color="#636363"
                >
                  <i style={{ fontSize: "25px" }} class="fas fa-bed"></i>{" "}
                  {property.no_of_beds} Beds &bull;{" "}
                  <i style={{ fontSize: "25px" }} class="fas fa-bath"></i>{" "}
                  {property.no_of_baths} Baths &bull;{" "}
                  <i style={{ fontSize: "25px" }} class="fas fa-chart-area"></i>{" "}
                  {property.total_area} Marlas
                </Box>
              </Box>
              <br></br>
              <Row>
                <Col lg={8} md={8} sm={12} xs={12}>
                  <h1 style={{ fontSize: "27px", fontWeight: "700" }}>
                    {property.title}
                  </h1>
                  {property.address ? <h1>{property.address.city}, {property.address.state}</h1> : " "}
                  
                  <br></br>
                  <div className="divBorder">
                    <div style={{ padding: "20px" }}>
                      <h1
                        style={{
                          fontSize: "18px",
                          fontWeight: "700",
                        }}
                      >
                        Description
                      </h1>
                      <h4
                        style={{
                          color: "#636363",
                          paddingTop: "10px",
                          lineHeight: "25px",
                        }}
                      >
                        {property.description}
                      </h4>
                    </div>
                  </div>
                </Col>
                
                <Col lg={4} md={4} xs={12} sm={12} style={{ display: "flex" }}>
                  <div className="divBorder" style={{}}>
                    <div
                      style={{
                        padding: "20px",
                        textAlign: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Image
                        style={{
                          borderRadius: "50%",
                          width: "20%",
                          height: "auto",
                          margin: "auto",
                        }}
                        src="/images/avatar.jpg"
                      />

                      
                        {property.created_by ? <h1 style={{
                          paddingTop: "10px",
                          fontSize: "15px",
                          fontWeight: "700",
                        }}>{property.created_by.user_profile.user.name}</h1> : " "}
                     
                      <p style={{ fontSize: "13px", color: "#636363" }}>
                        LandLord
                      </p>
                      <br></br>
                      <Button
                        className="mb-2"
                        style={{
                          textAlign: "center",
                          width: "100%",
                          boxShadow: "none",
                        }}
                      >
                        <i
                          style={{ fontSize: "25px", float: "left" }}
                          class="fas fa-comment-alt"
                        ></i>{" "}
                        Message
                      </Button>
                      <Button
                        style={{
                          textAlign: "center",
                          width: "100%",
                          boxShadow: "none",
                          backgroundColor: "#52B167",
                        }}
                      >
                        <i
                          style={{ fontSize: "25px", float: "left" }}
                          class="fas fa-handshake"
                        ></i>{" "}
                        Make a Deal
                      </Button>
                    </div>
                  </div>
                </Col>

                <Col
                  lg={8}
                  md={8}
                  sm={12}
                  xs={12}
                  style={{
                    marginTop: "30px",
                  }}
                >
                  <div className="divBorder">
                    <div style={{ padding: "20px" }}>
                      <h1
                        style={{
                          fontSize: "18px",
                          fontWeight: "700",
                        }}
                      >
                        Location
                      </h1>

                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.01422415617!2d72.64194641552051!3d34.06914962428575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38def93c5797c0d7%3A0x95445985be9ab625!2sGhulam%20Ishaq%20Khan%20Institute%20of%20Engineering%20Sciences%20and%20Technology!5e0!3m2!1sen!2s!4v1640521095415!5m2!1sen!2s"
                        allowfullscreen=""
                        style={{
                          width: "100%",
                          height: "400px",
                          paddingTop: "20px",
                          display: "block",
                        }}
                        loading="lazy"
                      ></iframe>
                    </div>
                  </div>
                </Col>

                <Col lg={4} md={4} xs={12} sm={12} style={{ marginTop: "7px" }}>
                  <h1
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                    }}
                  >
                    Similar Properties
                  </h1>
                  <div className="divBorder" style={{ marginTop: "4px" }}>
                    <Row>
                      <Col lg={5} md={5} xs={12} sm={12}>
                        <Link to={`/property/${property._id}`}>
                          <Image
                            src={property.image}
                            fluid
                            className="p-1"
                            rounded
                            style={{ borderRadius: "30px" }}
                          />
                        </Link>
                      </Col>
                      <Col
                        lg={7}
                        md={7}
                        xs={12}
                        sm={12}
                        className="pt-2"
                        style={{ marginLeft: "-15px" }}
                      >
                        <h1 style={{ fontSize: "17px", fontWeight: "700" }}>
                          {property.title}
                        </h1>
                        {property.address ? <h1>{property.address.city}, {property.address.state}</h1> : " "}

                        <h1
                          style={{
                            color: "#0290f1",
                            fontWeight: "700",
                            paddingTop: "5px",
                            fontSize: "18px",
                          }}
                        >
                          PKR {property.rent}/mo
                        </h1>
                      </Col>
                    </Row>
                  </div>
                  <br></br>
                  <div className="divBorder" style={{ marginTop: "4px" }}>
                    <Row>
                      <Col lg={5} md={5} xs={12} sm={12}>
                        <Link to={`/property/${property._id}`}>
                          <Image
                            src={property.image}
                            fluid
                            className="p-1"
                            rounded
                            style={{ borderRadius: "30px" }}
                          />
                        </Link>
                      </Col>
                      <Col
                        lg={7}
                        md={7}
                        xs={12}
                        sm={12}
                        className="pt-2"
                        style={{ marginLeft: "-15px" }}
                      >
                        <h1 style={{ fontSize: "17px", fontWeight: "700" }}>
                          {property.title}
                        </h1>
                        {property.address ? <h1>{property.address.city}, {property.address.state}</h1> : " "}

                        <h1
                          style={{
                            color: "#0290f1",
                            fontWeight: "700",
                            paddingTop: "5px",
                            fontSize: "18px",
                          }}
                        >
                          PKR {property.rent}/mo
                        </h1>
                      </Col>
                    </Row>
                  </div>
                  <br></br>
                  <div className="divBorder" style={{ marginTop: "4px" }}>
                    <Row>
                      <Col lg={5} md={5} xs={12} sm={12}>
                        <Link to={`/property/${property._id}`}>
                          <Image
                            src={property.image}
                            fluid
                            className="p-1"
                            rounded
                            style={{ borderRadius: "30px" }}
                          />
                        </Link>
                      </Col>
                      <Col
                        lg={7}
                        md={7}
                        xs={12}
                        sm={12}
                        className="pt-2"
                        style={{ marginLeft: "-15px" }}
                      >
                        <h1 style={{ fontSize: "17px", fontWeight: "700" }}>
                          {property.title}
                        </h1>
                        {property.address ? <h1>{property.address.city}, {property.address.state}</h1> : " "}

                        <h1
                          style={{
                            color: "#0290f1",
                            fontWeight: "700",
                            paddingTop: "5px",
                            fontSize: "18px",
                          }}
                        >
                          PKR {property.rent}/mo
                        </h1>
                      </Col>
                    </Row>
                  </div>
                  <br></br>
                  <div className="divBorder" style={{ marginTop: "4px" }}>
                    <Row>
                      <Col lg={5} md={5} xs={12} sm={12}>
                        <Link to={`/property/${property._id}`}>
                          <Image
                            src={property.image}
                            fluid
                            className="p-1"
                            rounded
                            style={{ borderRadius: "30px" }}
                          />
                        </Link>
                      </Col>
                      <Col
                        lg={7}
                        md={7}
                        xs={12}
                        sm={12}
                        className="pt-2"
                        style={{ marginLeft: "-15px" }}
                      >
                        <h1 style={{ fontSize: "17px", fontWeight: "700" }}>
                          {property.title}
                        </h1>
                        {property.address ? <h1>{property.address.city}, {property.address.state}</h1> : " "}

                        <h1
                          style={{
                            color: "#0290f1",
                            fontWeight: "700",
                            paddingTop: "5px",
                            fontSize: "18px",
                          }}
                        >
                          PKR {property.rent}/mo
                        </h1>
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col
                  lg={8}
                  md={8}
                  sm={12}
                  xs={12}
                  style={{ marginTop: "30px" }}
                >
                  <div className="divBorder">
                    <div style={{ padding: "20px" }}>
                      <h1
                        style={{
                          fontSize: "18px",
                          fontWeight: "700",
                        }}
                      >
                        Amenities
                      </h1>
                      <Row>
                        <Col lg={6} md={6} sm={12}>
                          <Row style={{ marginTop: "10px" }}>
                            <Col lg={2} md={2} xs={4}>
                              <Icon as={CheckIcon} color="#0290F1" />
                            </Col>
                            <Col>
                              <h6
                                style={{
                                  display: "inline-block",
                                  marginLeft: "-16px",
                                }}
                              >
                                Water Supply
                              </h6>
                            </Col>
                          </Row>
                          <Row style={{ marginTop: "10px" }}>
                            <Col lg={2} md={2} xs={4}>
                              <Icon as={CheckIcon} color="#0290F1" />
                            </Col>
                            <Col>
                              <h6
                                style={{
                                  display: "inline-block",
                                  marginLeft: "-16px",
                                }}
                              >
                                Shared Accomodation
                              </h6>
                            </Col>
                          </Row>
                          <Row style={{ marginTop: "10px" }}>
                            <Col lg={2} md={2} xs={4}>
                              <Icon as={CheckIcon} color="#0290F1" />
                            </Col>
                            <Col>
                              <h6
                                style={{
                                  display: "inline-block",
                                  marginLeft: "-16px",
                                }}
                              >
                                Garage
                              </h6>
                            </Col>
                          </Row>
                          <Row style={{ marginTop: "10px" }}>
                            <Col lg={2} md={2} xs={4}>
                              <Icon as={CheckIcon} color="#0290F1" />
                            </Col>
                            <Col>
                              <h6
                                style={{
                                  display: "inline-block",
                                  marginLeft: "-16px",
                                }}
                              >
                                Supply of Gas
                              </h6>
                            </Col>
                          </Row>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                          <Row style={{ marginTop: "10px" }}>
                            <Col lg={2} md={2} xs={4}>
                              <Icon as={CheckIcon} color="#0290F1" />
                            </Col>
                            <Col>
                              <h6
                                style={{
                                  display: "inline-block",
                                  marginLeft: "-16px",
                                }}
                              >
                                Laundry Room
                              </h6>
                            </Col>
                          </Row>
                          <Row style={{ marginTop: "10px" }}>
                            <Col lg={2} md={2} xs={4}>
                              <Icon as={CheckIcon} color="#0290F1" />
                            </Col>
                            <Col>
                              <h6
                                style={{
                                  display: "inline-block",
                                  marginLeft: "-16px",
                                }}
                              >
                                Internet
                              </h6>
                            </Col>
                          </Row>
                          <Row style={{ marginTop: "10px" }}>
                            <Col lg={2} md={2} xs={4}>
                              <Icon as={CheckIcon} color="#0290F1" />
                            </Col>
                            <Col>
                              <h6
                                style={{
                                  display: "inline-block",
                                  marginLeft: "-16px",
                                }}
                              >
                                Car Parking
                              </h6>
                            </Col>
                          </Row>
                          <Row style={{ marginTop: "10px" }}>
                            <Col lg={2} md={2} xs={4}>
                              <Icon as={CheckIcon} color="#0290F1" />
                            </Col>
                            <Col>
                              <h6
                                style={{
                                  display: "inline-block",
                                  marginLeft: "-16px",
                                }}
                              >
                                Swimming Pool
                              </h6>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </Col>
                <Col
                  lg={8}
                  md={8}
                  sm={12}
                  xs={12}
                  style={{ marginTop: "30px" }}
                >
                  <div className="divBorder">
                    <div style={{ padding: "20px" }}>
                      <h1
                        style={{
                          fontSize: "18px",
                          fontWeight: "700",
                        }}
                      >
                        Reviews
                      </h1>
                      <Row style={{ paddingTop: "15px" }}>
                        <Col lg={2} md={2} xs={12} sm={12}>
                          <Image
                            style={{
                              borderRadius: "50%",
                              width: "70%",
                              height: "auto",
                            }}
                            src="/images/avatar.jpg"
                          />
                        </Col>
                        <Col lg={10} md={10} sx={12} sm={12}>
                          <h3 style={{ fontWeight: "700", color: "#0290f1" }}>
                            Muhammad Ahsan Nawaz
                          </h3>
                          <p style={{ fontSize: "12px" }}>10 October, 2021</p>
                          <p style={{ color: "#636363", fontSize: "13px" }}>
                            I had lived for 5 years with Ali, and really enjoyed
                            the whole stay. I would also like to thank RentoMate
                            for providing us with such amazing platform to rent
                            house and live in peace :)
                          </p>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "15px" }}>
                        <Col lg={2} md={2} xs={12} sm={12}>
                          <Image
                            style={{
                              borderRadius: "50%",
                              width: "70%",
                              height: "auto",
                            }}
                            src="/images/avatar.jpg"
                          />
                        </Col>
                        <Col lg={10} md={10} sx={12} sm={12}>
                          <h3 style={{ fontWeight: "700", color: "#0290f1" }}>
                            Bilal Aslam
                          </h3>
                          <p style={{ fontSize: "12px" }}>10 October, 2021</p>
                          <p style={{ color: "#636363", fontSize: "13px" }}>
                            I had lived for 5 years with Ali, and really enjoyed
                            the whole stay. I would also like to thank RentoMate
                            for providing us with such amazing platform to rent
                            house and live in peace :)
                          </p>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "15px" }}>
                        <Col lg={2} md={2} xs={12} sm={12}>
                          <Image
                            style={{
                              borderRadius: "50%",
                              width: "70%",
                              height: "auto",
                            }}
                            src="/images/avatar.jpg"
                          />
                        </Col>
                        <Col lg={10} md={10} sx={12} sm={12}>
                          <h3 style={{ fontWeight: "700", color: "#0290f1" }}>
                            Ahmad Shafiq
                          </h3>
                          <p style={{ fontSize: "12px" }}>10 October, 2021</p>
                          <p style={{ color: "#636363", fontSize: "13px" }}>
                            I had lived for 5 years with Ali, and really enjoyed
                            the whole stay. I would also like to thank RentoMate
                            for providing us with such amazing platform to rent
                            house and live in peace :)
                          </p>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      )}
      <div style={{ backgroundColor: "#0290f1", marginTop: "30px" }}>
        <Container>
          <Row>
            <Col
              lg={8}
              md={8}
              xs={12}
              sm={12}
              style={{ padding: "40px 0px 40px 0px" }}
            >
              <h1
                style={{ fontSize: "25px", fontWeight: "700", color: "white" }}
              >
                Need Help ?
              </h1>
              <h3 style={{ fontSize: "20px", color: "white" }}>
                We'll help you to grow through the whole renting process.
              </h3>
            </Col>
            <Col lg={4} md={4} sm={12} xs={12}>
              <Button
                style={{
                  backgroundColor: "white",
                  color: "#0290f1",
                  boxShadow: "none",
                  float: "right",
                  marginTop: "45px",
                }}
              >
                Contact Us Now
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
      
    </div>
  );
};

export default PropertyScreen;
