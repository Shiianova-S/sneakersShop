import React from 'react';
import { Paper, Container, FormControl, Typography, Box, Input, TextField } from '@mui/material';
import { IMaskInput } from 'react-imask';
import PropTypes from 'prop-types';
import InstagramIcon from '@mui/icons-material/Instagram';

const ariaLabel = { 'aria-label': 'description' };

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="+7(#00) 000-0000"
      definitions={{
        '#': /[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

TextMaskCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

function ConnectionForm(props) {


  const [values, setValues] = React.useState({
    textmask: '()',
    numberformat: '1320',
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
<Box  style={{display: 'flex',flexDirection: 'column', justifyContent:"center", maxWidth: '700px',}}>
  <Typography pb={3} variant='h5' color="textSecondary">
    Для связи
  </Typography>
  <Input   placeholder="Имя" inputProps={ariaLabel} />
  {/* {console.log(ariaLabel)} */}
  <br />
  <FormControl  variant="standard">
        {/* <InputLabel htmlFor="formatted-text-mask-input">react-imask</InputLabel> */}
        <Input
          value={values.textmask}
          onChange={handleChange}
          name="textmask"
          id="formatted-text-mask-input"
          placeholder="Телефон"
          inputComponent={TextMaskCustom}
        />
      </FormControl>
      <br />
  <Input  placeholder="E-mail" inputProps={ariaLabel} />
  <br />
  <TextField style={{ }}
          id="outlined-multiline-static"
          // label="Multiline"
          multiline
          rows={3}
          placeholder="Сообщение"
          // defaultValue="Default Value"
        />
            <Box>
    <Typography align="rigth" color="textSecondary" style={{display: 'flex',flexDirection: 'column', justifyContent:"space-between",  minWidth: '300px', maxWidth: '600px', marginLeft: '50px', paddingTop: '60px'}}>
        При заказе от 3000 руб. доставка Почтой или СДЭК в города России бесплатно!*
        <br />
        <br />
        При заказе до 3000 руб. доставка по России 299 руб. *
        <br />
        <br />
        *Доставка в отдалённые регионы оговаривается отдельно
        </Typography>
    </Box>
  </Box>
  </div>
  );
}

export default ConnectionForm;
