import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  },
  name: {
    color: 'black',
    fontSize: '14px',
  }
}));

function ImageAvatars(props) {
  const classes = useStyles();

  return ( 
    <div className={ classes.root }>
      <Avatar alt={ props.alt } src={ props.image }/>
      <p className={ classes.name }>Nombre</p>
    </div>
  );
}

ImageAvatars.defaultProps = {
  alt: '',
  image:'',
}

export default ImageAvatars