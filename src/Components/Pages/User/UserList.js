import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Input } from 'reactstrap'

import ModalExample from '../../Layouts/Modal/Modal'
// import Search from './Search'
import './User'
export default function UserList() {
  const [users, setUsers] = useState([])
  const [search, setSearch] = useState('')


  useEffect(() => {
    loadData();
  }, [])

  const loadData = async () => {
    const resonpse = await axios.get('http://localhost:8080/users')
    // const resonpse = await axios.get('https://j5ej5u32gg.execute-api.us-east-1.amazonaws.com/v1/fetch')
    console.log(resonpse)
    setUsers(resonpse.data)
  }

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/users/${id}`)
    loadData()
  }


  return (
    <div div >
      <div className="container">
        <div className="py-4 add_user">
          <div className="d-flex justify-content-between ">
            <Link to="/adduser"> <h3><i className="fa fa-plus search"> Add User</i></h3></Link>

            <Input className='w-25' type='text' placeholder="Search" onChange={e => {
              setSearch(e.target.value);
            }} />
          </div>

          <table className="table border shadow">

            <thead className="thead-dark thead-color">
              <tr>
                <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">State</th>
                <th scope="col">City</th>
                <th scope="col">Pincode</th>
                <th scope="col">Action</th>
              </tr>
            </thead>

            {users.filter((val) => {
              if (search == "") {
                return val
              } else if (
                val.first_name.toLowerCase().includes(search.toLowerCase())) {
                return val
              } else if (
                val.last_name.toLowerCase().includes(search.toLowerCase())) {
                return val
              } else if (
                val.email.toLowerCase().includes(search.toLowerCase())) {
                return val
              } else if (
                val.city.toLowerCase().includes(search.toLowerCase())) {
                return val
              } else if (
                val.states.toLowerCase().includes(search.toLowerCase())) {
                return val
              } else if (
                val.pincode.toLowerCase().includes(search.toLowerCase())) {
                return val
              }
            }).map((user, index) => {
              return (

                <tbody>
                  <tr key={user.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>{user.email}</td>
                    <td>{user.states}</td>
                    <td>{user.city}</td>
                    <td>{user.pincode}</td>
                    <td className="d-flex justify-content-center">
                      <Link
                        className="btn btn-primary mr-2 "
                        to={`/updateuser/${user.id}`}
                      >
                        Edit
                  </Link>
                      <ModalExample first_name={user.first_name} last_name={user.last_name} id={user.id} deleteUser={deleteUser}> </ModalExample>
                    </td>
                  </tr>
                </tbody>

              )
            })}
          </table>

        </div>
      </div>
    </div >
  )
}
