import React, { useEffect, useState } from "react";
import axios from "axios";

const APICall = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    // fetch("http://localhost:5001/api/v1/books")
    //   .then((res) => res.json())
    //   .then((res2) => console.log(res2));
    axios
      .get("http://localhost:5001/api/v1/books")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <p>API Call</p>
      {loading ? (
        <div role="status" class="max-w-sm animate-pulse">
          <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
          <span class="sr-only">Loading...</span>
        </div>
      ) : (
        <ul>
          {data.map((ele) => {
            return (
              <li key={ele.id}>
                {ele.name} --- {ele.price}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default APICall;
