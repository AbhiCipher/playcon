import React from 'react';
import { Login } from './component/Login.js';
//import { Home } from './component/Home.js';
import { Footer } from './component/Footer.js'
import { Book } from './component/Book.js'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
//import { Navbar1 } from './component/Navbar1.js';
import { Navbar2 } from './component/Navbar2.js';
import { Register } from './component/Register.js';
import { Forgotpassword } from './component/Forgotpassword.js';
import { Carosal } from './component/Carosal.js'
import { Testhome } from './component/Testhome.js';
import { Hrstyle } from './component/Hrstyle.js'
import { EditProfile } from './component/EditProfile.js'
import { Aboutus } from './component/Aboutus.js'
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact render={() => {
          return (<div><div><Navbar2 /></div><br />
            <div><Carosal /></div><br /><div><Hrstyle /></div><div><Testhome /></div><br /><div><Footer /></div></div>)
        }} />
        <Route path="/Login" exact render={() => { return (<Login />) }} />
        <Route path="/Register" exact render={() => { return (< Register />) }} />
        <Route path="/Forgotpassword" exact render={() => { return (< Forgotpassword />) }} />
        <Route path="/EditProfile" exact render={() => { return (< EditProfile />) }} />
        <Route path="/Aboutus" exact render={() => { return (< Aboutus />) }} />
        {/* <Route path="/" exact render={() => { return (<Book />) }} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
