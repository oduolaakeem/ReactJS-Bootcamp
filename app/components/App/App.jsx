'use strict';

import './_App.scss';

import React from 'react';
import Header from '../Header/Header';
import AppActions from '../../actions/AppActions';
import MovieStore from '../../stores/MovieStore';
import UserStore from '../../stores/UserStore';
import MovieList from '../MovieList/MovieList';

// TODO: Anything wrong with defaultState?
// TODO: Wire up UserStore

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.moviesUpdated = this.moviesUpdated.bind(this);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    AppActions.fetchMovies();
    MovieStore.addChangeListener(this.moviesUpdated);
  }

  componentWillUnmount() {
    MovieStore.removeChangeListener(this.moviesUpdated);
  }

  render() {
    return (
      <div className="app">
        <Header filtered={MovieStore.isFiltered()}
                user={this.state.user}/>
        <div className="main">
          <MovieList movies={this.state.movies} user={{name: 'westin'}} />
        </div>
      </div>
    );
  }

  moviesUpdated() {
    this.setState({
      movies: MovieStore.getAll()
    });
  }
}
