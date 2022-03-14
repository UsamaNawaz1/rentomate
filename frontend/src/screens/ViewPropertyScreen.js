import React, { useState, useEffect, useContext } from "react";
import { PropertyContext } from '../Contexts/PropertyContext';
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

import { useHistory } from 'react-router-dom'

import { useDispatch, useSelector } from "react-redux";
import { listProperties } from "../actions/propertyActions";

const ViewPropertyScreen = () => {
  const dispatch = useDispatch();
  const propertyList = useSelector((state) => state.propertyList);
  const { error, loading, properties } = propertyList;
  // const [minValue, setMinValue] = useState(10000);
  // const [maxValue, setMaxValue] = useState(300000);
  // const [keyword, setKeyword] = useState('');

  // const [propertyType, setPropertyType] = useState('');
  // const [bedrooms, setBedrooms] = useState(2);
  // const [baths, setBaths] = useState(3);
 
  const {minValue, setMinValue, maxValue, setMaxValue, keyword, setKeyword, propertyType, setPropertyType, bedrooms, setBedrooms, baths, setBaths} = useContext(PropertyContext);
  
 
  useEffect(() => {
    dispatch(listProperties(keyword, propertyType, bedrooms, baths, minValue, maxValue));
  }, [dispatch, keyword, minValue, maxValue, bedrooms, baths, propertyType]);

  const reset = () => {
    setKeyword('');
    setPropertyType('');
    setBedrooms(2);
    setBaths(3);
  }

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
                  value={keyword}
                  onChange={ (e) => setKeyword(e.target.value)}
                  placeholder="Search Properties..."
                  style={{ color: "#636363", textTransform:"none" }}
                />
              </Form.Group>

              <h6 style={{ color: "#636363", textTransform:"none" }}>Property Type</h6>

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
                    onClick={(e) => setPropertyType('House')}
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
                    onClick={(e) => setPropertyType('Hostel')}
                  >
                    Hostel
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
                    onClick={(e) => setPropertyType('Apartment')}
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
                    onClick={(e) => setPropertyType('Plot')}
                  >
                    Plot
                  </Button>
                </Col>
              </Row>
              <br></br>
              <h6 style={{ color: "#636363", textTransform:"none" }}>Bedrooms</h6>
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
                    onClick={(e) => setBedrooms(1)}
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
                    onClick={(e) => setBedrooms(2)}
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
                    onClick={(e) => setBedrooms(3)}
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
                    onClick={(e) => setBedrooms(4)}
                  >
                    4
                  </Button>
                </Col>
              </Row>

              <br></br>
              <h6 style={{ color: "#636363", textTransform:"none" }}>Bathrooms</h6>
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
                    onClick={(e) => setBaths(1)}
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
                    onClick={(e) => setBaths(2)}
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
                    onClick={(e) => setBaths(3)}
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
                    onClick={(e) => setBaths(4)}
                  >
                    4
                  </Button>
                </Col>
              </Row>
              <br></br>
              <h6 style={{ color: "#636363", textTransform:"none" }}>Price Range</h6>
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
                    onChangeEnd={([Min, Max]) => {
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
              {/* <h6 style={{ color: "#636363", textTransform:"none" }}>Amenities</h6>
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
              </Row> */}
              {/* <Row style={{ marginTop: "10px" }}>
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
              <br></br> */}
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
                    onClick={reset}
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
