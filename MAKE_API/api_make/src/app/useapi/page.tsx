"use client";

import { api_get } from "@/services/api";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  age: number;
  gender: string;
}

const UseApi = () => {
  const [dataStore, setDataStore] = useState<User[]>([]);

  const getLocalStorageData = (): User[] => {
    const storedData = localStorage.getItem("users");
    return storedData ? JSON.parse(storedData) : [];
  };

  const saveToLocalStorage = (data: User[]) => {
    localStorage.setItem("users", JSON.stringify(data));
  };

  const mergeAndDeduplicateData = (oldData: User[], newData: User[]): User[] => {
    const mergedData = [...oldData, ...newData];
    return mergedData.filter((item, index, self) =>
      index === self.findIndex((t) => t.id === item.id)
    );
  };

  const fetchUserData = async () => {
    try {
      const response = await api_get();
      setDataStore((prevData) => {
        const updatedData = mergeAndDeduplicateData(prevData, response);
        saveToLocalStorage(updatedData);
        return updatedData;
      });
    } catch (error) {
      console.error("Failed to fetch data from API", error);
    }
  };

  const retrieveLocalStorageData = () => {
    const localData = getLocalStorageData();
    setDataStore((prevData) => mergeAndDeduplicateData(prevData, localData));
  };

  const addUserFromInput = () => {
    const newUser = {
      id: Number(localStorage.getItem("id") || 0),
      name: localStorage.getItem("name") || "",
      age: Number(localStorage.getItem("age") || 0),
      gender: localStorage.getItem("gender") || "",
    };

    if (newUser.id && newUser.name && newUser.age && newUser.gender) {
      setDataStore((prevData) => {
        const updatedData = mergeAndDeduplicateData(prevData, [newUser]);
        saveToLocalStorage(updatedData);
        return updatedData;
      });
    }
  };

  useEffect(() => {
    retrieveLocalStorageData();
    fetchUserData();
    // Listen for storage events to update data when it changes in another tab
    window.addEventListener('storage', retrieveLocalStorageData);
    return () => {
      window.removeEventListener('storage', retrieveLocalStorageData);
    };
  }, []);

  useEffect(() => {
    // Check for new user data whenever the component re-renders
    addUserFromInput();
  });

  return (
    <div className="p-5 font-sans">
      <h1 className="text-center mb-5 text-2xl font-bold text-blue-600">
        User Data Table
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="py-3 px-4 text-left">ID</th>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Age</th>
              <th className="py-3 px-4 text-left">Gender</th>
            </tr>
          </thead>
          <tbody>
            {dataStore.length > 0 ? (
              dataStore.map((user, index) => (
                <tr key={user.id} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="py-3 px-4 border-b">{user.id}</td>
                  <td className="py-3 px-4 border-b">{user.name}</td>
                  <td className="py-3 px-4 border-b">{user.age}</td>
                  <td className="py-3 px-4 border-b">{user.gender}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="py-3 px-4 text-center border-b">
                  No Data Available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UseApi;
