import React from 'react'
import { Link } from 'react-router-dom'

const Profile = () => (
  <div className="page-center">
    <img src="/images/default.jpg" />
    <h1>
      <Link to="/messages">message</Link>
    </h1>
  </div>
)

export default Profile
