"use client"

import { api_put } from '@/services/api';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const UserForm = () => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<any>("");
  const [gender, setGender] = useState<string>("");
  const [id, setId] = useState<any>("");
  const router = useRouter();

  const handleData = async (e: React.FormEvent) => {
    e.preventDefault();
    // isy data khi or nhi jaakr save nhi hoga
    try {
      const res = await api_put(name, age, gender, id);
      //yha api ko fetch kry hen hm
      if (res !== 'Failed to fetch data') {
        const newUser = { id: Number(id), name, age: Number(age), gender };
        // yha hmny neuser me data save kiya he wo wla jo hmny milyga inpur ke zariye bad me hm osko jor dengy taky data porana or new add hota rhy sath sath
        const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
        // yha hm api waly users ko bahir nikal rhy hen taky jor sken osko
      //
        const updatedUsers = [...existingUsers, newUser];
        // yha hmny jor diya new data ko or api waly data ko copy isi liye ki he ke api me wo update na ho yahi ho bs dikhany ke liye
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        // yha hmny os data ko local storage me save kiya he or user ke name sy isko get krengy jha use krna hoga
        
        // Trigger a storage event for cross-tab communication
        window.dispatchEvent(new Event('storage'));
// window.dispatchEvent(new Event('storage')) ka maqsad yeh hai ke jab aap localStorage mein koi tabdeeliyan karte hain (jaise data set karna ya update karna), to isse doosri khuli hui browser tabs ko yeh pata chal jata hai ke localStorage mein kuch badla hai.

        
        router.push('/useapi');
        // or sath hi hmny rout ak chiz he jo navigation change krti he url to hmny kha ke jb useapi yani form waly to input wala data bhi sath push ho jay
      } else {
        alert("Failed to fetch data");
        // agr api ko fetch nhi hoga to hmny error show krny ke liye
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form");
      // agr api ke duran code me koi error ata he to hmny error show kry ga
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
          User Input Form
        </h2>
        <form onSubmit={handleData}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="age" className="block text-gray-700 text-sm font-bold mb-2">
              Age
            </label>
            <input
              type="number"
              id="age"
              placeholder="Enter your age"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setAge(e.target.value)}
              value={age}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="id" className="block text-gray-700 text-sm font-bold mb-2">
              ID
            </label>
            <input
              type="text"
              id="id"
              placeholder="Enter your ID"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setId(e.target.value)}
              value={id}
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="gender" className="block text-gray-700 text-sm font-bold mb-2">
              Gender
            </label>
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserForm;

