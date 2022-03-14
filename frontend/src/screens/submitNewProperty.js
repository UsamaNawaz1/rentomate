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
import { submitProperty } from '../actions/propertyActions.js';


function SubmitNewProperty() {

  const userLogin = useSelector((state) => state.userLogin);
  const {userInfo} = userLogin;

  const addProperty = useSelector((state) => state.submitProperty);
  const dispatch = useDispatch();
  const {loading, error, submit_property} = addProperty;

  const [title, setTitle] = useState('')
  const [rent, setRent] = useState(0)
  const [property_type, setProperty_type] = useState('House')
  const [beds, setBeds] = useState('')
  const [baths, setBaths] = useState('')
  const [images, setImages] = useState()
  const [area, setArea] = useState('')
  const [city, setCity] = useState('Lahore')
  const [state, setState] = useState('Punjab')
  const [street, setStreet] = useState('')
  const [zip, setZip] = useState('')
  const [description, setDescription] = useState('')

  

  // useEffect(()=>{
  //   if(userInfo){
  //     setEmail(userInfo.user_profile.user.email)
  //     setName(userInfo.user_profile.user.name)
  //     setPhone(userInfo.user_profile.phone_number)
  //     setStreet(userInfo.user_profile.address.street)
  //     setCity(userInfo.user_profile.address.city)
  //     setState(userInfo.user_profile.address.state)
  //     setRole(userInfo.user_profile.address.role)
  //   }
  // })

  const submitHandler = (e) => {
    console.log('hello in submitHandler');
    console.log(images);
    e.preventDefault();
    let formData = new FormData();
    formData.append('title', title);
    formData.append('rent', rent);
    formData.append('property_type', property_type);
    formData.append('beds', beds);
    formData.append('baths', baths);
    formData.append('area', area);
    formData.append('city', city);
    formData.append('state', state);
    formData.append('zip', zip);
    formData.append('description', description);
    formData.append('street', street);
    formData.append('images', images);
    
    dispatch(submitProperty(formData,userInfo.user_profile.user.token))
  }

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">List New Property</Card.Title>
              </Card.Header>
              <Card.Body>
                
                {error && <Message status="error">{error}</Message>}
                {loading && <Loader />}
                <Form onSubmit={submitHandler}>
                <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Title</label>
                        <Form.Control
                          defaultValue=""
                          onChange={(e) => setTitle(e.target.value)}
                          placeholder="Enter title for property"
                          type="text"
                          required
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label>Rent</label>
                        <Form.Control
                          onChange={(e) => setRent(e.target.value)}
                          placeholder="Enter the desired rent"
                          type="number"
                          required
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label>Property Type</label>
                        
                        <Form.Select aria-label="Default select example" as="select" value={property_type} onChange={(e) => setProperty_type(e.target.value)} required>
                        
                            
                            <option value="House">House</option>
                            <option value="Apartment">Apartment</option>
                            <option value="Plot">Plot</option>
                            <option value="Hostel">Hostel</option>
                            
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label>Bedrooms</label>
                        <Form.Control
                          onChange={(e) => setBeds(e.target.value)}
                          placeholder="Number of Bedrooms"
                          type="number"
                          required
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label>Washrooms</label>
                        <Form.Control
                          onChange={(e) => setBaths(e.target.value)}
                          placeholder="Number of Washrooms"
                          type="number"
                          required
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>Address</label>
                        <Form.Control
                          
                          onChange={(e) => setStreet(e.target.value)}
                          placeholder="Enter the Address (e.g Street #01, Park View)"
                          type="text"
                          required
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="4">
                      <Form.Group>
                        <label>Area in Marlas</label>
                        <Form.Control
                          
                          onChange={(e) => setArea(e.target.value)}
                          placeholder="Enter the Total Area (Marlas)"
                          type="number"
                          required
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label>City</label>
                        <Form.Select aria-label="Default select example" value={city} as="select" onChange={(e) => setCity(e.target.value)} required>
                        
                            
                        
                            
                            <option value="Islamabad">Islamabad</option>
                            <option value="" disabled>Punjab Cities</option>
                            <option value="Ahmed Nager Chatha">Ahmed Nager Chatha</option>
                            <option value="Ahmadpur East">Ahmadpur East</option>
                            <option value="Ali Khan Abad">Ali Khan Abad</option>
                            <option value="Alipur">Alipur</option>
                            <option value="Arifwala">Arifwala</option>
                            <option value="Attock">Attock</option>
                            <option value="Bhera">Bhera</option>
                            <option value="Bhalwal">Bhalwal</option>
                            <option value="Bahawalnagar">Bahawalnagar</option>
                            <option value="Bahawalpur">Bahawalpur</option>
                            <option value="Bhakkar">Bhakkar</option>
                            <option value="Burewala">Burewala</option>
                            <option value="Chillianwala">Chillianwala</option>
                            <option value="Chakwal">Chakwal</option>
                            <option value="Chichawatni">Chichawatni</option>
                            <option value="Chiniot">Chiniot</option>
                            <option value="Chishtian">Chishtian</option>
                            <option value="Daska">Daska</option>
                            <option value="Darya Khan">Darya Khan</option>
                            <option value="Dera Ghazi Khan">Dera Ghazi Khan</option>
                            <option value="Dhaular">Dhaular</option>
                            <option value="Dina">Dina</option>
                            <option value="Dinga">Dinga</option>
                            <option value="Dipalpur">Dipalpur</option>
                            <option value="Faisalabad">Faisalabad</option>
                            <option value="Ferozewala">Ferozewala</option>
                            <option value="Fateh Jhang">Fateh Jang</option>
                            <option value="Ghakhar Mandi">Ghakhar Mandi</option>
                            <option value="Gojra">Gojra</option>
                            <option value="Gujranwala">Gujranwala</option>
                            <option value="Gujrat">Gujrat</option>
                            <option value="Gujar Khan">Gujar Khan</option>
                            <option value="Hafizabad">Hafizabad</option>
                            <option value="Haroonabad">Haroonabad</option>
                            <option value="Hasilpur">Hasilpur</option>
                            <option value="Haveli Lakha">Haveli Lakha</option>
                            <option value="Jatoi">Jatoi</option>
                            <option value="Jalalpur">Jalalpur</option>
                            <option value="Jattan">Jattan</option>
                            <option value="Jampur">Jampur</option>
                            <option value="Jaranwala">Jaranwala</option>
                            <option value="Jhang">Jhang</option>
                            <option value="Jhelum">Jhelum</option>
                            <option value="Kalabagh">Kalabagh</option>
                            <option value="Karor Lal Esan">Karor Lal Esan</option>
                            <option value="Kasur">Kasur</option>
                            <option value="Kamalia">Kamalia</option>
                            <option value="Kamoke">Kamoke</option>
                            <option value="Khanewal">Khanewal</option>
                            <option value="Khanpur">Khanpur</option>
                            <option value="Kharian">Kharian</option>
                            <option value="Khushab">Khushab</option>
                            <option value="Kot Addu">Kot Addu</option>
                            <option value="Jauharabad">Jauharabad</option>
                            <option value="Lahore">Lahore</option>
                            <option value="Lalamusa">Lalamusa</option>
                            <option value="Layyah">Layyah</option>
                            <option value="Liaquat Pur">Liaquat Pur</option>
                            <option value="Lodhran">Lodhran</option>
                            <option value="Malakwal">Malakwal</option>
                            <option value="Mamoori">Mamoori</option>
                            <option value="Mailsi">Mailsi</option>
                            <option value="Mandi Bahauddin">Mandi Bahauddin</option>
                            <option value="Mian Channu">Mian Channu</option>
                            <option value="Mianwali">Mianwali</option>
                            <option value="Multan">Multan</option>
                            <option value="Murree">Murree</option>
                            <option value="Muridke">Muridke</option>
                            <option value="Mianwali Bangla">Mianwali Bangla</option>
                            <option value="Muzaffargarh">Muzaffargarh</option>
                            <option value="Narowal">Narowal</option>
                            <option value="Nankana Sahib">Nankana Sahib</option>
                            <option value="Okara">Okara</option>
                            <option value="Renala Khurd">Renala Khurd</option>
                            <option value="Pakpattan">Pakpattan</option>
                            <option value="Pattoki">Pattoki</option>
                            <option value="Pir Mahal">Pir Mahal</option>
                            <option value="Qaimpur">Qaimpur</option>
                            <option value="Qila Didar Singh">Qila Didar Singh</option>
                            <option value="Rabwah">Rabwah</option>
                            <option value="Raiwind">Raiwind</option>
                            <option value="Rajanpur">Rajanpur</option>
                            <option value="Rahim Yar Khan">Rahim Yar Khan</option>
                            <option value="Rawalpindi">Rawalpindi</option>
                            <option value="Sadiqabad">Sadiqabad</option>
                            <option value="Safdarabad">Safdarabad</option>
                            <option value="Sahiwal">Sahiwal</option>
                            <option value="Sangla Hill">Sangla Hill</option>
                            <option value="Sarai Alamgir">Sarai Alamgir</option>
                            <option value="Sargodha">Sargodha</option>
                            <option value="Shakargarh">Shakargarh</option>
                            <option value="Sheikhupura">Sheikhupura</option>
                            <option value="Sialkot">Sialkot</option>
                            <option value="Sohawa">Sohawa</option>
                            <option value="Soianwala">Soianwala</option>
                            <option value="Siranwali">Siranwali</option>
                            <option value="Talagang">Talagang</option>
                            <option value="Taxila">Taxila</option>
                            <option value="Toba Tek Singh">Toba Tek Singh</option>
                            <option value="Vehari">Vehari</option>
                            <option value="Wah Cantonment">Wah Cantonment</option>
                            <option value="Wazirabad">Wazirabad</option>
                            <option value="" disabled>Sindh Cities</option>
                            <option value="Badin">Badin</option>
                            <option value="Bhirkan">Bhirkan</option>
                            <option value="Rajo Khanani">Rajo Khanani</option>
                            <option value="Chak">Chak</option>
                            <option value="Dadu">Dadu</option>
                            <option value="Digri">Digri</option>
                            <option value="Diplo">Diplo</option>
                            <option value="Dokri">Dokri</option>
                            <option value="Ghotki">Ghotki</option>
                            <option value="Haala">Haala</option>
                            <option value="Hyderabad">Hyderabad</option>
                            <option value="Islamkot">Islamkot</option>
                            <option value="Jacobabad">Jacobabad</option>
                            <option value="Jamshoro">Jamshoro</option>
                            <option value="Jungshahi">Jungshahi</option>
                            <option value="Kandhkot">Kandhkot</option>
                            <option value="Kandiaro">Kandiaro</option>
                            <option value="Karachi">Karachi</option>
                            <option value="Kashmore">Kashmore</option>
                            <option value="Keti Bandar">Keti Bandar</option>
                            <option value="Khairpur">Khairpur</option>
                            <option value="Kotri">Kotri</option>
                            <option value="Larkana">Larkana</option>
                            <option value="Matiari">Matiari</option>
                            <option value="Mehar">Mehar</option>
                            <option value="Mirpur Khas">Mirpur Khas</option>
                            <option value="Mithani">Mithani</option>
                            <option value="Mithi">Mithi</option>
                            <option value="Mehrabpur">Mehrabpur</option>
                            <option value="Moro">Moro</option>
                            <option value="Nagarparkar">Nagarparkar</option>
                            <option value="Naudero">Naudero</option>
                            <option value="Naushahro Feroze">Naushahro Feroze</option>
                            <option value="Naushara">Naushara</option>
                            <option value="Nawabshah">Nawabshah</option>
                            <option value="Nazimabad">Nazimabad</option>
                            <option value="Qambar">Qambar</option>
                            <option value="Qasimabad">Qasimabad</option>
                            <option value="Ranipur">Ranipur</option>
                            <option value="Ratodero">Ratodero</option>
                            <option value="Rohri">Rohri</option>
                            <option value="Sakrand">Sakrand</option>
                            <option value="Sanghar">Sanghar</option>
                            <option value="Shahbandar">Shahbandar</option>
                            <option value="Shahdadkot">Shahdadkot</option>
                            <option value="Shahdadpur">Shahdadpur</option>
                            <option value="Shahpur Chakar">Shahpur Chakar</option>
                            <option value="Shikarpaur">Shikarpaur</option>
                            <option value="Sukkur">Sukkur</option>
                            <option value="Tangwani">Tangwani</option>
                            <option value="Tando Adam Khan">Tando Adam Khan</option>
                            <option value="Tando Allahyar">Tando Allahyar</option>
                            <option value="Tando Muhammad Khan">Tando Muhammad Khan</option>
                            <option value="Thatta">Thatta</option>
                            <option value="Umerkot">Umerkot</option>
                            <option value="Warah">Warah</option>
                            <option value="" disabled>Khyber Cities</option>
                            <option value="Abbottabad">Abbottabad</option>
                            <option value="Adezai">Adezai</option>
                            <option value="Alpuri">Alpuri</option>
                            <option value="Akora Khattak">Akora Khattak</option>
                            <option value="Ayubia">Ayubia</option>
                            <option value="Banda Daud Shah">Banda Daud Shah</option>
                            <option value="Bannu">Bannu</option>
                            <option value="Batkhela">Batkhela</option>
                            <option value="Battagram">Battagram</option>
                            <option value="Birote">Birote</option>
                            <option value="Chakdara">Chakdara</option>
                            <option value="Charsadda">Charsadda</option>
                            <option value="Chitral">Chitral</option>
                            <option value="Daggar">Daggar</option>
                            <option value="Dargai">Dargai</option>
                            <option value="Darya Khan">Darya Khan</option>
                            <option value="Dera Ismail Khan">Dera Ismail Khan</option>
                            <option value="Doaba">Doaba</option>
                            <option value="Dir">Dir</option>
                            <option value="Drosh">Drosh</option>
                            <option value="Hangu">Hangu</option>
                            <option value="Haripur">Haripur</option>
                            <option value="Karak">Karak</option>
                            <option value="Kohat">Kohat</option>
                            <option value="Kulachi">Kulachi</option>
                            <option value="Lakki Marwat">Lakki Marwat</option>
                            <option value="Latamber">Latamber</option>
                            <option value="Madyan">Madyan</option>
                            <option value="Mansehra">Mansehra</option>
                            <option value="Mardan">Mardan</option>
                            <option value="Mastuj">Mastuj</option>
                            <option value="Mingora">Mingora</option>
                            <option value="Nowshera">Nowshera</option>
                            <option value="Paharpur">Paharpur</option>
                            <option value="Pabbi">Pabbi</option>
                            <option value="Peshawar">Peshawar</option>
                            <option value="Saidu Sharif">Saidu Sharif</option>
                            <option value="Shorkot">Shorkot</option>
                            <option value="Shewa Adda">Shewa Adda</option>
                            <option value="Swabi">Swabi</option>
                            <option value="Swat">Swat</option>
                            <option value="Tangi">Tangi</option>
                            <option value="Tank">Tank</option>
                            <option value="Thall">Thall</option>
                            <option value="Timergara">Timergara</option>
                            <option value="Tordher">Tordher</option>
                            <option value="" disabled>Balochistan Cities</option>
                            <option value="Awaran">Awaran</option>
                            <option value="Barkhan">Barkhan</option>
                            <option value="Chagai">Chagai</option>
                            <option value="Dera Bugti">Dera Bugti</option>
                            <option value="Gwadar">Gwadar</option>
                            <option value="Harnai">Harnai</option>
                            <option value="Jafarabad">Jafarabad</option>
                            <option value="Jhal Magsi">Jhal Magsi</option>
                            <option value="Kacchi">Kacchi</option>
                            <option value="Kalat">Kalat</option>
                            <option value="Kech">Kech</option>
                            <option value="Kharan">Kharan</option>
                            <option value="Khuzdar">Khuzdar</option>
                            <option value="Killa Abdullah">Killa Abdullah</option>
                            <option value="Killa Saifullah">Killa Saifullah</option>
                            <option value="Kohlu">Kohlu</option>
                            <option value="Lasbela">Lasbela</option>
                            <option value="Lehri">Lehri</option>
                            <option value="Loralai">Loralai</option>
                            <option value="Mastung">Mastung</option>
                            <option value="Musakhel">Musakhel</option>
                            <option value="Nasirabad">Nasirabad</option>
                            <option value="Nushki">Nushki</option>
                            <option value="Panjgur">Panjgur</option>
                            <option value="Pishin Valley">Pishin Valley</option>
                            <option value="Quetta">Quetta</option>
                            <option value="Sherani">Sherani</option>
                            <option value="Sibi">Sibi</option>
                            <option value="Sohbatpur">Sohbatpur</option>
                            <option value="Washuk">Washuk</option>
                            <option value="Zhob">Zhob</option>
                            <option value="Ziarat">Ziarat</option>
                       
                            
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label>State</label>
                        <Form.Select aria-label="Default select example" value={state} as="select" onChange={(e) => setState(e.target.value)} required>
                        
                            
                            <option value="Punjab">Punjab</option>
                            <option value="Azad Kashmir">Azad Kashmir</option>
                            <option value="Balochistan">Balochistan</option>
                            <option value="Federal Administered Tribal Areas">Federal Administered Tribal Areas</option>
                            <option value="Gilgit-Baltistan">Gilgit-Baltistan</option>
                            <option value="Islamabad Capital Territory">Islamabad Capital Territory</option>
                            <option value="Khyber Pakhtunkhwa">Khyber Pakhtunkhwa</option>
                            <option value="Sindh" >Sindh</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label>Zip Code</label>
                        <Form.Control
                          onChange={(e) => setZip(e.target.value)}
                          placeholder="Zip Code"
                          type="number"
                          required
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="8">
                    <Form.Group controlId="formFileMultiple" className="mb-3">

                        <Form.Label>Add Property Images</Form.Label>
                        <Form.Control onChange={(e) => setImages(e.target.files[0])}  type="file" />
                    </Form.Group>
                    </Col>
                   
                  </Row>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>Property Description</label>
                        <Form.Control
                          cols="80"
                          onChange={(e) => setDescription(e.target.value)}
                          placeholder="Write a brief description about the property"
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
                    style={{textTransform:"none"}}
                  >
                    Add new property
                  </Button>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          
        </Row>
      </Container>
    </>
  );
}

export default SubmitNewProperty;
