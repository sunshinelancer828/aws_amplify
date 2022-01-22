import React from 'react';
import PropTypes from 'prop-types';
import {Box} from '@mui/material';
import {styled, makeStyles} from '@mui/styles'

const MeetingBox = styled(Box)({
    height: '800px',
    background: 'white',
    paddingBottom: '20px',
    boxShadow: '3px 3px 8px 5px #8f8f9b',
    paddingLeft: '3px',
    paddingTop:'1px',
})

const useStyle = makeStyles(() => ({
    tabs: {
        width: '100% !important',
    },
}));

export default function TabPanel(props) {
  const classes=useStyle()
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`horizontal-tabpanel-${index}`}
      aria-labelledby={`horizontal-tab-${index}`}
      {...other}
      className={classes.tabs}
    >
      {value === index && (
        <MeetingBox >
          {children}
        </MeetingBox>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};