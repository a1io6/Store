import React from 'react'
import './header.css'
import { MdPhoneIphone } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";




function Header() {
  return (
    <div className="header">

   
    <div className="header-all">
  <div className="header-left">
    <div className="header-logo">
      <h1>QPICK</h1>
    </div>
    <div className="header-iphone">
      <div className="header-img"> <MdPhoneIphone /></div>
      <div className="select">
        <select>
          <option>Выбрать модель телефона</option>
          <option>iphone</option>
          <option>samsung</option>
          <option>nokia</option>
        </select>
      </div>
    </div>
  </div>

  <div className="haeder-icons">
    <CiHeart />
    <IoCartOutline />
  </div>
</div>
 </div>

  )
}

export default Header
