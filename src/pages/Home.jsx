import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'


const Home = () => {
  return (
    <div>
      <Main />
      <Row rowID='1' title='Popular' fetchUrl={requests.requestPopular}/>
      <Row rowID='2' title='Now Playing' fetchUrl={requests.requestNowPlaying}/>
      <Row rowID='3' title='Top Rated' fetchUrl={requests.requestTopRated}/>
      <Row rowID='4' title='Trending' fetchUrl={requests.requestTrending}/>
      <Row rowID='5' title='Upcoming' fetchUrl={requests.requestUpcoming}/>
    </div>
  )
}

export default Home
