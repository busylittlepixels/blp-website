import React from 'react'


const linkToPage = (e) => {
    e.preventDefault(); 
    console.log('test-button clicked');
    return "Clicked";
}


export const CustomButton = () => {
    return(
        <div className={`form-submit`}>
        <button className={`p-4 bg-blue-200`} onClick={(e) => linkToPage(e)}>Test Button</button>
        </div>
    )
}

export default CustomButton