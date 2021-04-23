import React from 'react';

import Button from '@material-ui/core/Button';
import  {CircleButton}  from './SecondaryButton';
import CancelButton from './CancelButton'
import SaveChangesButton from "./SaveChanges"
import { action } from '@storybook/addon-actions';

export default {
  title: 'Material Button',
};

export const Default = () => (
  <Button onClick={action('Default button clicked')} variant="contained">
    Default
  </Button>
);

export const Primary = () => (
  <Button color="primary" onClick={action('Primary button clicked')} variant="contained">
    Primary
  </Button>
);

export const Secondary = () => (
  <Button color="secondary" onClick={action('Secondary button clicked')} variant="contained">
    Secondary
  </Button>
);

export const Second = () => (
  <CircleButton>
    Second
  </CircleButton>
)

export const CancelFirst = () => (
  <CancelButton>
    Cancel
  </CancelButton>
)
export const SaveFirst = () => (
  <SaveChangesButton>
    Save Changes
  </SaveChangesButton>
)
  
