/* eslint-disable react/no-unknown-property */
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {currencyData: {}, isLoading: true}

  componentDidMount() {
    this.getCurrenciesData()
  }

  getCurrenciesData = async () => {
    const response = await fetch(
      `https://apis.ccbp.in/crypto-currency-converter`,
    )
    const data = await response.json()
    // console.log(data)

    const updatedData = data.map(each => ({
      currencyLogo: each.currency_logo,
      currencyName: each.currency_name,
      id: each.id,
      euroValue: each.euro_value,
      usdValue: each.usd_value,
    }))
    // console.log(updatedData)
    this.setState({currencyData: updatedData, isLoading: false})
  }

  render() {
    const {isLoading, currencyData} = this.state
    return (
      <>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div className="image-container">
            <h1 className="heading">Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
              className="image"
            />
            <div className="currencies-container">
              <div className="menu-bar">
                <p className="menu-item">Coin Type</p>
                <div className="cost-container">
                  <p className="menu-item">USD</p>
                  <p className="menu-item">EURO</p>
                </div>
              </div>
              <ul className="ul-list-container">
                {currencyData.map(each => (
                  <CryptocurrencyItem details={each} key={each.id} />
                ))}
              </ul>
            </div>
          </div>
        )}
      </>
    )
  }
}

export default CryptocurrenciesList
