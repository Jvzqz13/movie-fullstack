import { useEffect, useState } from 'react'
import './App.css';

function App() {

  //useEffect
  useEffect(() => {
    // connect to the backend
    const fetchData = async () => {
      const res = await fetch ('http://localhost:4000/api/movies');
      const data = await res.json();
      console.log(data);
    } 
    fetchData();


  }, []);


  return (
    <div className="App">
    <h1> Movies FullStack Appp </h1>
    </div>
  );
}

export default App;
