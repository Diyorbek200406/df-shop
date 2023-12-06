"use client";

import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Clothes } from "../page";

const DetailPage = () => {
  const { id } = useParams();

  const [data, setData] = useState<Clothes>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:7070/api/clothes/${id}`);
        setData(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);
  console.log(data);

  return (
    <div>
      <h1>{data?.name}</h1>
      <h1>{data?.title}</h1>
      <img src={data?.image} alt="" />
    </div>
  );
};

export default DetailPage;
