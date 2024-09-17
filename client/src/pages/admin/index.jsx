import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { Segmented, Tabs } from "antd";
import AdminIntro from "./AdminIntro";
import AdminAbout from "./AdminAbout";
import { useSelector } from "react-redux";
import AdminExperiences from "./AdminExperiences";
import AdminProjects from "./AdminProjects";
import AdminCourses from "./AdminCourses";
import AdminContact from "./AdminContact";

const Admin = () => {
  const { portfolioData } = useSelector((state) => state.root);

  useEffect(() => {
    if (!localStorage.getItem("token")) window.location.href = "/admin-login";
  }, []);

  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: "Intro",
      children: <AdminIntro />,
    },
    {
      key: "2",
      label: "About",
      children: <AdminAbout />,
    },
    {
      key: "3",
      label: "Experiences",
      children: <AdminExperiences />,
    },
    {
      key: "4",
      label: "Projects",
      children: <AdminProjects />,
    },
    {
      key: "5",
      label: "Courses",
      children: <AdminCourses />,
    },
    {
      key: "6",
      label: "Contact",
      children: <AdminContact />,
    },
  ];
  return (
    <>
      <Header />
      <div className="flex gap-10 items-center px-5 py-2 justify-between">
        <div className="flex gap-10 items-center">
          <h1 className=" text-3xl text-primary sm:text-xl opacity-70">
            Portfolio Admin
          </h1>
          <div className="w-60 h-[1px] bg-tertiary"></div>
        </div>
        <h1
          className="underline text-primary text-xl cursor-pointer"
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/admin-login"
          }}
        >
          Logout
        </h1>
      </div>
      {portfolioData && (
        <div className=" px-5">
          <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
        </div>
      )}
    </>
  );
};

export default Admin;
