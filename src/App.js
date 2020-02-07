import React, { useState } from 'react'
import { Layout, Breadcrumb, DatePicker, Button } from 'antd'
import moment from 'moment'

import HeaderPage from './components/HeaderPage'
import FooterPage from './components/FooterPage'

const { Content } = Layout;

const App = () => {
  const [date, setDate] = useState(moment().format('DD-MM-YYYY'))

  const handleChange = (dateMoment, dateStr) => {
    if (dateMoment) {
      console.log(dateStr, dateMoment.format('DD-MM-YYYY'))
      setDate(dateStr)
    } else {
      setDate(null)
    }
  }

  return (
    <Layout>
      <HeaderPage />
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ background: '#fff', padding: 24, height: 'calc(100vh - 130px)', minHeight: 380 }}>
          <Button type="primary">
            Click me!
          </Button>
          <DatePicker value= {!date ? null : moment(date, 'DD-MM-YYYY')} onChange={handleChange} />
          Content
        </div>
      </Content>
      <FooterPage/>
    </Layout>
  )
}

export default App
