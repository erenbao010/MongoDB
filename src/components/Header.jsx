import React from 'react';

// Đây là một component Header đơn giản
function Header() {
  return (
    <header className='container mx-auto p-6'>
    <div className='flex flex-row items-center justify-between'>
        <div className='text-left text-green-900 bg-black bg-orange-300 '>
            <h2>Logo</h2>
        </div>
        <div className=''>
        </div>
            Menu
        <div className=''>
            More 
        </div>
    </div>
    </header>
  );
}

export default Header;