
import './App.css';
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import ApartmentsList from "./components/ApartmentsList";
import ApartmentDetails from "./components/ApartmentDetails";
import CreateApartment from "./components/CreateApartment";
import {  Route, Routes } from "react-router-dom";
import axios from 'axios';
import { useState,useEffect } from 'react';

function App() {


  const [apartmentsArr, setApartmentsArr] = useState([]);
  
  
  useEffect(() => {
        getApartmentsFromApi();

      }, []);

  
  const baseUrl = " https://ironbnb-m3.herokuapp.com"
  



      const getApartmentsFromApi = () => {
        axios.get(baseUrl + "/apartments")
          .then((response) => {
            console.log(response.data);
    
            setApartmentsArr(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
      }

const createApartment = (newApartmentObj) =>{
  axios
  .post(baseUrl+ '/apartments', newApartmentObj)
  .then((response) => {
    console.log(response.data);
    getApartmentsFromApi();
  // setApartmentsArr((prevListOfApartments) => {
   //  const newList = [newApartmentObj, ...prevListOfApartments];
    // return newList;
   // });
  })
  .catch((e) => {
    console.log(e);
  });

}

 


  return (
    <div className="App">

<NavBar></NavBar>

<Routes>

<Route path ="/" element ={  <HomePage/>}></Route>
<Route path ="/apartments" element ={  <ApartmentsList apartmentsArr ={apartmentsArr} />}></Route>
<Route path ="/apartments/create" element ={  <CreateApartment callbackToCreate={createApartment}/> }></Route>
<Route path ="/apartments/:apartmentId" element ={  <ApartmentDetails apartmentsArr ={apartmentsArr}/> }></Route>
<Route path="*" element={ <h2>404: sorry, that route does not exist</h2>} />
</Routes>
    




      

  





    
    </div>
  );
}

export default App;
