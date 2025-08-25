import React from 'react'
import './case.css'
import case1 from '../../assets/case1.png'

function Case() {
  return (
    <div className='case'>
            {/* <h3>чехлы</h3> */}
        <div className="case-all">
            <div className="case-one">
                <img src={case1} alt="" />
                <h3>Стеклянные</h3>
            </div>
            <div className="case-one">
                <img src={case1} alt="" />
                <h3>Стеклянные</h3>
            </div>
            <div className="case-one">
                <img src={case1} alt="" />
                <h3>Стеклянные</h3>
            </div>
        </div>
      
    </div>
  )
}

export default Case
