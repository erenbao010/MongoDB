import React from 'react';
import { styled } from 'styled-components';
const StyledAbout = styled.div`
  
`
// Đây là một component Header đơn giản
function About() {
  return (
        <StyledAbout className=" w-full h-auto">
        <div className='text-left text-green-900  bg-orange-300 '>
            <h2>About</h2>
        </div>
        </StyledAbout>
  );
}

export default About;