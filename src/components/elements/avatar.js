import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    '& > *': {
      width: theme.spacing(5),
      height: theme.spacing(5),
    },
  },
  name: {
    color: 'black',
    fontSize: '14px',
    textAlign: 'center',
  }
}));

function ImageAvatars(props) {
  const classes = useStyles();

  return (
    <div className={ classes.root }>
      <Avatar alt={ props.alt } src={ props.image }/>
      { props.showName ? <p className={ classes.name }>Nombre</p> : null }
    </div>
  );
}

ImageAvatars.defaultProps = {
  alt: '',
  image:'',
  showName: false,
}

export default ImageAvatars
