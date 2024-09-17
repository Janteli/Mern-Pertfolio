import { Form, Input } from "antd";
import React from "react";
import {useDispatch, useSelector} from "react-redux"
import {ShowLoading, HideLoading } from "../../redux/rootSlice"
import axios from "axios"
import { message } from "antd";

const AdminAbout = () => {
  const dispatch = useDispatch()
    const {portfolioData} = useSelector((state)=> state.root)
  const onFinish = async (values) => {
    try {
      // console.log(values);
      const tempSkills = values.skills.split(",");
      values.skills = tempSkills;
      dispatch(ShowLoading())
      const response =await axios.post("/api/portfolio/update-about",{
        ...values,
        _id: portfolioData.about._id,
      })
      if(response.data.success){
        message.success("Successfully Posted About")
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
      <Form onFinish={onFinish} layout="vertical" initialValues={{...portfolioData.about,
        skills: portfolioData.about.skills.join(" , ")
      }}>
        <Form.Item name="lottieURL" label="Lottie URL">
          <input placeholder="Lottie URL" />
        </Form.Item>
    
     
     
        <Form.Item name="description1" label="Description1">
          <textarea placeholder="Description1" />
        </Form.Item>

        <Form.Item name="description2" label="Description2">
          <textarea placeholder="Description2" />
        </Form.Item>
        <Form.Item name="skills" label="Skills">
          <textarea placeholder="Skills" />
        </Form.Item>
        <div className="flex justify-end w-full" label="">
          <button className="px-10 py-2 bg-primary text-white" type="submit">SAVE</button>
        </div>
      </Form>
    </div>
  );
};

export default AdminAbout;
