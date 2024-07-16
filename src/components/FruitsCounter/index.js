// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsContainer extends Component {
  state = {mango: 0, banana: 0}

  eatMango = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  eatBanana = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="background-container">
        <div className="content-container">
          <h1>
            Bob ate <span className="span-element">{mango} </span>mangoes{' '}
            <span className="span-element">{banana}</span> bananas
          </h1>
          <div className="fruits-container">
            <div className="banana-container">
              <img
                className="mango-image"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button type="button" className="button" onClick={this.eatMango}>
                Eat Mango
              </button>
            </div>
            <div className="mango-container">
              <img
                className="banana-image"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button type="button" className="button" onClick={this.eatBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsContainer
