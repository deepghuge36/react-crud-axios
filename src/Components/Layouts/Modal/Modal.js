import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useHistory, Link } from 'react-router-dom'
// import Users from '../../Pages/User/User';
import axios from 'axios';


const ModalExample = (props) => {
  let history = useHistory()

  const { id, first_name, last_name, deleteUser } = props

  console.log(id)
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal, () => {
    history.push('/')
  });

  const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={toggle}>&times;</button>;

  return (
    <div>
      <Button color="danger" onClick={toggle}>Delete</Button>
      <Modal isOpen={modal} toggle={toggle} external={externalCloseBtn}>
        <ModalHeader></ModalHeader>
        <ModalBody>
          <b>Are you Sure to Delete</b><br />
          {`${first_name}`.toUpperCase()}
&nbsp;
          {`${last_name}`.toUpperCase()}
        </ModalBody>
        <ModalFooter className='d-flex' >
          <Link className="btn btn-danger" onClick={() => { deleteUser(id); toggle(); }} to
            ='/'>Delete</Link>{' '}
          <Button color="light" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div >
  );
}

export default ModalExample;