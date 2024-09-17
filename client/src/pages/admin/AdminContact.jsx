import { Form, Input } from "antd";
import React from "react";
import {useDispatch, useSelector} from "react-redux"
import {ShowLoading, HideLoading } from "../../redux/rootSlice"
import axios from "axios"
import { message } from "antd";

const AdminContact = () => {
  const dispatch = useDispatch()
    const {portfolioData} = useSelector((state)=> state.root)
  const onFinish = async (values) => {
    try {
      // console.log(values);
      dispatch(ShowLoading())
      const response =await axios.put("/api/portfolio/update-contact",{
        ...values,
        _id: portfolioData.contact._id,
      })
      if(response.data.success){
        message.success("Successfully Posted")
      } else {
        message.error(response.data.error)
      }
      dispatch(HideLoading())
    } catch (error) {
      dispatch(HideLoading())
      message.error(error.message)
    }
  };
  return (
    <div>
      <Form onFinish={onFinish} layout="vertical" initialValues={portfolioData.contact}>
        <Form.Item name="name" label="Name">
          <input placeholder="Name" />
        </Form.Item>
        <Form.Item name="gender" label="Gender">
          <input placeholder="Gender" />
        </Form.Item>
        <Form.Item name="age" label="Age">
          <input placeholder="Age" />
        </Form.Item>
        <Form.Item name="email" label="Email">
          <input placeholder="Email" />
        </Form.Item>
        <Form.Item name="mobile" label="Mobile">
          <textarea placeholder="Mobile" />
        </Form.Item>
        <Form.Item name="address" label="Address">
          <textarea placeholder="Address" />
        </Form.Item>
        <div className="flex justify-end w-full" label="">
          <button className="px-10 py-2 bg-primary text-white" type="submit">SAVE</button>
        </div>
      </Form>
    </div>
  );
};

export default AdminContact;
