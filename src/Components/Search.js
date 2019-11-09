import React, { Component } from 'react'
import { Form, FormControl, Button } from "react-bootstrap"

const SearchURL = 'https://xkcd.now.sh/?comic='

class Search extends Component {

  state= {
    userSearched: []
  }

  fetchSearch = (e) =>{
    e.preventDefault()
    const input = e.target.search.value

    if(!isNaN(input) && input <= 2226 ) {
      fetch(`${SearchURL}${input}`)
        .then(res => res.json())
        .then(data => this.setState({ userSearched: data }))
        .then(e.target.reset())
    }
    else {
      alert(" Please try a number between 1 - 2226")
    }
  }

  render() {
    const searched = this.state.userSearched
    const title = searched.title
    const details = `#${searched.num} - ${searched.month}/${searched.day}/${searched.year}`

    return (
      <div>
        {/* // Form */}
        <div className="searchForm"> 
          <Form.Group controlId="formBasicSearch">
            <Form.Label>xkcd Webcomic Search</Form.Label>
            <Form inline onSubmit={(e) => this.fetchSearch(e)}>
              <FormControl type="text" name="search" placeholder="Enter Comic Number" className="searchInput" />
              <Button type="submit" variant="outline-primary" className="searchSubmit">Search</Button>
            </Form>
          </Form.Group>
        </div>
          {/* // Image */}
        <div className="searchedComic">
          {searched ? <h2>{title}</h2> : null}
          {searched ? <img className="searchImage" src={searched.img} title={searched.alt} alt={searched.title} /> : null}
          {!details.includes("undefined") ? <p>{details}</p> : null} 
        </div>
      </div>
    )
  }
}

export default Search;