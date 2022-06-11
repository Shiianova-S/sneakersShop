import React, { useRef, useEffect, useState } from 'react';
import { TextField, Box, Container, Button, Typography } from '@mui/material';



function AddProduct(props) {
  const [img, setImg ] = useState(null);
  const [photo, setPhoto ] = useState(null);

  const inputName = useRef()
  const inputPrice = useRef()
  const inputGender = useRef()
  const inputPhoto = useRef()
  const inputDescription = useRef()

  const input35 = useRef()
  const input36 = useRef()
  const input37 = useRef()
  const input38 = useRef()
  const input39 = useRef()
  const input40 = useRef()
  const input41 = useRef()
  const input42 = useRef()
  const input43 = useRef()

  const sendFile = React.useCallback(async (event) => {
      try {
      const data = new FormData();
      data.append('productPhoto', img);

      fetch('/addProduct/photo', {
        method: 'POST',
        body: data,
    })
    .then(res => res.json())
    .then(res => setPhoto(res.data.path))
    .catch(error => console.log(error));

    } catch (error) {
      
    }
  }, [img]);

  function addNewProduct(event) {

    const newProduct = {
      name: inputName.current.value,
      price: inputPrice.current.value,
      photo: inputPhoto.current.value,
      gender: inputGender.current.value,
      description: inputDescription.current.value,
    }

    const sizes = [
     {35:input35.current.value},
     {36:input36.current.value},
     {37:input37.current.value},
     {38:input38.current.value},
     {39:input39.current.value},
     {40:input40.current.value},
     {41:input41.current.value},
     {42:input42.current.value} ,
     {43:input43.current.value},
    ]
  

    
    fetch('/addProduct/',
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ newProduct, sizes }),
    })
      .then(res => res.json())
      .catch(error => console.log(error));
  }

  
  return (
    <div>
      <Container style={{marginTop: '150px'}}>
    <Typography variant='h6' style={{marginBottom: '30px'}}>
    Создать новый товар:
    </Typography>
<Box

      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
    
      <form style={{display: 'flex', flexDirection: 'column', alignItems: 'start'}}>
      <TextField inputRef={inputName} style={{ minWidth: '500px', maxWidth: '700px'}}
      id="outlined-textarea"
      label="Имя"
      multiline
      />

      <TextField inputRef={inputPrice} style={{ minWidth: '500px', maxWidth: '700px'}}
      id="outlined-number"  
      label="Цена"
      type="number"
      InputLabelProps={{
        shrink: true,
      }}
      />

       <TextField inputRef={inputPhoto} onChange={ e => setImg(e.target.files[0])} style={{ minWidth: '500px', maxWidth: '700px'}}
          id="outlined-number"
          type="file"
          defaultValue={photo}
        />

<Button onClick={() => {sendFile()}} style={{marginLeft: '10px', marginTop: '10px'}}  color="inherit" variant="outlined">Одобрить фото</Button>


<TextField inputRef={inputGender} style={{ minWidth: '500px', maxWidth: '700px'}}
      id="outlined-textarea"
      label="Пол"
      multiline
      />
      
      <TextField inputRef={inputDescription} style={{ minWidth: '500px', maxWidth: '700px'}}
          id="outlined-multiline-static"
          label="Описание"
          multiline
          rows={4}
        />

      <Typography variant='h6' style={{marginBottom: '30px'}}>
         Задайтe количество доступных пар обуви для каждого из размеров:
      </Typography>

      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap'}}>
      <TextField inputRef={input35} style={{ minWidth: '100px', maxWidth: '150px'}}
      id="outlined-number"  
      label="35"
      type="number"
      defaultValue="0"
      InputLabelProps={{
        shrink: true,
      }}
      InputProps={{ inputProps: { min: 0} }}
      />
      <TextField inputRef={input36} style={{ minWidth: '100px', maxWidth: '150px'}}
      id="outlined-number"  
      label="36"
      type="number"
      defaultValue="0"
      InputLabelProps={{
        shrink: true,
      }}
      InputProps={{ inputProps: { min: 0} }}
      />
       <TextField inputRef={input37} style={{ minWidth: '100px', maxWidth: '150px'}}
      id="outlined-number"  
      label="37"
      type="number"
      defaultValue="0"
      InputLabelProps={{
        shrink: true,
      }}
      InputProps={{ inputProps: { min: 0} }}
      />
       <TextField inputRef={input38} style={{ minWidth: '100px', maxWidth: '150px'}}
      id="outlined-number"  
      label="38"
      type="number"
      defaultValue="0"
      InputLabelProps={{
        shrink: true,
      }}
      InputProps={{ inputProps: { min: 0} }}
      />
      <TextField inputRef={input39} style={{ minWidth: '100px', maxWidth: '150px'}}
      id="outlined-number"  
      label="39"
      type="number"
      defaultValue="0"
      InputLabelProps={{
        shrink: true,
      }}
      InputProps={{ inputProps: { min: 0} }}
      />
       <TextField inputRef={input40} style={{ minWidth: '100px', maxWidth: '150px'}}
      id="outlined-number"  
      label="40"
      type="number"
      defaultValue="0"
      InputLabelProps={{
        shrink: true,
      }}
      InputProps={{ inputProps: { min: 0} }}
      />
      <TextField inputRef={input41} style={{ minWidth: '100px', maxWidth: '150px'}}
      id="outlined-number"  
      label="41"
      type="number"
      defaultValue="0"
      InputLabelProps={{
        shrink: true,
      }}
      InputProps={{ inputProps: { min: 0} }}
      />
       <TextField inputRef={input42} style={{ minWidth: '100px', maxWidth: '150px'}}
      id="outlined-number"  
      label="42"
      type="number"
      defaultValue="0"
      InputLabelProps={{
        shrink: true,
      }}
      InputProps={{ inputProps: { min: 0} }}
      />
      <TextField inputRef={input43} style={{ minWidth: '100px', maxWidth: '150px'}}
      id="outlined-number"  
      label="43"
      type="number"
      defaultValue="0"
      InputLabelProps={{
        shrink: true,
      }}
      InputProps={{ inputProps: { min: 0} }}
      />
      </div>

      <Button onClick={() => {addNewProduct()}} style={{marginLeft: '10px', marginTop: '10px'}}  color="inherit" variant="outlined">Создать</Button>
      </form>
</Box>
</Container>

    </div>
  );
}

export default AddProduct;
