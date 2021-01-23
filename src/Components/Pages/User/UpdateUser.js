import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom'
import { Col, Button, Row, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios'

const UpdateUser = (props) => {
  let history = useHistory()
  const { id } = useParams()

  const [user, setUser] = useState({
    first_name: '',
    last_name: '',
    email: '',
    states: '',
    city: '',
    pincode: '',
  })
  const { first_name, last_name, email, states, city, pincode } = user


  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value })
    console.log(setUser)
  }

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/users/${id}`, user)
    // await axios.put('https://c0ri699qs5.execute-api.us-east-1.amazonaws.com/v1/add', user)
    console.log(user)
    history.push('/');
  }
  const loadUser = async () => {
    const response = await axios.get(`http://localhost:8080/users/${id}`)
    console.log(response.data)
    setUser(response.data)
  }

  useEffect(() => {
    loadUser()
  }, [])



  return (
    <Form className='container' onSubmit={e => onSubmit(e)}>
      <Row form>
        <Col md={4}>
          <FormGroup>
            <Label for="fname">First Name</Label>
            <Input type="text"
              name="first_name" value={first_name} id="first_name" onChange={e => onInputChange(e)} placeholder="First Name" required />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="lname">Last Name</Label>
            <Input type="text" name="last_name" value={last_name} id="lname" onChange={e => onInputChange(e)} placeholder="Last Name" required />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" name="email" value={email} id="email" onChange={e => onInputChange(e)} placeholder="Email Address" required disabled />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={4}>
          <FormGroup>
            <Label for="state">State</Label>
            <Input type="select" name="states" value={states} id="state" onChange={e => onInputChange(e)} required>
              <option></option>
              <option>Goa</option>
              <option>Maharastra</option>
              <option>Punjab</option>
              <option>Kerla</option>
            </Input>
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="city">City</Label>
            <Input type="text" name="city" value={city} id="city" onChange={e => onInputChange(e)} required />
          </FormGroup>
        </Col>

        <Col md={4}>
          <FormGroup>
            <Label for="pincode">Pin Code</Label>
            <Input type="text" name="pincode" value={pincode} id="pincode" onChange={e => onInputChange(e)} required min="1" max="5" maxLength='5' />
          </FormGroup>
        </Col>
      </Row >
      <Button className='btn btn-primary mr-2'>Update</Button>
      <Link className="btn btn-danger" to='/'>Cancel</Link>
    </Form >
  );
}

export default UpdateUser;