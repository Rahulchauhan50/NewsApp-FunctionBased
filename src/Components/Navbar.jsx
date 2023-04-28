import React from 'react'
import { Link } from "react-router-dom"

export default function News(props) {
    let { mode, toggle, CountryName } = props;
    const styley = {
      position: 'absolute',
      right: "25%",
      top: "15px",
      cursor: "pointer"
    }
    const top = () => {
      window.scrollTo(0,0);
    }

  return (
    <>
    <div className='fixed-top'>
      <nav className={`navbar navbar-expand-lg bg-${mode} navbar-${mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">QuickNews</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Countries
                </a>
                <ul style={{backgroundColor:"#00173a",color:"white"}} className="dropdown-menu">
                  <li onClick={()=>{CountryName("in")}} ><a className="dropdown-item btn text-secondary">India</a></li>
                  <li onClick={()=>{CountryName("au")}} ><a className="dropdown-item btn text-secondary">Australia</a></li>
                  <li onClick={()=>{CountryName("br")}} ><a className="dropdown-item btn text-secondary">Brazil</a></li>
                  <li onClick={()=>{CountryName("ca")}} ><a className="dropdown-item btn text-secondary">Canada</a></li>
                  <li onClick={()=>{CountryName("cn")}} ><a className="dropdown-item btn text-secondary">China</a></li>
                  <li onClick={()=>{CountryName("eg")}} ><a className="dropdown-item btn text-secondary">Egypt</a></li>
                  <li onClick={()=>{CountryName("fr")}} ><a className="dropdown-item btn text-secondary">France</a></li>
                  <li onClick={()=>{CountryName("Hk")}} ><a className="dropdown-item btn text-secondary">Hong Kong</a></li>
                  <li onClick={()=>{CountryName("jp")}} ><a className="dropdown-item btn text-secondary">Japan</a></li>
                  <li onClick={()=>{CountryName("ru")}} ><a className="dropdown-item btn text-secondary">Russia</a></li>
                  <li onClick={()=>{CountryName("za")}} ><a className="dropdown-item btn text-secondary">South Africa</a></li>
                  <li onClick={()=>{CountryName("us")}} ><a className="dropdown-item btn text-secondary">United States</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href='/'>Disabled</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
          <div style={styley} className="form-check form-switch">
            <input style={{ cursor: "pointer" }} onClick={toggle} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked={mode === "dark" ? true : false} />
            <label id="inp1" className={`text-${mode === "dark" ? "light" : "dark"}`} style={{ fontSize: "13px" }} >Dark Mode</label>
          </div>
        </div>
      </nav>
      <ul className="overflow-auto list-group list-group-horizontal position-relative overflow-auto w-100">
        <li onClick={top} className="btn btn-success my-1 mx-1 py-0 "><Link style={{textDecoration:"none", color:"white"}} to="/business" >business</Link></li>
        <li onClick={top} className="btn btn-success my-1 mx-1 py-0 "><Link style={{textDecoration:"none", color:"white"}} to="/entertainment" >entertainment</Link></li>
        <li onClick={top} className="btn btn-success my-1 mx-1 py-0 "><Link style={{textDecoration:"none", color:"white"}} to="/general" >general</Link></li>
        <li onClick={top} className="btn btn-success my-1 mx-1 py-0 "><Link style={{textDecoration:"none", color:"white"}} to="/health" >health</Link></li>
        <li onClick={top} className="btn btn-success my-1 mx-1 py-0 "><Link style={{textDecoration:"none", color:"white"}} to="/science" >science</Link></li>
        <li onClick={top} className="btn btn-success my-1 mx-1 py-0 "><Link style={{textDecoration:"none", color:"white"}} to="/sports" >sports</Link></li>
        <li onClick={top} className="btn btn-success my-1 mx-1 py-0 "><Link style={{textDecoration:"none", color:"white"}} to="/technology" >technology</Link></li>
  </ul>  
  </div>
      <div className="container mt-5">
      <div style={{height:"15px"}} className="mt-5"></div>
      <h3 className={`text-${mode==="dark"?"light":"dark"} mt-5`}>Breaking News at Your Fingertips: Download the QuickNews App and Stay Informed Anytime, Anywhere</h3>
      
      </div>
          </>
  )
}