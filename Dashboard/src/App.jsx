import './App.css'
import { RevenueCard } from './components/RevenueCard'

function App() {

  return (
    <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      <RevenueCard title="Amount Pending" amount="₹92,312.20" orderCount="13"/>
      <RevenueCard title="Amount Pending" amount="₹92,312.20" />
    </div>
  )
}

export default App
