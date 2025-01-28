import React, { useState, useEffect } from "react";

function TextChanger( { texts, interval }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentText, setCurrentText] = useState(texts[0])

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length)
      setCurrentText(texts[(currentIndex + 1) % texts.length])
    }, interval)

    return () => clearInterval(timerId)
  }, [texts, interval, currentIndex])

  return <div>{currentText}</div>
}
export default TextChanger