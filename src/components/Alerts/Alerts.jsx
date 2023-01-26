import React, { useState } from 'react';
// import Alert from 'react-bootstrap/Alert';
// import Button from 'react-bootstrap/Button';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import './Alertss.css'
import CloseIcon from '@mui/icons-material/Close';
const Alerts = () => {
  const [open, setOpen] = React.useState(true);
  return (
    <Box style={{ overflowX: 'hidden' }}>
      <Collapse in={open} style={{ overflowX: 'hidden' }}>
        <Alert
         className='alsiod'
          severity="info"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          <div style={{ textAlign: 'center', fontSize: '13px' }}>
            TO BECOME A CONTRIBUTOR TODAY!{' '}
            <a
              href="https://vestarplus.com"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: 'none' }}
            >
              CLICK TO JOIN🏆!
            </a>{' '}
          </div>
        </Alert>
      </Collapse>
    </Box>
  );
};

export default Alerts;
