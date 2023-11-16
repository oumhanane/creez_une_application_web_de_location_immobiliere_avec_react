// import React, { useState, useEffect } from 'react';
import {useState} from 'react';
import {useEffect} from 'react';


function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  // Utilisez les données dans votre application, par exemple :
  console.log(data.users);
  console.log(data.products);

  return (
    <div>
      {/* Votre application React */}
      <h1>Bonjour les gens</h1>
    </div>
  );
}

export default App;
