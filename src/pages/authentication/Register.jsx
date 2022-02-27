import {Typography, Button, Box} from '@material-ui/core';
import FacebookIcon from '@mui/icons-material/Facebook';
import React from 'react';
import {makeStyles} from '@mui/styles';

const useStyle = makeStyles({
  boxes: {
    width: '100%',
    padding: '0 24px 24px 24px ',
    display: 'flex',
    justifyContent: 'center',
  },
});

function Register() {
  const classes = useStyle();

  return (
    <>
      <Typography variant='h2'>
        <Box
          sx={{
            fontSize: 24,
            textAlign: 'center',
          }}
          className={classes.boxes}
        >
          Đăng ký để xem ảnh và video từ bạn bè.
        </Box>
      </Typography>
      <Box className={classes.boxes}>
        <Button
          variant='contained'
          color='primary'
          startIcon={<FacebookIcon />}
        >
          Đăng nhập bằng Facebook
        </Button>
      </Box>
      <Box className={classes.boxes}>
        <Typography variant="span" >Hoặc</Typography>
      </Box>
    </>
  );
}

export default Register;
