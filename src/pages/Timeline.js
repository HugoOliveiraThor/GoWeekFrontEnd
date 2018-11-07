import React, { Component } from 'react';
import twitterLogo from '../twitter.svg'
import api from '../services/api'
import './Timeline.css'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'

export default class Timeline extends Component {
  state = {
    newTweet: ''
  }
  handleInputChange = e => {
    this.setState({ newTweet: e.target.value })
  }
  handleNewTweet = async e => {
    console.log('API', JSON.stringify(api))
    if (e.keyCode !== 13) return;
    const content = this.state.newTweet
    const author = localStorage.getItem('@GoTwitter:username')
    await api.post('tweets', { content , author })
    this.setState({ newTweet: '' })
  }

  render() {
    return (
      <div className='timeline-wrapper'>
        <img height={24} src={twitterLogo} alt='GoTwitter' />
        <form>
          <textarea
            value={this.state.newTweet}
            onChange={this.handleInputChange}
            onKeyDown={this.handleNewTweet}
            placeholder='O que está acontecendo?'
          />
        </form>
      </div>
    )
  }
}
