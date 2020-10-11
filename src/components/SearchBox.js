import React from 'react';

const SearchBox=({searchfield, searchChange})=>{
    return(
        <div className='pa2'>
            <input className='clr-red pa3 ba b--green bg-animate bg-white hover-bg-blue' type='search' placeholder='search robots' onChange={searchChange}/>
        </div>
    )
}
export default SearchBox;