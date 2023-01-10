import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
// import Button from 'react-bootstrap/Button';
const Alerts = () => {
  const [show, setShow] = useState(true);
  if (show) {
    return (
      <div >
        <>
          {[ 'primary'].map((variant) => (
            <Alert
              style={{height:'30px',display:'flex',justifyContent:'center',alignItems:'center'}}
              key={variant}
              variant={variant}
              onClose={() => setShow(false)}
              dismissible

            >
              <div style={{ textAlign: 'center',fontSize:'13px' }}>
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
          ))}
        </>
      </div>
    );
  }
};

export default Alerts;
