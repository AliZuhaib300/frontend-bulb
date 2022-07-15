import "./App.css";
import { Route, Routes } from "react-router-dom";
import DiscreteSlider from "./components/view/slider";
import LightBulb from "./components/view/lightBulb";
import Navbar from "./components/view/Navbar";
import Form from "./components/form/form";


function App() {

  return (

    <Routes>
      <Route path="/" element={<>
        <Navbar />
        <DiscreteSlider />
        <LightBulb />
      </>} />

      <Route path="/form" element={<Form />} />
    </Routes >


  );
}

export default App;
