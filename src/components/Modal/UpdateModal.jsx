"use client"
import React, { useState } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const UpdateModal = ({ todo, onClose }) => {
  const [formData, setFormData] = useState({
    title: todo.title,
    description: todo.description,
    created_up: todo.created_up,
    updated_up: todo.updated_up,
  });
  
const [loading, setLoading] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Başlık zorunludur"),
    description: Yup.string().required("Açıklama zorunludur"),
    created_up: Yup.string().required("Oluşturulma Tarihi zorunludur"),
    updated_up: Yup.string().required("Güncelleme Tarihi zorunludur"),
  });

  const handleSubmit = async ( { setSubmitting }) => {
    try {
            setLoading(true);
  
      await axios.put(
        `https://6559f7296981238d054cfc28.mockapi.io/Todos/${todo._id}`,
        formData
      );
      
      onClose();
    } catch (error) {
      console.log(error);  
    }finally{
        setLoading(false)
    }
    setSubmitting(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-gray-800 opacity-75"></div>
      <div className="relative bg-white p-4 max-w-md mx-auto rounded-md">
        <div className="flex justify-end">
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            Kapat
          </button>
        </div>
        <div className="mt-4">
    
          <Formik
            initialValues={formData}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
       
            <Form>
    
              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Başlık
                </label>
                <Field
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  required
                />
                <ErrorMessage
                  name="title"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
       
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Açıklama
                </label>
                <Field
                  as="textarea"
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows="3"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  required
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
          
              <div className="mb-4">
                <label
                  htmlFor="created_up"
                  className="block text-sm font-medium text-gray-700"
                >
                  Oluşturulma Tarihi
                </label>
                <Field
                  type="text"
                  id="created_up"
                  name="created_up"
                  value={formData.created_up}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  required
                />
                <ErrorMessage
                  name="created_up"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
   
              <div className="mb-4">
                <label
                  htmlFor="updated_up"
                  className="block text-sm font-medium text-gray-700"
                >
                  Güncelleme Tarihi
                </label>
                <Field
                  type="text"
                  id="updated_up"
                  name="updated_up"
                  value={formData.updated_up}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  required
                />
                <ErrorMessage
                  name="updated_up"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
       
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                  disabled={loading}
                >
                  {loading ? "Güncelleniyor..." : "Güncelle"}
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
