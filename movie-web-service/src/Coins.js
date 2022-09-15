import React, { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((res) => res.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>코인 목록! ({coins.length})</h1>
      {loading ? (
        <strong>코인 정보 받아오는 중..</strong>
      ) : (
        coins.map((coin) => (
          <li key={coin.id}>
            {coin.name}({coin.symbol}) : {coin.quotes.USD.price}
          </li>
        ))
      )}
    </div>
  );
}

export default App;
