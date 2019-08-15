import React from 'react';

const HumbergerButton =props=>(
    <button className="HumbergerButton" onClick={props.click}>
       <div className ="HumbergerButton__line" />
       <div className ="HumbergerButton__line" />
       <div className ="HumbergerButton__line" />
    </button>

);
export default HumbergerButton;