import React from 'react'
import { NavLink } from 'react-router-dom';

function Card(props) {
  return (
    <>
              <div className="col-md-4 col-12 mx-auto">
                <div className="card">
                  <img className="card-img-top" src={props.imgSrc} alt="Card-img"/>
                    <div className="card-body">
                      <h5 className="card-title font-weight-bold">{props.title}</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <NavLink to="" className="btn-get-started ">Go somewhere</NavLink>
                    </div>
                </div>
              </div>
    </>
  )
}

export default Card;














// import React from "react";
// import '../index.css';
// function Card(props) {
//   return (
//     <>
//     <div className='cards mb-5 mt-5'>
//     <div className='card'>
//         <img src={props.imgsrc} alt="myPic" className='card__img' />
//         <div className='card__info'>
//             <span className='card__category'>{props.title}</span>
//             <h3 className='card__title'>{props.name}</h3>
//             <a href={props.link} >
//                 Watch Now
//             </a>
//         </div>
//     </div>
//    </div>
   
//     </>
//   );
// }
// export default Card;

                    
                    
// {
//   Sdata.map((item, index) => {
//       return <Card key={index} imgsrc={item.imgsrc} title={item.title} name={item.name} link={item.link} />
//   }
//   )}