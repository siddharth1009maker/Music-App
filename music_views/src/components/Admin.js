import React from 'react';
import { Check } from './Check';
import { About } from './About';
import { Remove } from './Remove';
import {NavLink, Route, Switch} from 'react-router-dom';
export const Admin = ()=>{
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
            <NavLink className="nav-link active" aria-current="page" to="/about">
              <span data-feather="home"></span>
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/add">
              <span data-feather="file"></span>
              Add A Song
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/delete">
              <span data-feather="file"></span>
              Delete A Song
            </NavLink>
          </li>
          
        </ul>

        
      </div>
    </nav>

    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Welcome Admin</h1>
        
      </div>

      <Switch>
        <Route path="/" exact component={About}/>
        <Route path="/about" component={About}/>
        <Route path="/add" component={Check}/>
        <Route path="/delete" component={Remove}/>
        
      </Switch>

      
   
    </main>
  </div>
</div>

        </>
    );
}