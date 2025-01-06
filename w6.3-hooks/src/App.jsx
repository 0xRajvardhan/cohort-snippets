import { useState, useEffect } from "react"

function App() {
  const [count, setCount] = useState(0)
  const [exchangeData, setExchangeData] = useState({})
  const [bankData, setBankData] = useState({})

  console.log('App rendered')

  useEffect(() => {
    fetch('google.com', async (res) => {
      const json = await res.json()
      setBankData(json)
      // assume it is { income: 1000 }
    })
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setExchangeData({
        returns: 100
      });
    }, 1000)

  }, [])

  const incomeTax = (bankData.income + exchangeData.returns) * 0.3

  return (
    <>
      <p>Yoo sup fam your income tax returns are {incomeTax}</p>
      <button onClick={() => { setCount(count + 1) }}>Count {count}</button >
    </>
  )
}

export default App
