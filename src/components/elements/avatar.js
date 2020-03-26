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
      cursor: 'pointer',
    },
  },
  name: {
    color: 'black',
    fontSize: '14px',
    textAlign: 'center',
  }
}));

function ImageAvatars(props) {
  const classes = useStyles()
  return (
    <div className={ classes.root } onClick={ props.onClick }>
      <Avatar alt={ props.alt } src={ props.image }/>
      { props.showName ? <p className={ classes.name }> { props.name }</p> : null }
    </div>
  );
}

ImageAvatars.defaultProps = {
  alt: '',
  image: '',
  showName: false,
  'name': '',
  'onClick': null,
}

export default ImageAvatars
