import React from 'react'
import Common from './Common';
import web from '../images/logo1.png';



function About() {

  return (
    <>
    <Common name= "Welcome to About Page" imgSrc = {web} visit= "/contact" btnName= "Contact Now"/>
    </>
  )
}

export default About;