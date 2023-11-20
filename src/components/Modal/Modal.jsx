"use client"
import React, { useState } from "react";
// Diğer importları eklemeyi unutma
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const url = "https://6559f7296981238d054cfc28.mockapi.io/Todos";

const Modal = ({ onClose }) => {
  const [postData, setPostData] = useState(null);

  const handleInputClick = (e) => {
    e.stopPropagation();
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Başlık zorunludur"),
    description: Yup.string().required("Açıklama zorunludur"),
    created_up: Yup.string().required("Oluşturulma Tarihi zorunludur"),
    updated_up: Yup.string().required("Güncelleme Tarihi zorunludur"),
  });

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={onClose}
    >
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
        <div className="mt-4" onClick={handleInputClick}>
          {/* Formik bileşenini kullan */}
          <Formik
            initialValues={{
              title: "",
              description: "",
              created_up: "",
              updated_up: "",
            }}
            validationSchema={validationSchema}
            onSubmit={async (values, { setSubmitting }) => {
              try {
                // Form verilerini API'ye gönder
                const response = await axios.post(url, values);
                console.log("Post response:", response.data);
                // İstek başarıyla tamamlandıktan sonra modalı kapat
                onClose();
                setPostData(response.data);
              } catch (error) {
                console.error("Post error:", error);
              }
              setSubmitting(false);
            }}
          >
            {/* Formik Form ve Field bileşenlerini kullan */}
            <Form>
              {/* Başlık alanı */}
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
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  required
                />
                <ErrorMessage
                  name="title"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              {/* Açıklama alanı */}
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
              {/* Oluşturulma Tarihi alanı */}
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
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  required
                />
                <ErrorMessage
                  name="created_up"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              {/* Güncelleme Tarihi alanı */}
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
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  required
                />
                <ErrorMessage
                  name="updated_up"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              {/* Gönder düğmesi */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                >
                  Kaydet
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Modal;


































































































































































































