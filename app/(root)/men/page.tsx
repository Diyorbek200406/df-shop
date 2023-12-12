"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { redirect } from "next/navigation";
import Link from "next/link";

export interface Clothes {
  _id: string;
  name: string;
  image: string;
  title: string;
  category_id: string;
}

const Men = () => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:7070/api/clothes?category_id=65662f3218d07a315ea69a9d");
        const category = await axios.get("http://localhost:7070/api/categories");
        setData(response.data);
        setCategories(category.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  const deleteClothe = async (id: string) => {
    await axios.delete(`http://localhost:7070/api/clothes/${id}`);
    toast.success("Successfully deleted");
    window.location.reload();
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      const { name, image, title }: any = e.target;
      await axios.post("http://localhost:7070/api/clothes", {
        name: name.value,
        image: image.value,
        title: title.value,
        category_id: categoryId,
      });

      toast.success("Successfully created clothes");
      return redirect("/men");
    } catch (error) {
      return toast.error("Something went wrong creating the clothes");
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-[90vh] mt-[10vh] p-12">
        <form onSubmit={onSubmit} className="flex items-center justify-between">
          <input className="text-black" name="name" type="text" placeholder="Name" />
          <input className="text-black" name="image" type="text" placeholder="Image" />
          <input className="text-black" name="title" type="text" placeholder="Title" />
          <select onChange={(e) => setCategoryId(e.target.value)}>
            {categories.map((item: { _id: string; name: string }, idx) => (
              <option key={idx} value={item?._id}>
                {item.name}
              </option>
            ))}
          </select>

          <button type="submit">Create</button>
        </form>

        <div className="flex items-center justify-between">
          <h2 className="text-3xl my-4">Men Clothing</h2>
          <button className="text-3xl my-4">Create Clothing</button>
        </div>

        <div className="flex items-center flex-wrap gap-4">
          {data.map((item: Clothes, idx) => (
            <div
              key={idx}
              className="shadow-lg bg-neutral-400 w-[300px] h-[500px] rounded-lg overflow-hidden flex flex-col items-center justify-between"
            >
              <img className="w-full h-1/2 object-cover" src={item.image} alt="Sunset in the mountains" />

              <div className="p-4 h-1/2 flex flex-col gap-4 justify-between">
                <h3 className="font-bold text-xl">The Coldest Sunset</h3>
                <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia</p>
                <Link
                  href={`/men/${item._id}`}
                  className="bg-sky-500 hover:bg-blue-700 text-white flex items-center justify-center font-bold py-2 px-4 rounded-full"
                >
                  Read More
                </Link>
                <button onClick={() => deleteClothe(item._id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Men;
