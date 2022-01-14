import React, { useState, useEffect } from "react";
import Property from "../components/Property";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { Row, Col, Container, Form, Button, Image } from "react-bootstrap";
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from "@chakra-ui/react";

import { useDispatch, useSelector } from "react-redux";
import { listProperties } from "../actions/propertyActions";

const ViewPropertyScreen = () => {
  const dispatch = useDispatch();
  const propertyList = useSelector((state) => state.propertyList);
  const { error, loading, properties } = propertyList;
  const [minValue, setMinValue] = useState(10000);
  const [maxValue, setMaxValue] = useState(300000);

  useEffect(() => {
    dispatch(listProperties());
  }, [dispatch]);

  return (
    <div>
      {/* <h1>Latest Products</h1>
      <Row>
        {properties.map((property) => (
          <Col key={property._id} lg={6} md={6} xs={12} xl={4}>
            <Property property={property} />
          </Col>
        ))}
      </Row> */}
      <Row className="wrap">
        <Col lg={3} md={3} xs={5} className="left" xl={3}>
          <Container>
            <Form>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Search Properties..."
                  style={{ color: "#636363" }}
                />
              </Form.Group>

              <h6 style={{ color: "#636363" }}>Property Type</h6>

              <Row style={{ marginTop: "20px" }}>
                <Col lg={6} md={6} xs={12}>
                  <Button
                    style={{
                      padding: "6px 33px 6px 33px",
                      textTransform: "none",
                      fontSize: "14px",
                      width: "100%",
                      boxShadow: "none",
                    }}
                  >
                    House
                  </Button>
                </Col>

                <Col lg={6} md={6} xs={12}>
                  <Button
                    style={{
                      padding: "6px 14px 6px 14px",
                      textAlign: "center",
                      textTransform: "none",
                      fontSize: "14px",
                      width: "100%",
                      backgroundColor: "#F8F7F7",
                      color: "Black",
                      boxShadow: "none",
                    }}
                  >
                    Commercial
                  </Button>
                </Col>
              </Row>
              <Row style={{ marginTop: "10px" }}>
                <Col lg={6} md={6} xs={12}>
                  <Button
                    style={{
                      padding: "6px 14px 6px 14px",
                      textAlign: "center",
                      textTransform: "none",
                      fontSize: "14px",
                      width: "100%",
                      backgroundColor: "#F8F7F7",
                      color: "Black",
                      boxShadow: "none",
                    }}
                  >
                    Apartment
                  </Button>
                </Col>

                <Col lg={6} md={6} xs={12}>
                  <Button
                    style={{
                      padding: "6px 14px 6px 14px",
                      textAlign: "center",
                      textTransform: "none",
                      fontSize: "14px",
                      width: "100%",
                      backgroundColor: "#F8F7F7",
                      color: "Black",
                      boxShadow: "none",
                    }}
                  >
                    Plot
                  </Button>
                </Col>
              </Row>
              <br></br>
              <h6 style={{ color: "#636363" }}>Bedrooms</h6>
              <Row style={{ marginTop: "20px" }}>
                <Col lg={3} md={3} xs={6}>
                  <Button
                    style={{
                      textTransform: "none",
                      fontSize: "14px",
                      width: "100%",
                      backgroundColor: "#F8F7F7",
                      color: "Black",
                      boxShadow: "none",
                      justifyContent: "center",
                      margin: "auto",
                      textAlign: "center",
                    }}
                  >
                    1
                  </Button>
                </Col>
                <Col lg={3} md={3} xs={6}>
                  <Button
                    style={{
                      textTransform: "none",
                      fontSize: "14px",
                      width: "100%",

                      boxShadow: "none",
                      justifyContent: "center",
                      margin: "auto",
                      textAlign: "center",
                    }}
                  >
                    2
                  </Button>
                </Col>
                <Col lg={3} md={3} xs={6}>
                  <Button
                    style={{
                      textTransform: "none",
                      fontSize: "14px",
                      width: "100%",
                      backgroundColor: "#F8F7F7",
                      color: "Black",
                      boxShadow: "none",
                      justifyContent: "center",
                      margin: "auto",
                      textAlign: "center",
                    }}
                  >
                    3
                  </Button>
                </Col>
                <Col lg={3} md={3} xs={6}>
                  <Button
                    style={{
                      textTransform: "none",
                      fontSize: "14px",
                      width: "100%",
                      backgroundColor: "#F8F7F7",
                      color: "Black",
                      boxShadow: "none",
                      justifyContent: "center",
                      margin: "auto",
                      textAlign: "center",
                    }}
                  >
                    4
                  </Button>
                </Col>
              </Row>

              <br></br>
              <h6 style={{ color: "#636363" }}>Bathrooms</h6>
              <Row style={{ marginTop: "20px" }}>
                <Col lg={3} md={3} xs={6}>
                  <Button
                    style={{
                      textTransform: "none",
                      fontSize: "14px",
                      width: "100%",
                      backgroundColor: "#F8F7F7",
                      color: "Black",
                      boxShadow: "none",
                      justifyContent: "center",
                      margin: "auto",
                      textAlign: "center",
                    }}
                  >
                    1
                  </Button>
                </Col>
                <Col lg={3} md={3} xs={6}>
                  <Button
                    style={{
                      textTransform: "none",
                      fontSize: "14px",
                      width: "100%",
                      backgroundColor: "#F8F7F7",
                      color: "Black",
                      boxShadow: "none",
                      justifyContent: "center",
                      margin: "auto",
                      textAlign: "center",
                    }}
                  >
                    2
                  </Button>
                </Col>
                <Col lg={3} md={3} xs={6}>
                  <Button
                    style={{
                      textTransform: "none",
                      fontSize: "14px",
                      width: "100%",

                      boxShadow: "none",
                      justifyContent: "center",

                      textAlign: "center",
                    }}
                  >
                    3
                  </Button>
                </Col>
                <Col lg={3} md={3} xs={6}>
                  <Button
                    style={{
                      textTransform: "none",
                      fontSize: "14px",
                      width: "100%",
                      backgroundColor: "#F8F7F7",
                      color: "Black",
                      boxShadow: "none",
                      justifyContent: "center",
                      margin: "auto",
                      textAlign: "center",
                    }}
                  >
                    4
                  </Button>
                </Col>
              </Row>
              <br></br>
              <h6 style={{ color: "#636363" }}>Price Range</h6>
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: "700",
                  color: "#0290f1",
                }}
              >
                PKR {minValue / 1000}K-{maxValue / 1000}K, 10K
              </p>
              <Row style={{ marginTop: "20px" }}>
                <Col>
                  <RangeSlider
                    aria-label={["min", "max"]}
                    defaultValue={[minValue, maxValue]}
                    max={500000}
                    min={5000}
                    step={10000}
                    onChange={([Min, Max]) => {
                      setMinValue(parseInt(Min));
                      setMaxValue(Max);
                    }}
                  >
                    <RangeSliderTrack>
                      <RangeSliderFilledTrack />
                    </RangeSliderTrack>
                    <RangeSliderThumb index={0} />
                    <RangeSliderThumb index={1} />
                  </RangeSlider>
                </Col>
              </Row>
              <br></br>
              <h6 style={{ color: "#636363" }}>Amenities</h6>
              <Row style={{ marginTop: "20px" }}>
                <Col lg={2} md={2} xs={4}>
                  <Form.Check
                    aria-label="option 1"
                    style={{ whiteSpace: "nowrap", overflowX: "auto" }}
                  ></Form.Check>
                </Col>
                <Col>
                  <h6 style={{ display: "inline-block", marginLeft: "-16px" }}>
                    Water Supply
                  </h6>
                </Col>
              </Row>
              <Row style={{ marginTop: "10px" }}>
                <Col lg={2} md={2} xs={4}>
                  <Form.Check
                    aria-label="option 1"
                    style={{ whiteSpace: "nowrap", overflowX: "auto" }}
                  ></Form.Check>
                </Col>
                <Col>
                  <h6 style={{ display: "inline-block", marginLeft: "-16px" }}>
                    Shared Accomodation
                  </h6>
                </Col>
              </Row>
              <Row style={{ marginTop: "10px" }}>
                <Col lg={2} md={2} xs={4}>
                  <Form.Check
                    aria-label="option 1"
                    style={{ whiteSpace: "nowrap", overflowX: "auto" }}
                  ></Form.Check>
                </Col>
                <Col>
                  <h6 style={{ display: "inline-block", marginLeft: "-16px" }}>
                    Supply of Gas
                  </h6>
                </Col>
              </Row>
              <Row style={{ marginTop: "10px" }}>
                <Col lg={2} md={2} xs={4}>
                  <Form.Check
                    aria-label="option 1"
                    style={{ whiteSpace: "nowrap", overflowX: "auto" }}
                  ></Form.Check>
                </Col>
                <Col>
                  <h6 style={{ display: "inline-block", marginLeft: "-16px" }}>
                    Garage
                  </h6>
                </Col>
              </Row>
              <br></br>
              <Row>
                <Col lg={12} md={12} xs={12}>
                  <Button
                    style={{
                      padding: "6px 33px 6px 33px",
                      textTransform: "none",
                      fontSize: "14px",
                      width: "100%",
                      boxShadow: "none",
                      backgroundColor: "#F8F7F7",
                      color: "Black",
                    }}
                  >
                    Reset
                  </Button>
                </Col>
              </Row>
            </Form>
          </Container>
        </Col>

        <Col className="right" style={{ backgroundColor: "#f4f5f9" }}>
          <Container>
            {/* <Row style={{ marginTop: "70px" }}>
              <Col lg={6} md={6} xs={12}>
                <a href={`/property/${singleProperty._id}`}>
                  <Image src={singleProperty.image} fluid />
                </a>
              </Col>

              <Col
                lg={6}
                md={6}
                xs={12}
                style={{
                  paddingTop: "15px",
                  backgroundColor: "white",
                  marginLeft: "0px",
                }}
              >
                <Container>
                  <h1 style={{ fontSize: "20px", fontWeight: "700" }}>
                    {singleProperty.address}
                  </h1>
                  <h4>
                    {singleProperty.city}, {singleProperty.state}
                  </h4>
                  <Row style={{ marginTop: "14px" }}>
                    <Col
                      lg={2}
                      md={2}
                      xs={4}
                      style={{ textAlign: "center", marginLeft: "-8px" }}
                    >
                      {" "}
                      <i style={{ fontSize: "20px" }} class="fas fa-bed"></i>
                      <p style={{ fontSize: "12px" }}>{singleProperty.beds}</p>
                    </Col>
                    <Col lg={2} md={2} xs={4} style={{ textAlign: "center" }}>
                      {" "}
                      <i style={{ fontSize: "20px" }} class="fas fa-bath"></i>
                      <p style={{ fontSize: "12px" }}>{singleProperty.baths}</p>
                    </Col>
                    <Col lg={2} md={2} xs={4} style={{ textAlign: "center" }}>
                      {" "}
                      <i
                        style={{ fontSize: "20px" }}
                        class="fas fa-chart-area"
                      ></i>
                      <p style={{ fontSize: "12px" }}>{singleProperty.area}</p>
                    </Col>
                  </Row>
                  <br></br>
                  <h5 style={{ fontSize: "15px" }}>
                    Look no further as we have listed the best Bungalow just for
                    you! This could be your chance to buy such a precious real
                    estate asset. Don't miss out on these 7 Marla units.{" "}
                  </h5>
                  <br></br>
                  <h5 style={{ fontSize: "15px" }}>
                    Look no further as we have listed the best Bungalow just for
                    you! This could be your chance to buy such a precious real
                    estate asset. Don't miss out on these 7 Marla units.{" "}
                  </h5>
                  <br></br>
                  <h5 style={{ fontSize: "15px" }}>
                    Look no further as we have listed the best Bungalow just for
                    you! This could be your chance to buy such a precious real
                    estate asset. Don't miss out on these 7 Marla units.{" "}
                  </h5>
                </Container>
              </Col>
            </Row> */}

            <Row style={{ marginTop: "60px" }}>
              {loading ? (
                <Loader />
              ) : error ? (
                <Message status="error">{error}</Message>
              ) : (
                properties.map((property) => (
                  <Col key={property.id} sm={12} lg={6} md={6} xs={12} xl={6}>
                    <Property property={property} />
                  </Col>
                ))
              )}
            </Row>
          </Container>
        </Col>
      </Row>
    </div>
  );
};

export default ViewPropertyScreen;
