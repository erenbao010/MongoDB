import React, { useState } from 'react';
import { styled } from 'styled-components';

const CounterNumber = styled.div`
  
`

// Đây là một component Header đơn giản
function Header() {
  const [count, setCount ] = useState(1);
  return (
    <header className='container mx-auto p-6'>
    <div className='flex flex-col'>
      <CounterNumber count = {count} />
      <button onClick={() => setCount((count))}>CLick to count {count} </button>
      <button onClick={() => setCount((count-1))}> <span>Click plus </span> </button>
      <button onClick={() => setCount((count+1))}> <span>Click minus </span> </button>
      {console.log(count)}
       <p className='text-5xl text-center '>Live anywhere</p>
       <p className='text-xl font-extralight text-center'>Keep Calm & travel on</p>
       

    </div>
    </header>
  );
}

export default Header;