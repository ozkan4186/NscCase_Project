"use client";
import React, { useEffect } from "react";
import axios from "axios";
const url = "https://6559f7296981238d054cfc28.mockapi.io/Todos";

const Modal = ({ onClose }) => {
  // State for form fields
  const [formData, setFormData] = React.useState({
    title: "",
    description: "",
    created_up: "",
    updated_up: "",
  });
  const [postData, setPostData] = React.useState(null);
  // Function to handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // FormData'yı API'ye post etmek için axios'u kullan
      const response = await axios.post(url, formData);
      console.log("Post response:", response.data);
      // İsteği başarıyla tamamladıktan sonra modalı kapat
      onClose();
         setPostData(response.data);
    } catch (error) {
      console.error("Post error:", error);
    }
  };

  const handleInputClick = (e) => {
    e.stopPropagation();
  };
   
   
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
        <div className="mt-4  " onClick={handleInputClick}>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Başlık
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Açıklama
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows="3"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                required
              ></textarea>
            </div>
            <div className="mb-4">
              <label
                htmlFor="created_up"
                className="block text-sm font-medium text-gray-700"
              >
                Oluşturulma Tarihi
              </label>
              <input
                type="text"
                id="created_up"
                name="created_up"
                value={formData.created_up}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="updated_up"
                className="block text-sm font-medium text-gray-700"
              >
                Güncelleme Tarihi
              </label>
              <input
                type="text"
                id="updated_up"
                name="updated_up"
                value={formData.updated_up}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
              >
                Kaydet
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
