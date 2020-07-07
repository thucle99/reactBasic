import React from 'react';
const ButtonIncrement = () =>{
    return (
        <>
           <button>{props.children}</button>
        </>
    )
}
export default React.memo( ButtonIncrement);