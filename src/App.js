import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [coinSelect, setCoinSelect] = useState("");
  const [dollarsToSpend, setDollarsToSpend] = useState(0);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  const selectOnChange = (event) => {
    coinSelect(event.target.value);
    // 검색 API로 원하는 코인의 ID를 찾습니다.
    const coinName = coinSelect; // 원하는 코인 이름을 설정합니다.
    const searchApiURL = "https://api.coinpaprika.com/v1/search";

    // 검색 API로 원하는 코인의 ID를 찾습니다.
    fetch(`${searchApiURL}?q=${coinSelect}`)
      .then((response) => response.json())
      .then((data) => {
        // 원하는 코인 데이터를 찾습니다.
        const foundCoin = data.coins.find((coin) => coin.name === coinSelect);

        // 찾은 코인의 정보를 출력합니다.
        if (foundCoin) {
          console.log("찾은 코인 정보:");
          console.log(foundCoin);
        } else {
          console.log("코인 이름이 일치하는 데이터를 찾을 수 없습니다.");
        }
      })
      .catch((error) => {
        console.error("API 요청 중 오류가 발생했습니다:", error);
      });
  };
  const inputOnChange = (event) => {
    setDollarsToSpend(event.target.value);
  };
  return (
    <div>
      <h1>The Coins! ({coins.length})</h1>
      {loading ? <strong>Loading...</strong> : null}
      <select onChange={selectOnChange}>
        {coins.map((coin) => (
          <option>
            {coin.name} ({coin.symbol}): {coin.quotes.USD.price}
          </option>
        ))}
      </select>
      <br />
      <input onChange={inputOnChange} placeholder="금액을 입력해주세요(USD)" />
      <span>
        해당 금액으로 {coinSelect}코인은 {dollarsToSpend}{" "}
      </span>
    </div>
  );
}
export default App;
// ⛔⛔⛔⛔⛔⛔ 수요일까지 주관회고 제출 ⛔⛔⛔⛔⛔⛔
