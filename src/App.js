import { useCallback, useEffect, useState } from 'react';

import Table from './components/Table'
import {Col, Row, Container, Label, Input, FormGroup, Form, Button} from 'reactstrap'

import 'react-table-v6/react-table.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import * as API from './utils/API'
import Header from './components/Header';

function App() {
  const [data, setData] = useState([])
  const [isChanged, setIsChanged] = useState(false)
  const [isUpdated, setIsUpdated] = useState(false)
  const [member, setMember] = useState({
    name:'',
    nickname:'',
    age:'',
    relationship:''
  })
  const columns = [
    {
      Header: 'Name',
      accessor: 'name',
    },
    {
      Header: 'Nickname',
      accessor: 'nickname',
    },
    {
      Header: 'Age',
      accessor: 'age',
    },
    {
      Header: 'Relationship',
      accessor: 'relationship',
    },
    {
      Header: 'Action',
      id: 'action',
      accessor:(item)=>{
        return <div>
          <small style={{cursor:'pointer', color:'red'}} onClick={()=>handleDelete(item._id)}>Delete</small>
          <small> </small>
          <small style={{cursor:'pointer', color: 'green'}} onClick={()=>getItem(item)}>Update</small>
        </div>
      }
    },
  ]

  const callMembers = useCallback(()=>{
    async function getMembers(){
      try{
        const res = await API.getMembers()
        setData(res)
        setIsChanged(false)
      }
      catch(err){}
    }
    getMembers()
  },[])

  useEffect(()=>{
    callMembers()
  },[callMembers])
  
  useEffect(()=>{
    callMembers()
  },[isChanged, callMembers])

  const handleChange = (e) => {
      const {target:{name,value}} = e
      setMember({...member, [name]:value})
  }

  
  const handleUpdate = async (e) => {
    e.preventDefault()
    try{
      await API.updateMember(member._id, member)
      await setIsChanged(true)
      await setMember({
        name:'',
        nickname:'',
        age:'',
        relationship:''
      })
      await setIsUpdated(false)
    }
    catch(err){    }
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    try{
      await API.createMembers(member)
      await setIsChanged(true)
      await setMember({
        name:'',
        nickname:'',
        age:'',
        relationship:''
      })
    }
    catch(err){}
  }
  const handleDelete=async (id)=>{
    try{
      await API.deleteMember(id)
      await setIsChanged(true)
    }
    catch(err){}
  }
  const getItem=(item)=>{
    setMember(item)
    setIsUpdated(true)
  }
  const handleAddButton = async() => {
    await setIsUpdated(false)
    await setMember({
      name:'',
      nickname:'',
      age:'',
      relationship:''
    })
  }
  return (
    <div>
      <Header/>
      <Container>
        <Row>
          <Col xs='12' sm='6'>
            <h3 align='center'>Lists of Members</h3>
            <Button onClick={handleAddButton}>Add Member</Button>
            <Table data={data} columns={columns}/>
          </Col>
          <Col xs='12' sm='6'>
            <Form onSubmit={isUpdated? handleUpdate: handleSubmit}>
              <h3 align='center'>{isUpdated?'Update':'Add'} Family Member</h3>
              <FormGroup>
                <Label>Name</Label>
                <Input type='text' name='name' value={member.name} onChange={handleChange}/>
              </FormGroup>
              <FormGroup>
                <Label>Nickname</Label>
                <Input type='text' name='nickname' value={member.nickname} onChange={handleChange}/>
              </FormGroup>
              <FormGroup>
                <Label>Age</Label>
                <Input type='number' name='age' value={member.age} onChange={handleChange}/>
              </FormGroup>
              <FormGroup>
                <Label>Relationship</Label>
                <Input type='text' name='relationship' value={member.relationship} onChange={handleChange}/>
              </FormGroup>
              <Button>Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
