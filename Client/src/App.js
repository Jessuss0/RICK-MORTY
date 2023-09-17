import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import Form from './components/Form';
import About from "./components/About"
import Detail from './components/Detail';
import Error from './components/Error';
import Favorites from './components/Favorites';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate,  } from 'react-router-dom';


function App() {
   const [characters, setCharacters] = useState([])
   const [access, setAccess] = useState(false);

   const EMAIL = "jesus@gmail.com";
   const PASSWORD = "123456"

   const generarRandomId = ()=>{
      return Math.floor(Math.random()* 826) + 1;
   }

   function onSearch(id) {
      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         }
      }).catch((err)=> console.log(err))
   }

   const onClose = (id)=>{
      let resultado = characters.filter((pj)=> pj.id !== Number(id))
      setCharacters(resultado)
   }

   const addRandom = ()=>{
      let idRandom = generarRandomId();
      onSearch(idRandom);
   }

   const login = (userData)=>{
      if(userData.password === PASSWORD && userData.email === EMAIL){
         setAccess(true);
         navigate("/home");
      }
   };

   const logOut = ()=>{
      navigate("/")
   }

   const location = useLocation();
   const navigate = useNavigate();

   useEffect(() => {
      //!access && navigate('/');
   }, [access]);

   return (
      <div className='App'>
         {location.pathname !== "/" && <Nav onSearch={onSearch} addRandom={addRandom} logOut={logOut}/>}
         <Routes> 
            <Route exact path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route exact path='/about' element={<About/>}/>
            <Route exact path='/detail/:id' element={<Detail/>}/>
            <Route exact path='/favorites' element={<Favorites/>}/>
            <Route exact path='/' element={<Form login={login}/>}/>

            <Route path="*" Component={Error}/>
         </Routes>
      </div>
   );
}

export default App;
;
