import * as React from 'react';
import { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Paper from '@mui/material/Paper'
import { makeStyles } from "@mui/styles"
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { deleteProductAC } from '../../redux/actionCreators/productsAC'


const useStyles = makeStyles({
  photoSize: {
    maxHeight: '140px',
  },
});

export default function ActionAreaCard({product}) {

  const [prodStatus, setProdStatus] = useState(product.status);  


  const classes = useStyles();
  const navigate =useNavigate();

  const dispatch = useDispatch();

  const fetchDeleteProduct = () => {
    fetch(`/products/${product.id}`, {
      method: 'PUT'
    })
      .then(res => res.json())
      .then(data => dispatch(deleteProductAC(data)))
      .catch(err => console.log(err));
  }

  const handleClick = () => {
    navigate(`/products/edit/${product.id}`)
  };

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  return (
    <Card  sx={{ maxWidth: 1200, maxHeight: 1000}}>
      <CardActionArea>
      <Paper variant="outlined">
        <img className={classes.photoSize} src={product.photo} />
      </Paper>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}  
          </Typography>
            {prodStatus==='deleted'? <Typography sx={{color: 'red'}}>
              {prodStatus}
            </Typography>
            :
            <Typography sx={{color: 'green'}}>
              {prodStatus}
            </Typography>
          }  
        </CardContent>
        <Stack direction="row" spacing={1}>
      <div style={{display: 'flex', flexDirection: 'column', paddingLeft:'50px'}}>
      <Chip
        spacing={5}
        style={{marginTop: '5px', marginBottom: '5px'}}
        label="РЕДАКТИРОВАТЬ"
        onClick={handleClick}
        deleteIcon={<DoneIcon />}
      />
      <Chip 
        style={{marginTop: '5px', marginBottom: '5px'}} 
        label="ИЗМЕНИТЬ СТАТУС"
        onClick={() => {
          fetchDeleteProduct();
          if(prodStatus === 'deleted') {
            setProdStatus('active')
          } else {
            setProdStatus('deleted')
          }
        }}
        deleteIcon={<DeleteIcon />}
        variant="outlined"
      />
      </div>
    </Stack>
      </CardActionArea>
    </Card>
  );
}
