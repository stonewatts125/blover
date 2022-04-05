import React, {useState, useEffect} from 'react'

export default function useData(url) {
    const [slide , setSlide] = useState([])
    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(json => setSlide(json))
    })


  return slide.length
}