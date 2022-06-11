import React, { useRef } from 'react';
import { TextField, Box, Rating, Container, Button, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from 'react-router-dom'

const labels = {
  0.5: 0.5,
  1: 1,
  1.5: 1.5,
  2: 2,
  2.5: 2.5,
  3: 3,
  3.5: 3.5,
  4: 4,
  4.5: 4.5,
  5: 5,
};


function AddingReviews(props) {
    const navigate = useNavigate();
    // const [value, onChangeText] = React.useState('Useless Multiline Placeholder');
    const [value, setValue] = React.useState(5);
    const [hover, setHover] = React.useState(-1);


    const rating = value;
    const inputName = useRef();
    const inputText = useRef();

    function addNewComment(event) {
      // event.preventDefault();

      const newComment = {
        rating: rating,
        authorName: inputName.current.value,
        text: inputText.current.value,
      }
  
      console.log(rating);
      console.log(inputName.current.value);
      console.log(inputText.current.value);

      fetch('/reviews',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(newComment),
      })
        .then(res => res.json())
        .catch(error => console.log(error));
        navigate(-1)
    }

  return (

  <Container style={{marginTop: '150px', marginLeft: '150px'}}>
    <Button  variant="outlined" size="small" style={{marginBottom: '50px'}} onClick={()=>{navigate(-1)}}  color="inherit">  Назад</Button>
    <Box
  sx={{
    width: 400,
    display: 'flex',
    alignItems: 'center',
  }}
>
  <Rating
  style={{marginBottom: '10px'}}
    name="hover-feedback"
    value={value}
    precision={0.5}
    onChange={(event, newValue) => {
      setValue(newValue);
    }}
    onChangeActive={(event, newHover) => {
      setHover(newHover);
    }}
    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
  />
  {value !== null && (
    <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
  )}
</Box>
<Box

      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <form style={{display: 'flex', flexDirection: 'column', alignItems: 'start'}}>
      <TextField
      inputRef={inputName}
      id="outlined-textarea"
      // label="Multiline Placeholder"
      placeholder="Имя:"
      multiline
      />
      <TextField style={{ minWidth: '500px', maxWidth: '700px'}}
          inputRef={inputText}
          id="outlined-multiline-static"
          // label="Multiline"
          multiline
          rows={4}
          placeholder="Отзыв:"
          // defaultValue="Default Value"
        />
      <Button onClick={() => addNewComment()} style={{marginLeft: '10px', marginTop: '10px'}}  color="inherit" variant="outlined">Оставить отзыв</Button>
      </form>
</Box>
</Container>
  );
}

export default AddingReviews;
