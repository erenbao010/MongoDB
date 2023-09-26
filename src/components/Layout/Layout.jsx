import React from 'react';
import Header from '../Header.jsx';
import About from '../../pages/About.jsx';
import Error from '../../pages/Error404.jsx';
import styled from "styled-components"
import SideBar from '../Sidebar/Sidebar.jsx';
import Content from '../Content/Content.jsx';
const LayoutStyled = styled.div`
  
`

const PrimaryLayout = () => {
  return (
    <LayoutStyled className="container mx-auto p-20 bg-green-lime ">
      <div className="container mx-auto p-6 bg-white px-6 ">
        
      <SideBar/>
      <Header/>
      <Content/>
      <About/>
      <Error/>
      </div>
      
    </LayoutStyled>
  );
}

export default PrimaryLayout;