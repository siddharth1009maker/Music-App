   
import React from 'react';    
import {NavLink, Route, Switch} from 'react-router-dom';
import { Song } from './Song';
import { Display } from './Display';
import { Search } from './Search';
import { Sort } from './Sort';
export const DashBoard = ({msg})=>{
 return (<>
    <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
<a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="/#">Brain Mentors</a>
<button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>
</button>
</header>
<div className="container-fluid">
<div className="row">
  <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
    <div className="position-sticky pt-3">
      <ul className="nav flex-column">
      <li className="nav-item">
          <NavLink className="nav-link" to="/search">
            <span data-feather="file"></span>
            Search A Song
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/allsongs">
            <span data-feather="file"></span>
            Songs Added By The Admin
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/songs/Sonu Nigam">
            <span data-feather="file"></span>
            Sonu Nigam Songs
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/songs/Shaan">
            <span data-feather="file"></span>
            Shaan  Songs
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/songs/Arijit Singh">
            <span data-feather="file"></span>
            Arijit Singh Songs
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/songs/Lucky Ali">
            <span data-feather="file"></span>
            Lucky Ali  Songs
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/sort/descending">
            <span data-feather="file"></span>
          Descending Order
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/sort/ascending">
            <span data-feather="file"></span>
            Ascending Order
          </NavLink>
        </li>
      </ul>

      
    </div>
  </nav>

  <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1 className="h2">{msg}</h1>
  
    </div>

    <Switch>
      <Route path="/" exact component={Display}/>
      <Route path="/search" component = {Search} />
      <Route path="/songs/:singerName" component={Song}/>
      <Route path="/allsongs" component={Display}/>
      <Route path="/sort/:decision" component = {Sort} />
    </Switch>

    
 
  </main>
</div>
</div>
</>
);

}
