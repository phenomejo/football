import React from 'react'
import { Card } from 'antd'

const { Meta } = Card

const League = (props) => {
  const onSelectLeague = (v) => {
    props.onSelectLeague(v)
  }

  return (
    <>
      <Card hoverable
            className="team"
            onClick={e => onSelectLeague(props.league)}
            cover={<img alt="example" className="logo-image" src={require(`@/assets/image/${props.league.id}.png`)} /> }>
        <Meta title={props.league.name} description={props.league.area.name} />
      </Card>
    </>
  )
}

export default League

// props.league.id === 2013 ? require('@/assets/image/serie_A_brasil.png') :
// props.league.id === 2021 ? require('@/assets/image/premier-english.png') :
// props.league.id === 2016 ? require('@/assets/image/EFL_Championship.png') :
// props.league.id === 2018 ? require('@/assets/image/Euro_2020.png') :
// props.league.id === 2001 ? require('@/assets/image/UEFA_Champions.png') :
// props.league.id === 2015 ? require('@/assets/image/Ligue_1_frence.png') :
// props.league.id === 2002 ? require('@/assets/image/Bundesliga.png') :
// props.league.id === 2019 ? require('@/assets/image/Serie_A_italy.png') :
// props.league.id === 2003 ? require('@/assets/image/Eredivisie_netherlands.png') :
// props.league.id === 2017 ? require('@/assets/image/Liga_protugal.png') :
// props.league.id === 2014 ? require('@/assets/image/La_Liga.png') :
// props.league.id === 2000 ? require('@/assets/image/FIFA_World_Cup.png') : null