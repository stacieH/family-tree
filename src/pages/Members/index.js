import React from 'react';
import { useCallback, useEffect, useState } from 'react';
import {Row, Col, Button, Space, Form} from 'antd'
import {PlusCircleOutlined} from '@ant-design/icons'

import Table from '../../components/Table'

import * as API from '../../utils/API'
import MemberView from './MemberView';

function Members() {
  const [data, setData] = useState([])
  const [isChanged, setIsChanged] = useState(false)
  const [isUpdated, setIsUpdated] = useState(false)
  const [ form ] = Form.useForm()

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
        },
        {
          title: 'Nickname',
          dataIndex: 'nickname',
          key: 'nickname',
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Relationship',
          dataIndex: 'relationship',
          key: 'relationship',
        },
        {
          title: 'Action',
          key: 'action',
          render:(_, record)=>{
            return <Space>
              <small style={{cursor:'pointer', color:'red'}} onClick={()=>handleDelete(record._id)}>Delete</small>
              {/* <small style={{cursor:'pointer', color: 'green'}} onClick={()=>getItem(record)}>Update</small> */}
            </Space>
          }
        },
      ]
    
      // useEffect
      const callMembers = useCallback(()=>{
        async function getMembers(){
          try{
            const res = await API.getMembers()
            const members = res.data.map(d=>({...d, key:d._id}))
            setData(members)
            setIsChanged(false)
          }
          catch(err){}
        }
        getMembers()
      },[])
      
      useEffect(()=>{
        callMembers()
      },[isChanged, callMembers])
    
      const handleReset = () => {
          form.resetFields()
      }
      const handleFillMemberForm = (member) => {
        form.setFieldsValue(member)
      }
      const handleDelete=async (id)=>{
        try{
          await API.deleteMember(id)
          await setIsChanged(true)
        }
        catch(err){}
      }
      const getItem=(item)=>{
        handleFillMemberForm(item)
        setIsUpdated(true)
      }
      const handleAddButton = async() => {
        await setIsUpdated(false)
        await handleReset()
      }
    return (
        <Row justify='space-around'>
          <Col span={11}>
            <h3 align='center'>Lists of Members</h3>
            <Button icon={<PlusCircleOutlined />} onClick={handleAddButton}>Add Member</Button>
            <Table data={data} columns={columns}/>
          </Col>
          <Col span={11}>
            <MemberView 
              isUpdated={isUpdated} 
              form={form} 
              handleAddButton={handleAddButton} 
              handleReset={handleReset}
              setIsChanged={setIsChanged} 
              setIsUpdated={setIsUpdated} />
          </Col>
        </Row>
    );
}

export default Members;