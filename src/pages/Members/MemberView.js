import React from 'react';
import {Button, Form, Input, InputNumber} from 'antd'

import * as API from '../../utils/API'

function MemberView(props) {
    const {form, isUpdated, setIsChanged, setIsUpdated, handleAddButton, handleReset} = props

    const handleUpdate = async (member) => {
        try{
          await API.updateMember(member._id, member)
          await setIsChanged(true)
          await handleReset()
          await setIsUpdated(false)
        }
        catch(err){    }
      }
    const handleSubmit = async(values) => {
        try{
          await API.createMember(values)
          await setIsChanged(true)
          await handleReset()
        }
        catch(err){}
      }
    return (
        <div>
            <Form name='members' form={form} onFinish={isUpdated? handleUpdate: handleSubmit}>
            <h3 align='center'>{isUpdated?'Update':'Add'} Family Member</h3>
            <Form.Item 
              name='name' 
              label='Name' 
              rules={[{required: true}]}>
              <Input/>
            </Form.Item>
            <Form.Item 
              name='nickname' 
              label='Nickname' 
              rules={[{required: true}]}>
              <Input/>
            </Form.Item>
            <Form.Item 
              name='age' 
              label='Age' 
              rules={[{required: true}]}>
              <InputNumber min={0} max={100}/>
            </Form.Item>
            <Form.Item 
              name='relationship' 
              label='Relationship' 
              rules={[{required: true}]}>
              <Input/>
            </Form.Item>
            <Form.Item>
              <Button type='primary' htmlType='submit'>Submit</Button>
              <Button htmlType='button' onClick={handleReset}>Reset</Button>
              <Button htmlType='button' onClick={handleAddButton}>Cancel</Button>
            </Form.Item>
            </Form>
          </div>
    );
}

export default MemberView;