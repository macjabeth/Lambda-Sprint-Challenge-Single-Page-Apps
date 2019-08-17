import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Tab, Icon } from 'semantic-ui-react'

const panes = [
  {
    menuItem: (
      <Menu.Item key='home'>
        <Icon name='home' />
        <NavLink to='/'>Home Page</NavLink>
      </Menu.Item>
    )
  },
  {
    menuItem: (
      <Menu.Item key='character'>
        <Icon name='users' />
        <NavLink to='/character'>Characters</NavLink>
      </Menu.Item>
    )
  },
  {
    menuItem: (
      <Menu.Item key='location'>
        <Icon name='map outline' />
        <NavLink to='/location'>Locations</NavLink>
      </Menu.Item>
    )
  },
  {
    menuItem: (
      <Menu.Item key='episode'>
        <Icon name='video' />
        <NavLink to='/episode'>Episodes</NavLink>
      </Menu.Item>
    )
  }
]

const TabNav = () => <Tab panes={panes} />

export default TabNav
