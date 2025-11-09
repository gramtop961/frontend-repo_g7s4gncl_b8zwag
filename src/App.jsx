import Header from './components/Header'
import Sidebar from './components/Sidebar'
import StatsCards from './components/StatsCards'
import ReportsChart from './components/ReportsChart'

function App() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
      <Header />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-3">
          <Sidebar />
        </div>
        <main className="col-span-12 lg:col-span-9 space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-3">Overview</h2>
            <StatsCards />
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-3">Reports</h2>
            <ReportsChart />
          </section>
        </main>
      </div>
    </div>
  )
}

export default App
