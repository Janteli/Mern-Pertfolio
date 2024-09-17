import { Form, Input } from "antd";
import React from "react";
import {useDispatch, useSelector} from "react-redux"
import {ShowLoading, HideLoading } from "../../redux/rootSlice"
import axios from "axios"
import { message } from "antd";

const AdminIntro = () => {
  const dispatch = useDispatch()
    const {portfolioData} = useSelector((state)=> state.root)
  const onFinish = async (values) => {
    try {
      // console.log(values);
      dispatch(ShowLoading())
      const response =await axios.post("/api/portfolio/update-intro",{
        ...values,
        _id: portfolioData.intro._id,
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
      <Form onFinish={onFinish} layout="vertical" initialValues={portfolioData.intro}>
        <Form.Item name="welcomeText" label="Welcome Text">
          <input placeholder="Welcome Text" />
        </Form.Item>
        <Form.Item name="firstName" label="First Name">
          <input placeholder="First Name" />
        </Form.Item>
        <Form.Item name="lastName" label="Last Name">
          <input placeholder="Last Name" />
        </Form.Item>
        <Form.Item name="caption" label="Caption">
          <input placeholder="Caption" />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <textarea placeholder="Description" />
        </Form.Item>
        <div className="flex justify-end w-full" label="">
          <button className="px-10 py-2 bg-primary text-white" type="submit">SAVE</button>
        </div>
      </Form>
    </div>
  );
};

export default AdminIntro;
