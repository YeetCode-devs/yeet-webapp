import { useState, useEffect } from 'react'
import Brands from './Brands'
import Models from './Models'
import axios from 'axios';
import logo from './assets/react.svg'
import './App.css'

function App() {
  const [brandClicked, setBrandClicked] = useState(undefined);
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);

  const handleBrandClick = (brand) => {
    setBrandClicked(brand);
  };

  const handleModelBackClick = () => {
    setBrandClicked(undefined);
  };

  useEffect(() => {
    const fetchDirectories = async () => {
      if(brandClicked) {
        try {
          const response = await axios.get(
            `https://api.github.com/repos/YeetCode-devs/yeet-devices/contents/${brandClicked}`
          );

          // Filter out non-directory items
          const models = response.data.filter(item => item.type === 'file');

          setModels(models);
        } catch (error) {
          console.error(error);
        }
      }
      else {
        try {
          const response = await axios.get(
            'https://api.github.com/repos/YeetCode-devs/yeet-devices/contents'
          );

          // Filter out non-directory items
          const brands = response.data.filter(item => item.type === 'dir');

          setBrands(brands);
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchDirectories();
  }, [brandClicked]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          Welcome to Yeet Devs Page
        </h2>
      </header>
      {brandClicked ? (
        <Models models={models} />
      ) : (
        <Brands brands={brands} handleBrandClick={setBrandClicked}/>
      )}
    </div>
  );

}

export default App
