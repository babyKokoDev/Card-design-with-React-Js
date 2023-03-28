import React from 'react'
import image1 from '../images/gallery_1.jpg'
import image2 from '../images/gallery_2.jpg'
import image3 from '../images/gallery_3.jpg'
import image4 from '../images/gallery_4.jpg'

const CountryCard = () => {
  return (
    <>
    <div className="container mt-3">
        <div className="row g-3">
            <div className="col-md-3">
               <div className="card shadow">
                   <img src={image1} alt="" />
                   <div className="card-body">
                     <h3>Paris</h3>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, assumenda quis! Repellendus officiis neque architecto harum quas maxime odio cum</p>
                     <button className='btn btn-dark btn-sm'>Read More</button>
                   </div>
               </div>
            </div>
            <div className="col-md-3">
               <div className="card shadow">
                   <img src={image2} alt="" />
                   <div className="card-body">
                     <h3>France</h3>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, assumenda quis! Repellendus officiis neque architecto harum quas maxime odio cum</p>
                     <button className='btn btn-dark btn-sm'>Read More</button>
                   </div>
               </div>
            </div>
            <div className="col-md-3">
               <div className="card shadow">
                   <img src={image3} alt="" />
                   <div className="card-body">
                     <h3>Italy</h3>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, assumenda quis! Repellendus officiis neque architecto harum quas maxime odio cum</p>
                     <button className='btn btn-dark btn-sm'>Read More</button>
                   </div>
               </div>
            </div>
            <div className="col-md-3">
               <div className="card shadow">
                   <img src={image4} alt="" />
                   <div className="card-body">
                     <h3>Poland</h3>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, assumenda quis! Repellendus officiis neque architecto harum quas maxime odio cum</p>
                     <button className='btn btn-dark btn-sm'>Read More</button>
                   </div>
               </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default CountryCard