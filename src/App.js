import './App.css';
import Weather from './components/Weather';
import Search from './components/Search';
import { useState } from 'react';
import Footer from './components/Footer';

function App() {

  const [loc, setloc] = useState("Sirsa");
  const [country, setcountry] = useState("India");
  const [state, setstate] = useState("Haryana")

  const changeLoc = () => {
    let val = document.getElementById("search").value;
    document.getElementById("search").value = "";
    if (val === "") {
      alert("Enter a location");
    }
    else {
      setloc(val);
    }
  }

  const goodLoc = (city, state, country) => {
    setloc(city);
    setcountry(country);
    setstate(state);
  }




  return (
    <>
      <Search changeLoc={changeLoc} loc={loc} country={country} state={state} />
      <Weather loc={loc} key={loc} changeLoc={goodLoc} />
      <Footer />
    </>
  );
}

export default App;
