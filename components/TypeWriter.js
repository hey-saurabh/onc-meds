import React from 'react'
import Typewriter from "typewriter-effect";

const Type = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Indian Medicinal Plants",
          "Ayurvedic Medical Solutions",
          "Unani Medications",
          "FDA Approved Drugs"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 70,
      }}
    />
  )
}

export default Type