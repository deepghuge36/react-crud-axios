import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { Col, Button, Row, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios'

const AddUser = (props) => {
  let history = useHistory()
  const [user, setUser] = useState({
    first_name: '',
    last_name: '',
    email: '',
    states: '',
    city: '',
    pincode: '',
  })
  // const { first_name, last_name, email, states, city, pincode } = user

  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value })
    console.log(setUser)
  }

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post('http://localhost:8080/users', user)
    // await axios.post('https://c0ri699qs5.execute-api.us-east-1.amazonaws.com/v1/add', user)
    console.log(user)
    history.push('/');
  }

  return (
    <Form className='container' onSubmit={e => onSubmit(e)}>
      <Row form>
        <Col md={4}>
          <FormGroup>
            <Label for="fname">First Name</Label>
            <Input type="text" name="first_name" id="first_name" onChange={e => onInputChange(e)} placeholder="First Name" required autoCapitalize="on" />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="lname">Last Name</Label>
            <Input type="text" name="last_name" id="lname" onChange={e => onInputChange(e)} placeholder="Last Name" required autoCapitalize="on" />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" name="email" id="email" onChange={e => onInputChange(e)} placeholder="Email Address" required />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={4}>
          <FormGroup>
            <Label for="state">State</Label>
            <Input type="select" name="states" id="state" onChange={e => onInputChange(e)} required>
              <option></option>
              <option>Goa</option>
              <option>Maharastra</option>
              <option>Gujrat</option>
              <option>Delhi</option>
            </Input>
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="city">City</Label>
            <Input type="text" name="city" id="city" onChange={e => onInputChange(e)} required />
          </FormGroup>
        </Col>

        <Col md={4}>
          <FormGroup>
            <Label for="pincode">Pin Code</Label>
            <Input type="text" name="pincode" id="pincode" required min="5" max="5" minLength="5" maxLength="5"
              pattern="[+-]?\d+(?:[.,]\d+)?"
              onChange={e => onInputChange(e)}
            />
          </FormGroup>
        </Col>
      </Row >
      <Button className='btn btn-primary mr-2' to='/adduser' onSubmit={e => onSubmit(e)} type='submit'>Add</Button>
      <Link className="btn btn-danger" to='/'>Cancel</Link>
    </Form >
  );
}

export default AddUser;