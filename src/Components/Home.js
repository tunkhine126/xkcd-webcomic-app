import React, { Component } from 'react'
import ReactLoading from 'react-loading';

const URL = 'https://xkcd.now.sh/?comic=latest'

class Home extends Component {

  state = {
    latestComic: [],
    loading: true
  }

  componentDidMount() {
    this.fetchLatest()
  }

  fetchLatest = () => {
    fetch(URL)
      .then(res => res.json())
      .then(data => this.setState({ 
        latestComic: data,
        loading: false,
      })
    )
  }

  render() {
    const comic = this.state.latestComic
    const title = comic.title
    const details = `#${comic.num} - ${comic.month}/${comic.day}/${comic.year}`
    
    return (
      <div>
        {this.state.loading ? (
          <div className="loader">
            <ReactLoading type={"bars"} color={"grey"} />
          </div>
        ) : (
            <div className="latestComic">
              {comic ? <h2>{title}</h2> : null}
              {comic ? <img className="latestImage" src={comic.img} title={comic.alt} alt={comic.title} /> : null}
              {!details.includes("undefined") ? <p>{details}</p> : null}
            </div>
        )}
      </div>
    )
  }
}

export default Home;