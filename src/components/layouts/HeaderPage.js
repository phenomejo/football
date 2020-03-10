import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation, useHistory } from 'react-router-dom'
import { Layout, Menu, Button, Icon } from 'antd'

import './Layouts.css'

const { Header } = Layout

const HeaderPage = () => {
  const history = useHistory()
  const home = useRef(null)
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

  const gotoHome = () => {
    history.push('/')
    home.current.props.onSelect({ key: '/' })
  }

  return (
    <>
    <Header>
      <img src={require('@/assets/image/logo.jpg')} alt="logo" className="logo" onClick={ gotoHome } />
      <Menu
        className="menu-item"
        theme="dark"
        mode={ toggle ? 'inline' : 'horizontal' }
        defaultSelectedKeys={[useLocation().pathname]}
        style={{ lineHeight: '64px', display: toggle || width > 768 ? 'block' : 'none' }}
      >
        <Menu.Item ref={home} key="/" onClick={onToggleMenu}>
          <Link to="/">ตารางคะแนน</Link>
        </Menu.Item>
        <Menu.Item key="/match" onClick={onToggleMenu}>
          <Link to="/match">ตารางแข่ง</Link>
        </Menu.Item>
        <Menu.Item key="/match-result" onClick={onToggleMenu}>
          <Link to="match-result">ผลการแข่ง</Link>
        </Menu.Item>
        <Menu.Item key="/top-score" onClick={onToggleMenu}>
          <Link to="top-score">ดาวซัลโว</Link>
        </Menu.Item>
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