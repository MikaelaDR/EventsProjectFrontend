import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';

function MessageAlert(props) {
  return (
    <>
        <Alert variant ={props.variant} >
        {
          props.variant=="success" ?
          (<img
            style={{width:'2.5vh', marginRight:'2vh'}}
            src="./images/icons/checkmark_icon.png"
            alt="Green checkmark"/>)
             
          :(<img
              style={{width:'2.5vh', marginRight:'2vh'}}
              src="./images/icons/x_icon.png"
              alt="Red checkmark"
          />)
        }
        
          <span>{props.message}</span>
        </Alert>
    </>
  );
}

export default MessageAlert;