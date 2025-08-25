import React from 'react'
import './headphones.css'
import { CiHeart } from "react-icons/ci";
import nnnn from '../../assets/nnnn.png'

function Headphones() {
  return (
    <div className='headphones'>
        <div className="headphones-all">
            <div className="headphones-blok1">
                <div className="blok1">
                       <div className='blok1-icon'><CiHeart /></div> 
                        <img src={nnnn} alt="" />
                        <div>
                            <div><h2>Apple BYZ S852I</h2></div>
                            <div>
                                <h3>2927 ₸</h3>
                                <h4>3527 ₸</h4>
                            </div>
                        </div>
                        <div className='reiting'>
                            <p>⭐ 4.5</p>

                        </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Headphones
