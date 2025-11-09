import { useState } from 'react'
import { Home, Users, CalendarDays, Wallet, BarChart3, Layers, Menu } from 'lucide-react'

const nav = [
  { label: 'Dashboard', icon: Home },
  { label: 'Students', icon: Users },
  { label: 'Attendance', icon: CalendarDays },
  { label: 'Fees', icon: Wallet },
  { label: 'Reports', icon: BarChart3 },
  { label: 'Classes', icon: Layers },
]

export default function Sidebar() {
  const [open, setOpen] = useState(true)

  return (
    <aside className={`h-full border-r border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 transition-all duration-300 ${open ? 'w-64' : 'w-16'}`}>
      <div className="p-3 flex items-center justify-between">
        <button
          onClick={() => setOpen(!open)}
          className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 dark:border-neutral-700 px-2 py-1.5 text-sm text-neutral-700 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-900"
          aria-label="Toggle sidebar"
        >
          <Menu className="h-4 w-4" />
          {open && <span className="text-xs">Collapse</span>}
        </button>
      </div>
      <nav className="px-2 space-y-1">
        {nav.map((item) => (
          <button key={item.label} className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-900`}> 
            <item.icon className="h-4 w-4" />
            {open && <span>{item.label}</span>}
          </button>
        ))}
      </nav>
    </aside>
  )
}
