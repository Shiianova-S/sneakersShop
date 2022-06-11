import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { initCurrentProductCardAC } from '../../redux/actionCreators/productsAC'
import { updateProductCardAC} from '../../redux/actionCreators/productsAC'
import { TextField, Box, Container, Button, Typography, InputLabel } from '@mui/material';


function EditCardForm(props) {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const {currentProduct} = useSelector(state => state.productsReducer)
  console.log(currentProduct);

  const inputName = useRef();
  const inputGender = useRef();
  const inputDescription = useRef();
  const inputPrice = useRef();
  const inputPhoto = useRef();

  const input35 = useRef()
  const input36 = useRef()
  const input37 = useRef()
  const input38 = useRef()
  const input39 = useRef()
  const input40 = useRef()
  const input41 = useRef()
  const input42 = useRef()
  const input43 = useRef()

  const [img, setImg ] = React.useState(null);
  const [photo, setPhoto ] = React.useState(null);


  useEffect(() => {
    const id = Number(params.id);
    fetch(`/products/edit/${id}`, {
      credentials: 'include',
    })
    .then(data => data.json())
    .then(data => {
      if(data.message === 'sucsess') {
        dispatch(initCurrentProductCardAC(data.currentProduct))
      } else if (data.message === 'noCurrent') {
        // console.log('noCurrent');
      } else (console.log(data.error))})
    .catch(error => error.message)
}, [dispatch, params.id]);

  const editProduct = (e) => {
    
    const id = Number(params.id);

    const updatedProduct = {
      name: inputName.current.value,
      gender: inputGender.current.value,
      photo: inputPhoto.current.value,
      description: inputDescription.current.value,
      price: inputPrice.current.value,
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

    fetch(`/products/edit/${id}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({ updatedProduct, sizes }),
    })
      .then(res => res.json())
      .then(data => dispatch(updateProductCardAC(data)))
      .catch(err => console.log(err));
  }


  const sendFile = React.useCallback( async () => {
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
  }, [img])
    
 
  return (
    <>

<button onClick={() => navigate(-1)}>Назад</button>

<Container style={{marginTop: '150px'}}>
    <Typography variant='h6' style={{marginBottom: '30px'}}>
    Редактировать товар:
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

      <InputLabel id="demo-simple-select-label">Имя:</InputLabel>
      <TextField inputRef={inputName} style={{ minWidth: '500px', maxWidth: '700px'}}
      id="outlined-textarea"
      defaultValue={currentProduct.name} 
      multiline
      />
      <InputLabel id="demo-simple-select-label">Цена:</InputLabel>
      <TextField inputRef={inputPrice} style={{ minWidth: '500px', maxWidth: '700px'}}
      id="outlined-number"  
      type="number"
      InputLabelProps={{
        shrink: true,
      }}
      defaultValue={currentProduct.price}
      />

       <TextField inputRef={inputPhoto} onChange={ e => setImg(e.target.files[0])} style={{ minWidth: '500px', maxWidth: '700px'}}
          id="outlined-number"
          type="file"
          defaultValue={photo}
        />

      <Button onClick={() => {sendFile()}} style={{marginLeft: '10px', marginTop: '10px'}}  color="inherit" variant="outlined">Одобрить фото</Button>

      <InputLabel id="demo-simple-select-label">Пол:</InputLabel>
      <TextField inputRef={inputGender} style={{ minWidth: '500px', maxWidth: '700px'}}
      id="outlined-textarea"
      defaultValue={currentProduct.gender}
      multiline
      />
      <InputLabel id="demo-simple-select-label">Описание:</InputLabel>
      <TextField inputRef={inputDescription} style={{ minWidth: '500px', maxWidth: '700px'}}
          id="outlined-multiline-static"
          defaultValue={currentProduct.description}
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
      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
      <Button onClick={() => {editProduct(); navigate(-1)}} style={{marginLeft: '10px', marginTop: '10px'}}  color="inherit" variant="outlined">Завершить редактирование</Button>
      <Button onClick={() => navigate(-1)} style={{marginLeft: '10px', marginTop: '10px'}}  color="inherit" variant="outlined">Назад</Button>
      </div>
      </form>
</Box>
</Container>
   </>
  );
};
export default EditCardForm;
