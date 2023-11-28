"use client";
import TextField from "@/components/text-field/text-field";
import axios from "axios";
import { Form, Formik } from "formik";
import { GetServerSideProps } from "next";
import { toast } from "react-toastify";
import * as Yup from "yup";

const Admin = () => {
  const onSubmit = async (formData: { name: string; title: string; image: string }) => {
    try {
      await axios.post("/api/category", {
        name: formData.name,
        title: formData.title,
        image: formData.image,
      });
      return toast.success("Successfully created category");
    } catch (error) {
      return toast.error("Something went wrong creating the category");
    }
  };

  const validation = Yup.object({
    name: Yup.string().required("Name is required"),
    title: Yup.string().min(4, "4 minimum character").required("Title is required"),
    image: Yup.string().min(6, "6 minimum character").required("Image is required"),
  });

  return (
    <div>
      <Formik initialValues={{ name: "", title: "", image: "" }} onSubmit={onSubmit} validationSchema={validation}>
        <Form className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14">
          <h1 className="text-4xl font-semibold">Create Category</h1>

          <div className="space-y-4">
            <TextField className="text-black w-full" name="name" placeholder="Name" type="text" />
            <TextField className="text-black w-full" name="image" placeholder="Image" type="text" />
            <TextField className="text-black w-full" name="title" placeholder="Title" type="text" />
          </div>

          <button type="submit" className="w-full bg-[#E10856] py-4 rounded mt-4 font-semibold">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Admin;
