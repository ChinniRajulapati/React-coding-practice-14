import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    headsCount: 0,
    tailsCount: 0,
    total: 0,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  onClickButton = () => {
    const tossResult = Math.floor(Math.random() * 2)

    if (tossResult === 0) {
      this.setState(prevValue => ({
        headsCount: prevValue.headsCount + 1,
        total: prevValue.total + 1,
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      }))
    } else {
      this.setState(prevValue => ({
        tailsCount: prevValue.tailsCount + 1,
        total: prevValue.total + 1,
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      }))
    }
  }

  render() {
    const {headsCount, tailsCount, total, imageUrl} = this.state

    return (
      <div className="app-container">
        <div className="toss-container">
          <h1 className="toss-heading">Coin Toss Game</h1>
          <p className="head-tail-name">Heads (or) Tails</p>
          <img className="image" src={imageUrl} alt="toss result" />
          <button onClick={this.onClickButton} className="btn" type="button">
            Toss Coin
          </button>
          <ul className="list-container">
            <p className="total">Total: {total}</p>
            <p className="total">Heads: {headsCount}</p>
            <p className="total">Tails: {tailsCount}</p>
          </ul>
        </div>
      </div>
    )
  }
}

export default CoinToss
