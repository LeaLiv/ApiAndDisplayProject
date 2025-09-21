import React, { useContext } from 'react'
import { AppContext } from '../context/context'

const Home = () => {
    const {number} =useContext(AppContext)
  return (
    <div className="container">
        Home
        <h3>Number from counter:
            {number}
        </h3>
        </div>
  )
}

export default Home