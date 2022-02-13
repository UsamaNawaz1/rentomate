import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ViewPropertyScreen from "./screens/ViewPropertyScreen";
import PropertyScreen from "./screens/PropertyScreen";
import { ChakraProvider } from "@chakra-ui/react";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import AdminLayout from "./screens/Admin"

import { PropertyContext } from './Contexts/PropertyContext';

function App() {

  const [minValue, setMinValue] = useState(10000);
  const [maxValue, setMaxValue] = useState(300000);
  const [keyword, setKeyword] = useState('');

  const [propertyType, setPropertyType] = useState('');
  const [bedrooms, setBedrooms] = useState(2);
  const [baths, setBaths] = useState(3);

  return (
    <Router>
      <Header />
      <main id="AppMain" className="py-3">
      <PropertyContext.Provider value={{minValue, setMinValue, maxValue, setMaxValue, keyword, setKeyword, propertyType, setPropertyType, bedrooms, setBedrooms, baths, setBaths }}>
        <Route path="/" component={HomeScreen} exact />
        <ChakraProvider>
          <Route path="/properties" component={ViewPropertyScreen} />
        </ChakraProvider>
        <ChakraProvider>
          <Route path="/property/:id" component={PropertyScreen} />
        </ChakraProvider>
        <ChakraProvider>
        <Route path="/login" component={LoginScreen} />
        </ChakraProvider>
        <ChakraProvider>
        <Route path="/register" component={RegisterScreen} />
        </ChakraProvider>
        <ChakraProvider>
        <Switch>
          <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
          
      </Switch>
      </ChakraProvider>
      </PropertyContext.Provider>  
        
      </main>

      <Footer />
      
    </Router>
  );
}

export default App;
