import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Edit = ({ id }) => {
  const navigate = useNavigate();
  const [editformData, seteditFormData] = useState({
    productId: "",
    productName: "",
    productImage: "",
    productPrice: "",
    productDescription: "",
  });

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    await axios
      .get(`https://66fe99a02b9aac9c997ca10e.mockapi.io/api/v1/products/${id}`)
      .then((res) => seteditFormData(res.data))
      .catch((error) => console.log(error));
  };

  const handleChange = (e) => {
    const { name, value } = e.target; //e.target.name e.target.value
    seteditFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .put(
        `https://66fe99a02b9aac9c997ca10e.mockapi.io/api/v1/products/${id}`,
        editformData
      )
      .then((res) => res.data)
      .catch((error) => console.log(error));
    navigate("/");
  };

  return (
    <div>
      <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
        <div className="mb-5">
          <label
            htmlFor="productId"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Product Id
          </label>
          <input
            type="text"
            id="productId"
            name="productId"
            onChange={handleChange}
            value={editformData.productId}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Your Product Id"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="productName"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Product Name
          </label>
          <input
            type="text"
            id="productName"
            name="productName"
            value={editformData.productName}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Your Product Name"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="productImage"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Product Image
          </label>
          <input
            type="text"
            id="productImage"
            name="productImage"
            value={editformData.productImage}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Your Product Image URL"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="productPrice"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Product Price
          </label>
          <input
            type="text"
            id="productPrice"
            name="productPrice"
            value={editformData.productPrice}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Your Product Price"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="productDescription"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Product Description
          </label>
          <input
            type="text"
            id="productDescription"
            name="productDescription"
            value={editformData.productDescription}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Your Product Description"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default Edit;
