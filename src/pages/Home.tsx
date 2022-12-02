import React from 'react'
import { Link } from 'react-router-dom'
type Props = {}

export default function Home({ }: Props) {
    return (

        <div className='container'>
            <h1 className='heading'>Supabase - CRUD and Github authentication</h1>
            <form className='form'>
                <div>
                    <input type={"text"} placeholder="username" className='text'></input>
                </div>
                <div>
                    <input type={"password"} placeholder="Password" className='text'></input>
                </div>

            </form>
            <div className='sub-container'>
                <button className="btn">Login</button>
                <button className="btn">Register</button>
            </div>

            <div className='sub-container'>
                <button className="btn">Login With Github</button>
                <button className="btn">Register With Email</button>
            </div>

        </div>
    )
}