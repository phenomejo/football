import React from 'react'
import { Table, Form, Radio } from 'antd'

const columns = [
  { title: '#', dataIndex: 'position', width: 35, fixed: 'left' },
  { title: '', dataIndex: 'team.crestUrl', render: (text, record) => <img src={text} alt={record.team.id} style={{ width: 30, height: 30 }} />, width: 30, fixed: 'left' },
  { title: 'Team', dataIndex: 'team.name', width: '40%' },
  // render: (text, record) => <span><img src={record.team.crestUrl} alt={record.team.name} style={{ width: 30, height: 30 }} /> {text}</span>, width: '45%' },
  { title: 'GP', dataIndex: 'playedGames', width: 50 },
  { title: 'W', dataIndex: 'won', width: 50 },
  { title: 'D', dataIndex: 'draw', width: 50 },
  { title: 'L', dataIndex: 'lost', width: 50 },
  { title: 'GF', dataIndex: 'goalsFor', width: 50 },
  { title: 'GA', dataIndex: 'goalsAgainst', width: 50 },
  { title: 'GD', dataIndex: 'goalDifference', width: 50 },
  { title: 'PTS', dataIndex: 'points', width: 50, fixed: 'right' }
]

const Standings = (props) => {

  const onChaneStandingType = (e) => {
    props.onChaneStandingType(e.target.value)
  }

  return (
    <>
      <div style={{ paddingTop: 50 }}>
        <h1>{props.curLeague}</h1>
        <Form.Item label="">
        <Radio.Group value={props.standingType} onChange={onChaneStandingType}>
          <Radio.Button value="TOTAL">TOTAL</Radio.Button>
          <Radio.Button value="HOME">HOME</Radio.Button>
          <Radio.Button value="AWAY">AWAY</Radio.Button>
        </Radio.Group>
        </Form.Item>
        <Table rowKey={record => record.team.id} columns={columns} dataSource={props.standings} pagination={false} size='small' scroll={{ x: 700 }} />
      </div>
    </>
  )
}

export default Standings