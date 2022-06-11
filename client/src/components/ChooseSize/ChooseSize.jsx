import React, { useState } from 'react';
import {Button } from "@material-ui/core";


function ChooseSize({size, count, setSize}) {

  const [color, setColor] = useState('black');

  

  const chooseSize = (event) => {
    setColor('green');
    event.preventDefault();
    const btn = event.target.closest('button');
    setSize(btn.textContent);
  }

  return (
    <>
    {(+count > 0) && <Button onClick={chooseSize} style={{color: `${color}`, padding: '0px'}} variant="outlined" >{size}</Button>}
   </>

  );
}

export default ChooseSize;
