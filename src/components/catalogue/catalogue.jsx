import React, {useEffect, useState} from 'react'
import productServices from '../../apiServices/productServices';

const pelisData = [{id: 1 , name: "peli1" , img: "algo.jpg"} ,{id: 2 , name: "peli2" , img: "algo.jpg"}, {id: 3 , name: "peli3" , img: "algo.jpg"} ]

function Catalogue() {
  const [pelis, setPelis] = useState([]) 
  
  useEffect(()=>{
    productServices.getAll().then(data=>setPelis(data))
  // setPelis(pelisData)
}, []);

  return (
    <div>{pelis.map(peli=><li>{peli.movieName}</li>)}</div>
  )
}

export default Catalogue