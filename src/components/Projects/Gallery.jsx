import React from "react"
import "./Gallery.css"
import ProjectCard from "./ProjectCard"

const Gallery = (projectCards) => {
  function f(k) {
    if(Math.abs(k) > .5)
      scrollTo(0, .5*(k - Math.sign(k) + 1)*(document.documentElement.offsetHeight - window.innerHeight))
  }
  f(-1);
  addEventListener('scroll', e => f(+getComputedStyle(document.body).getPropertyValue('--k')))

  return (
    <div>
      {projectCards.map((card, index) => {
        <div id={index}>{card}</div>
      })}
    </div>
  )
}

export default Gallery