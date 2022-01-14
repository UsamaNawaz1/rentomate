import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ViewPropertyScreen from "./screens/ViewPropertyScreen";
import PropertyScreen from "./screens/PropertyScreen";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <Router>
      <Header />
      <main id="AppMain" className="py-3">
        <Route path="/" component={HomeScreen} exact />
        <ChakraProvider>
          <Route path="/properties" component={ViewPropertyScreen} />
        </ChakraProvider>
        <ChakraProvider>
          <Route path="/property/:id" component={PropertyScreen} />
        </ChakraProvider>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
