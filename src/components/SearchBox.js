import React from 'react';

const SearchBox = ({searchChange}) => {

    return(
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <form className='tc' onSubmit={searchChange}>
            <input 
            className='ba3 pa2 b--white'
            name='city'
            type='search'
            placeholder='Search city...'
            />
            <button className='ba3 pa2 ma2 b--white'><i className="fa fa-search"></i></button>
        </form>
        </div>
        
    );
}
export default SearchBox;