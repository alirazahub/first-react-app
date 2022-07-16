import React from 'react'
import Card from './Card';
import Sdata from './Sdata';

function Services() {
  return (
    <div className='container'>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid mg-5">
        <div className="row">
          <div className="col-12 mx-auto">
            <div className="row ml-4">
              {
                Sdata.map((item, index) => {
                  return <Card key={index} imgSrc={item.imgSrc} title={item.title} />
                }
                )
              }
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Services;