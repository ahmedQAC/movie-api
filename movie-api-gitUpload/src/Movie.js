import React, { Component } from 'react';
import axios from 'axios';
import DisplayingText from './DisplayingText.js';
import Film from './Film.js';

class Movie extends Component {

    constructor() {
        super();
        this.state = {
            movies: [],
            title: ''
        }
        this.update = this.update.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(event) {
        this.setState({ title: event.target.value});
    }

    update = (event) => {
        axios({
            method: 'get',
            url: 'http://www.omdbapi.com/?s=' + this.state.title + '&apikey=ab8b9a5a', //changed 't' into 's' to allow to search for multiple data
            responseType: 'json'
        }).then(response => {
            this.setState({ movies: response.data.Search });
            console.log(response.data);
        })
    }

    render() {
        let films = [];
        if(this.state.movies){
            for (let film of this.state.movies)
                films.push(<Film data = {film} />);
            
        }
        return (
            <div className="App-header">
            <form onSubmit={this.update}>
                <label>
                    Movie: 
                    <input id="text" type="text" onChange={(this.handleInput)}></input>
                    <input type="button" onClick={this.update} value="Find Film"></input>
                    {/* <DisplayingText DisplayingText={this.state.movies.Year} />
                    <img src={this.state.movies.Poster} /> */}
                    {films}

                </label>
            </form>
            </div>
        );
    }

}
export default Movie;