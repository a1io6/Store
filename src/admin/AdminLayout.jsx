import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import AdminHeader from './admin-header/AdminHaeder'
import { toast } from 'react-toastify'
function AdminLayout() {
  const admin = JSON.parse(localStorage.getItem("user")) || ["user"]
  const navigate = useNavigate()
  const location = useLocation();
  // const body = document.querySelector("body")
  useEffect(()=>{
  
    // if(admin.role !== "admin"){
    //   toast.warn("you do not have access to this data")
    //   navigate("/")
    // }else{
    // }
    // if (location.pathname === "/admin"){
    //   body.style.padding = "0"
    // }else{
    //   body.style.padding = "80px"
    // }
  },[admin])
  console.log(admin);
  
  
  return (
    <div>
      <AdminHeader/>
      <Outlet/>
    </div>
  )
}

export default AdminLayout