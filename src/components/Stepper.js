import React from 'react';
// TODO: import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'Tuto1',
    icon: '',
    info:'Escoge una aventura del carroussel que se adapte a tus preferencias de viaje.',
    instruction:'Desliza hacia la izquierda.',
  },
  {
    label: 'Tuto2',
    icon: '',
    info:'Escoge una aventura del carroussel que se adapte a tus preferencias de viaje.',
    instruction:'Desliza hacia la izquierda.',
  },
  {
    label: 'Tuto3',
    icon: '',
    info:'Escoge una aventura del carroussel que se adapte a tus preferencias de viaje.',
    instruction:'Desliza hacia la izquierda.',
  },
  {
    label: 'Tuto4',
    icon: '',
    info:'Escoge una aventura del carroussel que se adapte a tus preferencias de viaje.',
    instruction:'Desliza hacia la izquierda.',
  }
];

/* TODO:
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 255,
    display: 'block',
    overflow: 'hidden',
    width: '100%',
  },
}));
*/

function SwipeableTextMobileStepper() {
  // TODO:const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  // TODO: const maxSteps = tutorialSteps.length;

  /* TODO:
  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };
  */

  /* TODO:
  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };
  */

  const handleStepChange = step => {
    setActiveStep(step);
  };

  return (
    <div className='Stepper'>
      <Paper square elevation={0} className='StepperHeader'>
        <img className='closeModalIcon' src={require('../assets/images/close.png')} alt="imagen close"/>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        className='StepperBody'
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents>
        {tutorialSteps.map((step, index) => (
          <div className='StepperBody__Container' key={step.label}>
            <p className='StepperBody__Container--title' >Tutorial</p>
            <img class='StepperBody__Container--icon' src={require('../assets/images/rocket.png')} alt="imagen icon rocket"/>
            {Math.abs(activeStep - index) <= 2 ? (
              <div>
                <Typography className='StepperBody__Container--label'>{step.info}</Typography>
                <Typography className='StepperBody__Container--span'>{step.instruction}</Typography>
              </div>

            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      {
        // Dots
      }
      <MobileStepper
        variant="dots"
        steps={4}
        position="static"
        activeStep={activeStep}
        className='StepperFooter'
      />
    </div>
  );
}


export default SwipeableTextMobileStepper;
