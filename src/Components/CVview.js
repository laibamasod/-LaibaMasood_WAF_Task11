import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewUser = () => {
  const [lastUser, setLastUser] = useState(null);
  
  const fetchUser = () => {
    axios
      .get('http://localhost:8080/getUser')
      .then((res) => {
        const userData = res.data;
        if (userData && userData.length > 0) {
          const lastUserData = userData[userData.length - 1];
          setLastUser(lastUserData);
        }
      })
      .catch((err) => {
        console.log('Error in getting users ', err);
      });
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <h2 style={{ fontFamily: 'Arial', color: 'blue' }}>CV:</h2>
      {lastUser && (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li style={{ marginBottom: '15px', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
            <strong style={{ color: 'green' }}>Name:</strong> {lastUser.name}<br />
            <strong style={{ color: 'green' }}>Address:</strong> {lastUser.address}<br />
            <strong style={{ color: 'green' }}>Email:</strong> {lastUser.email}<br />
            <strong style={{ color: 'green' }}>Number:</strong> {lastUser.number}<br />
            <hr style={{ borderTop: '1px solid #ccc' }} />
          </li>
        </ul>
      )}
    </div>
  );
};

export default ViewUser;
