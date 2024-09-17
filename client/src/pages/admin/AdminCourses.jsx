import { Form, message, Modal } from "antd";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { HideLoading, ReloadData, ShowLoading } from "../../redux/rootSlice";
import axios from "axios";

const AdminCourses = () => {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const { courses } = portfolioData;
  const [showAddEditModal, setShowAddEditModal] = useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = useState(null);
  const [type, setType ] = useState("add")
  const [form] = Form.useForm()

  const onFinish = async (values) => {
    const tempTechnologies = values?.technologies?.split(",") || []
    values.technologies = tempTechnologies
    try {
      dispatch(ShowLoading());
      let response;
      if (selectedItemForEdit) {
        response = await axios.put("/api/portfolio/update-course", {
          ...values,
          _id: selectedItemForEdit._id,
        });
      } else {
        response = await axios.post("/api/portfolio/add-course", values);
      }

      if (response.data.success) {
        message.success("Successfully Posted");
        setShowAddEditModal(false);
        setSelectedItemForEdit(null);
        dispatch(ReloadData(true));
        form.resetFields();
      } else {
        message.error(response.data.error);
      }
      dispatch(HideLoading());
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  const onDelete = async (item) => {
    try {
      dispatch(ShowLoading());
      const response = await axios.delete("/api/portfolio/delete-course", {
        data: { _id: item._id },
      });
      if (response.data.success) {
        message.success(response.data.message);
        dispatch(HideLoading())
        dispatch(ReloadData(true));
      } else {
        message.error(response.data.message);
      }
      dispatch(HideLoading());
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  return (
    <div>
      <div className="flex justify-end">
        <button
          className="bg-primary px-5 py-2 text-white"
          onClick={() => {
            setSelectedItemForEdit(null);
            setShowAddEditModal(true);
          }}
        >
          Add Course
        </button>
      </div>
      <div className="grid grid-cols-3 gap-5 mt-5 sm:grid-cols-1">
        {courses.map((course) => (
          <div className="shadow border p-5 border-gray-400 flex flex-col gap-5">
            <h1 className="text-primary text-xl font-bold">
              {course.title}
            </h1>
            <hr />
            <img src={course.image} alt="" className="h-60 w-80 rounded"/>
            {/* <h1>Source Code : {course.link}</h1> */}
            <h1>Technologies : {course.description}</h1>

            <h1>{course.description}</h1>
            <div className="flex justify-end gap-5 mt-5">
              <button
                className="bg-primary text-white px-5 py-2"
                onClick={() => {
                  setSelectedItemForEdit(course);
                  setShowAddEditModal(true);
                  setType("edit")
                }}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-5 py-2"
                onClick={() => onDelete(course)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {
        (type === "add" || selectedItemForEdit) && (
          <Modal
        visible={showAddEditModal}
        title={selectedItemForEdit ? "Edit Experience" : "Add Experience"}
        footer={null}
        onCancel={() => {setShowAddEditModal(false)
          setSelectedItemForEdit(null)
        }}
      >
        <Form
        form={form}
          layout="vertical"
          onFinish={onFinish}
          initialValues={{...selectedItemForEdit,
            technologies : selectedItemForEdit?.technologies?.join(" , ")
          } || {}}
        >
          <Form.Item name="title" label="Title">
            <input placeholder="Title" />
          </Form.Item>
          <Form.Item name="image" label="Image">
            <input placeholder="Image" />
          </Form.Item>
          <Form.Item name="link" label="Link">
            <input placeholder="Link" />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <textarea placeholder="Description" />
          </Form.Item>
          <div className="flex justify-end">
            <button
              className="border-primary text-primary px-5 py-2"
              onClick={() => {setShowAddEditModal(false)
                setSelectedItemForEdit(null)
              }}
            >
              Cancel 
            </button>
            <button className="bg-primary text-white px-5 py-2">
              {selectedItemForEdit ? "Edit Course" : "Add Course"}
            </button> 

          </div>
        </Form>
      </Modal>
        )
      }
    </div>
  );
};

export default AdminCourses;
