import './App.css';
import {useEffect, useState} from 'react';
import axios from "axios";

function App() {
  const [data, setData] = useState([])
useEffect (()=>{
  async function getUser() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
      setData(response.data)
    } catch (error) {
      console.error(error);
    }
  }
  getUser()
 
},[data])

console.log("------");

  return (
    <div className="App">

      {data.map((data, index) => (
        <section key={index} className="card">
        <img src={data.thumbnailUrl} className="thumbnail" />
        <div className="albumId">{data.albumId}</div>
        <div className="id"></div>
        <div className="title"></div>
        <div className="url"></div>
        </section>
      ))}
    </div>
  );
}

export default App;
