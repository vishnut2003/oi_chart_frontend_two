'use client';

import Contact from '@/components/Contact/Contact';
import GenerateApi from '@/components/GenerateApi/GenerateApi';
import Header from '@/components/Header/Header'
import Notification from '@/components/Notification/Notification';
import Users from '@/components/Users/Users';
import React, { useState } from 'react'

const Dashboard = () => {

  const [menuLink, setMenuLink] = useState('api')

  return (
    <div className="flex flex-col w-full">
      <Header />
      <div className="p-5">
        <div className='flex gap-2 flex-wrap'>
          <p
          onClick={() => {
            setMenuLink('api')
          }}
          className={menuLink == 'api' ? 'py-1 px-3 bg-blue-600 rounded-md text-white cursor-pointer font-semibold' : 'py-1 px-3 bg-blue-100 rounded-md text-blue-600 cursor-pointer font-semibold'}
          >Generate API Key</p>
          <p
          onClick={() => {
            setMenuLink('notification')
          }}
          className={menuLink == 'notification' ? 'py-1 px-3 bg-blue-600 rounded-md text-white cursor-pointer font-semibold' : 'py-1 px-3 bg-blue-100 rounded-md text-blue-600 cursor-pointer font-semibold'}
          >Notifications</p>
          <p
          onClick={() => {
            setMenuLink('contact')
          }}
          className={menuLink == 'contact' ? 'py-1 px-3 bg-blue-600 rounded-md text-white cursor-pointer font-semibold' : 'py-1 px-3 bg-blue-100 rounded-md text-blue-600 cursor-pointer font-semibold'}
          >Contact us</p>
          <p
          onClick={() => {
            setMenuLink('users')
          }}
          className={menuLink == 'users' ? 'py-1 px-3 bg-blue-600 rounded-md text-white cursor-pointer font-semibold' : 'py-1 px-3 bg-blue-100 rounded-md text-blue-600 cursor-pointer font-semibold'}
          >Users</p>
        </div>
        <div className='my-3'>
          {
            menuLink == 'api' &&
            <GenerateApi/>
          }
          {
            menuLink == 'notification' &&
            <Notification/>
          }
          {
            menuLink == 'contact' && 
            <Contact/>
          }
          {
            menuLink == 'users' && 
            <Users/>
          }
        </div>
      </div>
    </div>
  )
}

export default Dashboard
