import serverName from '@/serverName'
import axios from 'axios'
import React, { useState } from 'react'

const Users = () => {
    const server = serverName()
    const [users, setUsers] = useState([])
    const [search, setSearch] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const searchUser = (e) => {
        e.preventDefault()
        const data = {
            email: search
        }
        axios.post(`${server}/users/search-users`, data)
            .then((res) => {
                setErrorMessage('')
                setUsers([res.data])
            })
            .catch((err) => {
                setUsers([])
                setErrorMessage(err.response.data)
            })
    }

    return (
        <div className='w-full md:w-max'>
            <div>
                <form className='flex gap-2 mb-3' onSubmit={searchUser}>
                    <input
                        type="email"
                        required
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value)
                        }}
                        placeholder='Enter Email Address'
                        className='py-2 px-3 rounded-md text-sm w-full' />
                    <button type='submit' className='py-2 px-4 bg-blue-600 text-white text-sm font-semibold rounded-md'>Search</button>
                </form>
                {
                    errorMessage &&
                    <div className='py-2 px-4 bg-red-100 text-red-600'>
                        <p>{errorMessage}</p>
                    </div>
                }
            </div>
            <div className='flex flex-col gap-3'>
                {
                    users.map((user, index) => (
                        <div key={index} className='flex flex-col items-start justify-start gap-2 border border-slate-200 py-2 px-3 rounded-md text-base font-semibold'>
                            <div>
                                <p>{user.username}</p>
                            </div>
                            <div>
                                <p>{user.email}</p>
                            </div>
                            <div>
                                <button
                                    className='bg-green-600 text-white py-1 text-sm px-4 rounded-md'
                                >Enable Access</button>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Users