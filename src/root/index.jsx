import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { navbar } from "../utils/navbar";
import Navbar from '../components/Navbar'
import { RecoilRoot } from 'recoil';
export const Root = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route element={<Navbar/>}>
            {
            navbar.map(({path, element, id})=>{
              return <Route key={id} path= {path} element={element} />
            })
          }
          <Route path= '*' element={<h1>404 NOT FOUND.</h1>}/>
          <Route path= '/' element={<Navigate to = {'/main/page'} />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  )
}
export default Root