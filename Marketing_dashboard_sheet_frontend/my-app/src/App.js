//import logo from './logo.svg';
import Header from './components/Header';
import Footer from './components/Footer';
import filterLeades from './components/FilterLeades';
import TaskManager from './components/TaskManager';
import axios from 'axios';
import {useEffect, useState} from "react";
import SearchLeades from './components/SearchLeades';
import './App.css';



function App() {
 const[leades,setLeades]=useState([]);
  const[searchText,setSearchText]=useState("");
 // const jk=filterNotes(notes,searchText);


  useEffect( ()=>{
    /*function()
{
      axios.get("http://localhost:3005/alldata")
    .then((res)=> setStudentdata(res.data)).catch((e)=>console.log("error--"+e));
   },*/
   const fetchdata=async()=>
   {
    try{
    const res=  await  axios.get("http://localhost:8080/api/All1")
    console.log(res);
    setLeades(res.data);
    const filtered=filterLeades(res.data,searchText);
    setLeades(filtered);
      }
    catch(err)
       {
        console.log("error--"+err);            
       }
   };
   fetchdata();},  [searchText]);


 // const json_data="http://localhost:3001/notes";
function handleSearchNotes(obj)
{
  setSearchText(obj.target.value);
}
function handleClearNotes()
{
  setSearchText("");
}
  return (
    <div className="App">
       <Header>
        
        <SearchLeades searchText={searchText}
        onSearchNotes={handleSearchNotes}
        onClearNotes={handleClearNotes}/>
       </Header><hr/>
       <TaskManager notess={leades}>
        <SearchLeades searchText={searchText}
        onSearchNotes={handleSearchNotes}
        onClearNotes={handleClearNotes}/>
       </TaskManager>
       <hr/>
      <Footer/>
    </div>
  );
}

export default App;
