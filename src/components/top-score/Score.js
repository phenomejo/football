import React from 'react'
import { Table } from 'antd'

const columns = [
  { title: '#', dataIndex: 'player.id', width: 35, fixed: 'left', render: (text, record, index) => index + 1  },
  { title: 'player', dataIndex: 'player.name', width: '40%' },
  { title: 'Team', dataIndex: 'team.name', width: '40%' },
  { title: 'Score', dataIndex: 'numberOfGoals', width: 60, fixed: 'right' },
]

const Score = (props) => {
  return (
    <>
      <div style={{ paddingTop: 50 }}>
        <h1>{props.curLeague}</h1>
        <Table rowKey={record => record.player.id} columns={columns} dataSource={props.score} pagination={false} size='small' scroll={{ x: 700 }} />
      </div>
    </>
  )
}

export default Score