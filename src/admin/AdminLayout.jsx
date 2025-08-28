import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminHeader from './admin-header/AdminHaeder'
function AdminLayout() {
  return (
    <div>
      <AdminHeader/>
      <Outlet/>
    </div>
  )
}

export default AdminLayout
