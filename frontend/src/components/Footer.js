import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row style={{ marginTop: "40px" }}>
          <Col lg={4} md={4} xs={4} sm={4}>
            <Link to="/">
              <Image style={{ width: "70%" }} src="/images/rentomate.png" />
            </Link>

            <h1
              style={{
                color: "#707070",
                paddingTop: "25px",
                fontWeight: "700",
              }}
            >
              GIK Institute, Tarbela Road, District Swabi, Khyber Pakhtoon Khwa
              23640
            </h1>
            <h1 style={{ color: "#707070", paddingTop: "25px" }}>
              Call Us: <span style={{ fontWeight: "700" }}>+923114717266</span>
            </h1>
          </Col>
          <Col lg={4} md={4} sm={4} xs={4}>
            <div style={{ float: "right" }}>
              {" "}
              <h1 style={{ fontSize: "20px", fontWeight: "700" }}>
                Take a tour
              </h1>
              <h1 style={{ paddingTop: "25px" }}>About Us</h1>
              <h1 style={{ paddingTop: "25px" }}>Pricing</h1>
              <h1 style={{ paddingTop: "25px" }}>Support</h1>
            </div>
          </Col>
        </Row>
        <div className="text-center py-3">Copyright &copy; Rentomate</div>
      </Container>
    </footer>
  );
};

export default Footer;
