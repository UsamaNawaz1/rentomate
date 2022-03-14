import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
function TableList() {
  const dispatch = useDispatch();
  const landlordProperties = useSelector((state) => state.landlordProperties);
  const userLogin = useSelector((state) => state.userLogin);
  const {userInfo} = userLogin;
  const { error, loading, landlord_properties } = landlordProperties;
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">All Listed Properties</Card.Title>
                <p className="card-category">
                  Verified by Rentomate Adminstration
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      
                      <th className="border-0">Title</th>
                      <th className="border-0">Posted On</th>
                      <th className="border-0">Rent</th>
                      <th className="border-0">Status</th>
                      <th className="border-0">City</th>
                      <th className="border-0">State</th>
                      <th className="border-0"></th>
                    </tr>
                  </thead>
                  <tbody>
                  {loading ? (
                      <Loader />
                    ) : error ? (
                      <Container><Row><Message status="error">{error}</Message></Row></Container>
                      
                      
                    ) : (
                      landlord_properties.map((property) => (
                        <tr key={property.id}>
                          <td>{property.title}</td>
                          <td>{property.created_on}</td>
                          <td>PKR {property.rent}</td>
                          <td><Button className="btn-sm btn-primary" style={{textTransform:"none"}}>Active</Button></td>
                          <td>{property.address.city}</td>
                          <td>{property.address.state}</td>
                          <td><Button style={{textTransform:"none"}} className="btn-md btn-success">View Details</Button></td>
                        </tr>
                      ))
                    )}

                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
          
        </Row>
      </Container>
    </>
  );
}

export default TableList;
