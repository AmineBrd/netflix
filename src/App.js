import React, { useEffect } from 'react';
import HomeScreen from './Components/Screens/HomeScreen.js';
import Login from './Components/Screens/Login.js';
import ProfileScreen from './Components/Screens/ProfileScreen.js';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebaseApp.js';
import {useDispatch,useSelector} from 'react-redux'
import { login, logout, selectUser } from './features/userSlice.js';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(()=>{
    const subscribed = onAuthStateChanged(auth,(userAuth)=>{
        if(userAuth){
          // Logged in
          dispatch(login({
            uid:userAuth.uid,
            email:userAuth.email
          }))
        }else{
          // Logged out
          dispatch(logout())
        }
    })
    return subscribed;
  },[dispatch])
  return (
    <div className="app">
      {/* <HomeScreen /> */}
      <Router>
          {!user ?(
          <Login />
          ):
          <Routes>
            <Route path='/profile' element={<ProfileScreen />} />
              <Route path='/' element={<HomeScreen />} />
          </Routes>
}
      </Router>    
    </div>
  );
}

export default App;
