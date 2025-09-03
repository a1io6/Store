import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import AdminHeader from './admin-header/AdminHaeder'
import { toast } from 'react-toastify'
function AdminLayout() {
  const admin = JSON.parse(localStorage.getItem("user")) || ["user"]
  const navigate = useNavigate()
  useEffect(()=>{
    if(admin.role !== "admin"){
      navigate("/")
      toast.warn("you do not have access to this data")
    }else{
      // navigate("/admin")
    }
  },[admin])
  
  return (
    <div>
      <AdminHeader/>
      <Outlet/>
    </div>
  )
}

export default AdminLayout
