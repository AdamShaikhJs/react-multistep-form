import './App.css';
import React,{useState} from 'react';
import UserDetails from './container/UserDetails';
import SignupDetails from './container/SignupDetails';
import { useGlobalContext } from "./context/context";
import ProfileDetails from './container/ProfileDetails';
import ProgressBar from './container/ProgressBar/ProgerssBar';
import Review from './container/Review';

function App() {
const { steps } = useGlobalContext();

  return (

    < >
    <div>
     <ProgressBar/>
    </div>
    <div>
       {steps===0 && <UserDetails/>}   
       {steps===1 && <ProfileDetails/>}
       {steps===2 && <SignupDetails/>}
       {steps===3 && <Review/>}

    </div>
    </>
  );
}

export default App;
