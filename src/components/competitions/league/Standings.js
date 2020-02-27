import React from 'react'
import { Table, Form, Radio } from 'antd'

const columns = [
  { title: '#', dataIndex: 'position', align: 'center', width: '8%' },
  { title: 'Team', dataIndex: 'team.name', render: (text, record) => <span><img src={record.team.crestUrl} alt={record.team.name} style={{ width: 30, height: 30 }} /> {text}</span>, width: '45%' },
  { title: 'GP', dataIndex: 'playedGames' },
  { title: 'W', dataIndex: 'won' },
  { title: 'D', dataIndex: 'draw' },
  { title: 'L', dataIndex: 'lost' },
  { title: 'GF', dataIndex: 'goalsFor' },
  { title: 'GA', dataIndex: 'goalsAgainst' },
  { title: 'GD', dataIndex: 'goalDifference' },
  { title: 'P', dataIndex: 'points' }
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