import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'

import { Empty } from 'antd'

import { STATUS_FINISHED } from '@/util/Constant'
import { fetchMath, setMatchList } from '@/actions/match'
import Match from './Match'

const MatchResult = () => {
  const dispatch = useDispatch()
  const matchList = useSelector(state => state.matchList)

  useEffect(() => {
    const dateFrom = moment().subtract(10, 'days').format('YYYY-MM-DD')
    const dateTo = moment().format('YYYY-MM-DD')
    const params = {
      dateFrom,
      dateTo,
      status: STATUS_FINISHED
    }
    dispatch(fetchMath(params))

    return ()=> dispatch(setMatchList([]))
  }, [dispatch])

  return (
    <div className="page-content">
      { matchList.length === 0 ? <Empty /> : <Match matchList={matchList} /> }
    </div>
  )
}

export default MatchResult