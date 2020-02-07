import React, { useState, useEffect } from 'react'
import { Layout, Menu, Button, Icon } from 'antd'

import './Layouts.css'

const { Header } = Layout

const HeaderPage = () => {
  const [toggle, setToogle] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)

  if (toggle && width > 768) setToogle(false)

  useEffect(() => {
    const onResize = (e) => {
      setWidth(e.currentTarget.innerWidth)
    }

    window.addEventListener('resize', onResize)

    return () => window.removeEventListener('resize', onResize)
  }, [width])

  const onToggleMenu = () => {
    setToogle(!toggle)
  }

  return (
    <>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      {/* <img src={require('../assets/image/p05394v7.jpg')} className="logo" /> */}
      <Menu
        className="menu-item"
        theme="dark"
        mode={ toggle ? 'inline' : 'horizontal' }
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px', display: toggle || width > 768 ? 'block' : 'none' }}
      >
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
        <Menu.Item key="4">nav 4</Menu.Item>
        <Menu.Item key="5">nav 5</Menu.Item>
      </Menu>
      <div className="btn-toggle">
        <Button type="primary" onClick={onToggleMenu}>
          <Icon type="unordered-list" />
        </Button>
      </div>
    </Header>
    </>
  )
}

export default HeaderPage