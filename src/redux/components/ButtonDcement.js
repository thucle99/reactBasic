import React from 'react';
const ButtonDcement = () =>{
    return (
        <>
           <button>{props.children}</button>
        </>
    )
}
export default React.memo(ButtonDcement);