import React from 'react'
import { Link } from 'react-router-dom'
type Props = {}

export default function Home({ }: Props) {
    return (
        <div className='container'>
            <div className='sub-container'>
            <div>
            <Link to="/login">
                <button className="btn">Login</button>
            </Link>
            </div>

            <div>
            <Link to="/register">
                <button className="btn">Register</button>
            </Link>
            </div>
            </div>
          

        </div>
    )
}