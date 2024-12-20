"use client"
import { api_put } from '@/services/api';
import Link from 'next/link';
import React, { useState } from 'react';

const UserForm = () => {
     const [name, setname] = useState<string>("")
     const [age, setage] = useState<any>(0)
     const [gender, setgender] = useState<string>("")
     const [id, setid] = useState<any>(0)

const handleData = async () => {
    const res =await api_put (name,age,gender,id);

    if (res !=='Failed to fetch data' ) {
        localStorage.setItem("name",name);
        localStorage.setItem("age",age);
        localStorage.setItem("gender",gender);
        localStorage.setItem("id",id);
       
        
    }else{
        alert("Failed to fetch data");
    }
}

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f4f8',
        padding: '20px',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '400px',
          backgroundColor: 'white',
          borderRadius: '10px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          padding: '20px',
        }}
      >
        <h2
          style={{
            textAlign: 'center',
            color: '#4A90E2',
            marginBottom: '20px',
          }}
        >
          User Input Form
        </h2>
        <form>
          {/* Name Input */}
          <div style={{ marginBottom: '15px' }}>
            <label
              htmlFor="name"
              style={{ display: 'block', marginBottom: '5px', color: '#333' }}
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                outline: 'none',
              } } onChange={(e) => setname(e.target.value)} value={name}
            />
          </div>

          {/* Age Input */}
          <div style={{ marginBottom: '15px' }}>
            <label
              htmlFor="age"
              style={{ display: 'block', marginBottom: '5px', color: '#333' }}
            >
              Age
            </label>
            <input
              type="number"
              id="age"
              placeholder="Enter your age"
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                outline: 'none',
              }} onChange={(e) => setage(e.target.value)} value={age}
            />
          </div>

          {/* ID Input */}
          <div style={{ marginBottom: '15px' }}>
            <label
              htmlFor="id"
              style={{ display: 'block', marginBottom: '5px', color: '#333' }}
            >
              ID
            </label>
            <input
              type="text"
              id="id"
              placeholder="Enter your ID"
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                outline: 'none',
              }} onChange={(e) => setid(e.target.value)} value={id}
            />
          </div>

          {/* Gender Dropdown */}
          {/* Gender Dropdown */}
<div style={{ marginBottom: '20px' }}>
  <label
    htmlFor="gender"
    style={{ display: 'block', marginBottom: '5px', color: '#333' }}
  >
    Gender
  </label>
  <select
    id="gender"
    value={gender} // Bind the `gender` state
    onChange={(e) => setgender(e.target.value)} // Update state on change
    style={{
      width: '100%',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      outline: 'none',
    }}
  >
    <option value="">Select Gender</option>
    <option value="Male">Male</option>
    <option value="Female">Female</option>
    <option value="Other">Other</option>
  </select>
</div>


          {/* Submit Button */}
  <Link href="/useapi">
  <button
            type="submit"
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#4A90E2',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px',
            }}
            onClick={handleData}
          >
            Add
          </button>
  </Link>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
