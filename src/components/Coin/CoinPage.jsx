import React from "react";
import { useState, useEffect } from "react";

export default function CoinPage() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [myMoney, setMyMoney] = useState(0);
  const [getCoin, setGetCoin] = useState(0);
  const start = (event) => setMyMoney(event.target.value);
  const result = (event) => setGetCoin(event.target.value);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! ({coins.length})</h1>
      {loading ? <strong>Loading...</strong> : null}
      <hr />
      <h2>Coin Caculator</h2>
      <input
        type="nymber"
        value={myMoney}
        onChange={start}
        placeholder="Trance money"
      />
      <select onChange={result}>
        <option key="-1">Select Coin Price</option>
        {coins.map((coin, index) => (
          <option key={index}>{coin.quotes.USD.price.toFixed(2)}</option>
        ))}
      </select>
      <h3>
        My money : {myMoney}, Coin is {getCoin}
      </h3>
      <h3>Result : {getCoin > 0 ? (myMoney / getCoin).toFixed(2) : null}</h3>
      <hr />
      <h2>Coin Tracker</h2>
      <select>
        <option key="-1">Select Coin</option>
        {coins.map((coin, index) => (
          <option key={index}>
            {coin.name} ({coin.symbol}): USD / ${" "}
            {coin.quotes.USD.price.toFixed(2)}
          </option>
        ))}
      </select>
      <ul>
        {coins.map((coin, index) => (
          <li key={index}>
            {coin.name} ({coin.symbol}): USD / ${" "}
            {Math.round(coin.quotes.USD.price)}
          </li>
        ))}
      </ul>
    </div>
  );
}
