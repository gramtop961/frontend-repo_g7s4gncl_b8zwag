import { Users, DollarSign, CheckCircle2 } from 'lucide-react'

const cards = [
  { label: 'Total Students', value: '248', icon: Users, color: 'from-indigo-500 to-blue-500' },
  { label: 'Monthly Revenue', value: '$12,430', icon: DollarSign, color: 'from-emerald-500 to-teal-500' },
  { label: 'Attendance Rate', value: '92%', icon: CheckCircle2, color: 'from-fuchsia-500 to-pink-500' },
]

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {cards.map((c) => (
        <div key={c.label} className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-4 bg-white dark:bg-neutral-950">
          <div className={`h-10 w-10 rounded-lg bg-gradient-to-br ${c.color} text-white grid place-items-center mb-3`}>
            <c.icon className="h-5 w-5" />
          </div>
          <p className="text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-400">{c.label}</p>
          <p className="mt-1 text-2xl font-semibold text-neutral-900 dark:text-neutral-100">{c.value}</p>
        </div>
      ))}
    </div>
  )
}
