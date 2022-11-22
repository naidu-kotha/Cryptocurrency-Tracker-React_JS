/* eslint-disable react/no-unknown-property */
import './index.css'

const CryptocurrencyItem = props => {
  const {details} = props
  const {currencyLogo, currencyName, usdValue, euroValue} = details

  return (
    <li className="item-details-container">
      <div className="coin-name-container">
        <img src={currencyLogo} alt={currencyName} className="logo" />
        <p className="coin-details">{currencyName}</p>
      </div>
      <div className="amount-container">
        <p className="coin-details">{usdValue}</p>
        <p className="coin-details">{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
