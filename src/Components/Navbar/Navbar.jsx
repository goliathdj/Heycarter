  
import React from 'react'
 import { Link } from 'react-router-dom'

import 'antd/dist/antd.css'
import { Menu, Icon } from 'antd'

export default function Navbar () {
  
    return (
        <Menu mode='horizontal'>
          <Menu.Item >
            <Link to='/'>
              <Icon type='home' /> Home
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to='Favourites'>
              <Icon type='star-o' /> Favourites
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to='upcoming'>
              <Icon type='like-o' />Latest
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to='nowplaying'>
              <Icon type='eye-o' /> Watch Live
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to='toprated'>
              <Icon type='fire-o' /> Top Rated
            </Link>
          </Menu.Item>
        </Menu>
      )
  }