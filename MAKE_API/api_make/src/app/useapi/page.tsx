"use client";
import { api_get } from "@/services/api";
import React, { useEffect } from "react";

const UseApi = () => {
  const [data, setData] = React.useState<
    { id: number; name: string; age: number; gender: string }[]
  >([]);

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await api_get();
      setData(response);
    };

    fetchUserData();
  }, []);

  // Retrieve user data from localStorage
  const userName = localStorage.getItem("name");
  const userAge = localStorage.getItem("age");
  const userGender = localStorage.getItem("gender");
  const userId = localStorage.getItem("id");

  // Add localStorage data only if it doesn't already exist
  if (
    userId !== null &&
    userName !== null &&
    userAge !== null &&
    userGender !== null
  ) {
    const userObj = {
      id: parseInt(userId),
      name: userName,
      age: parseInt(userAge),
      gender: userGender,
    };

    // Check if the userObj already exists in the data array
    const exists = data.some((user) => user.id === userObj.id);
    if (!exists) {
      setData((prevData) => [...prevData, userObj]);
    }
  }else{
    alert("data not found");
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "20px",
          color: "#4A90E2",
        }}
      >
        User Data Table
      </h1>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          backgroundColor: "#f9f9f9",
          boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
        }}
      >
        <thead>
          <tr
            style={{
              backgroundColor: "#4A90E2",
              color: "white",
              textAlign: "left",
            }}
          >
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>ID</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Name</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Age</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Gender</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((user, index) => (
              <tr
                key={index}
                style={{
                  textAlign: "left",
                  backgroundColor:
                    index % 2 === 0 ? "#f2f2f2" : "white",
                }}
              >
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  {user.id}
                </td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  {user.name}
                </td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  {user.age}
                </td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  {user.gender}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={4}
                style={{
                  textAlign: "center",
                  padding: "10px",
                  border: "1px solid #ddd",
                }}
              >
                No Data Available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UseApi;
