import React, { useState, useEffect } from 'react'
import { Link, useLocation  } from 'react-router-dom'
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

  const onChangePath = () => {
    setToogle(false)
  }

  return (
    <>
    <Header>
      {/* <div className="logo" /> */}
      <Link to="/" onClick={onChangePath}>
        <img src={require('@/assets/image/logo.jpg')} alt="logo" className="logo" />
      </Link>
      <Menu
        className="menu-item"
        theme="dark"
        mode={ toggle ? 'inline' : 'horizontal' }
        defaultSelectedKeys={[useLocation().pathname]}
        style={{ lineHeight: '64px', display: toggle || width > 768 ? 'block' : 'none' }}
      >
        <Menu.Item key="/" onClick={onChangePath}><Link to="/">ตารางคะแนน</Link></Menu.Item>
        <Menu.Item key="/match" onClick={onChangePath}><Link to="/match">ตารางแข่ง</Link></Menu.Item>
        <Menu.Item key="/match-result" onClick={onChangePath}><Link to="match-result">ผลการแข่ง</Link></Menu.Item>
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