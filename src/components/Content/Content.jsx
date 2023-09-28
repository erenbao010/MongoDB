import styled from "styled-components"
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import listItems from "@assets/listIMG/file.json";
import { data } from "autoprefixer";
const ContentStyled = styled.div`
    
`
// const listItems = numbers.map((index) =>

const Content =() => {
  const sortJSON =((arr, key, asc = true)=> {
    return( arr.sort((a, b) => {
      let x = a[key];
      let y = b[key];
      if (asc) {
        return x < y ? -1 : x > y ? 1 : 0;
      } else {
        return x > y ? -1 : x < y ? 1 : 0;
      }
      
    })
    );
  });
  
  // Sort the JSON array by the "index" key in descending order
  const sortedArray = sortJSON(listItems, "index", true);   
  console.log(sortedArray);
  const [nameUser,setName] = useState([])
   useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users?_sort=views&_order=asc')
    .then(res => {
  console.log(res.data)
      setName(res.data)
    })
    .catch(function (error) {
      console.log(error);
      
  }) 
},[])
  const imgs = listItems;

  return (
    
    <ContentStyled className='grid grid-cols-3 gap-5 mb-5 maxx-w-7xl mx-auto h-auto'>
        
        <p>{nameUser.name}</p> 

            {/* <img className="w-f.ull h-96"  src={ImgTravel} alt="" /> */}
        
         { imgs.map((item, index)=> {
          console.log(item);
return(
  <ul className="h-full">
          <li className="list-none w-full h-96" key={item.index}> <img className="w-auto h-full" src={item.img} alt="" /> </li>
          </ul>)
         })}
         
    </ContentStyled>
  );
}




export default Content;

