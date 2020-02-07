import React from 'react'
import { Layout } from 'antd'

const { Footer } = Layout

const FooterPage = () => {
  return (
    <Footer style={{ textAlign: 'center', position: "fixed", zIndex: 1, width: '100%', bottom: '0' }}>Ant Design ©2018 Created by Ant UED</Footer>
  )
}

export default FooterPage