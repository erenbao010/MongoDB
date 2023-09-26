import styled from "styled-components"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import listItems from "@assets/listIMG/file.json";
const ContentStyled = styled.div`
    
`
// const listItems = numbers.map((index) =>

const Content =() => {
  const [nameUser,setName] = useState([])
   useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users/1')
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
    
    <ContentStyled className='grid grid-cols-3 gap-5 mb-5 maxx-w-7xl mx-auto h-96'>
       {  <p>{nameUser.name}</p> }
            {/* <img className="w-f.ull h-96"  src={ImgTravel} alt="" /> */}
        
         { imgs.map((item, index)=> {
          console.log(item);
return(
  <ul>
          <li className="list-none w-full h-full" key={item.index}> <img className="w-auto h-full" src={item.img} alt="" /> </li>
          </ul>)
         })}
         
    </ContentStyled>
  );
}

export default Content;

