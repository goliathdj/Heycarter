  
import React from 'react'
import { Switch, Route } from 'react-router-dom'
 import Home from '../Home/Home'
 import Movie from '../Movieclass/Movie'
 import ShowMovies from '../ShowMovies/ShowMovies'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/popular' render={
      props => (<ShowMovies currentPage='Popular' category='popular'{...props} />
    )} />
    <Route exact path='/upcoming' render={
      props => (<ShowMovies currentPage='Up Coming' category='upcoming' {...props} />
    )} />
    <Route exact path='/nowplaying' render={
      props => (<ShowMovies currentPage='Now Playing' category='now_playing' {...props} />
    )} />
    <Route exact path='/toprated' render={
      props => (<ShowMovies currentPage='Top Rated' category='top_rated' {...props} />
    )} />
    <Route exact path='/search/:query' render={
      props => (<ShowMovies currentPage='Search Results' {...props} />
    )} />
    <Route exact path='/movie/:id' component={Movie} />
  </Switch>
)

export default Routes