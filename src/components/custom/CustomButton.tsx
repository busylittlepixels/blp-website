import React from 'react'
import './button.css'

const linkToPage = (e) => {
    e.preventDefault(); 
    console.log('clicked');
    return <p>Clicked</p>;
}


export const CustomButton = () => {
    return(
        <div className={`test`}>
            <label className="collection-edit__label">Clear Cache</label>
            <br />
            <small>This is some text to display near the button</small>
            <button className={`btn preview-btn btn--style-secondary btn--icon-style-without-border btn--size-medium btn--icon-position-right `} onClick={(e) => linkToPage(e)}>Clear Cache</button>
        </div>
    )
}

export default CustomButton