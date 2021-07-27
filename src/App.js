
import './App.css';
import Header from './components/Header';
import Login from "./components/Login";
import Sidebar from './components/Sidebar';
import Main from "./components/Main";
import { useStateValue } from "./Statetprovider";
import {useEffect} from "react";
import { auth } from './firebase';
import { actionTypes } from './reducer';
import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';


function App() {
  const [{isopen, user, darkMode}, dispatch] = useStateValue();

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light"
    }
  })

useEffect(()=> {
  auth.onAuthStateChanged((user)=> {
    if(user) {
      dispatch({
        type: actionTypes.SET__USER,
        user: user,
      })
    }
  });
  console.log(user);
},[])

  return (
    <div className="app">
     {
       !user ? (
      <>
       <Header/>
       <Login/>
      </>
       ) : (
         <>
          <ThemeProvider theme={theme}>
            <CssBaseline/>
           <Header/>
           <div className={`app__central ${isopen ? "displayed" : ""}`}>
            <Sidebar/>
            <Main/>
           </div>
          </ThemeProvider>
           
         </>
       
      )
     }
     
     
    </div>
  );
}

export default App;
