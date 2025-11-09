import { useMemo } from 'react'

const data = [
  { month: 'Jan', revenue: 820 },
  { month: 'Feb', revenue: 940 },
  { month: 'Mar', revenue: 760 },
  { month: 'Apr', revenue: 1120 },
  { month: 'May', revenue: 980 },
  { month: 'Jun', revenue: 1250 },
]

function polylinePoints(points, width, height, padding) {
  const maxY = Math.max(...points.map((d) => d.revenue))
  const minY = Math.min(...points.map((d) => d.revenue))
  const xStep = (width - padding * 2) / (points.length - 1)
  return points
    .map((d, i) => {
      const x = padding + i * xStep
      const t = (d.revenue - minY) / (maxY - minY || 1)
      const y = height - padding - t * (height - padding * 2)
      return `${x},${y}`
    })
    .join(' ')
}

export default function ReportsChart() {
  const width = 800
  const height = 260
  const padding = 32

  const points = useMemo(() => polylinePoints(data, width, height, padding), [])

  return (
    <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-4 bg-white dark:bg-neutral-950">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">Monthly Revenue</h3>
        <span className="text-xs text-neutral-500 dark:text-neutral-400">Demo</span>
      </div>
      <div className="w-full overflow-hidden">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-64">
          <defs>
            <linearGradient id="line" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6366F1" stopOpacity="1" />
              <stop offset="100%" stopColor="#EC4899" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6366F1" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#EC4899" stopOpacity="0.05" />
            </linearGradient>
          </defs>

          {/* grid lines */}
          {Array.from({ length: 4 }).map((_, i) => (
            <line
              key={i}
              x1={padding}
              x2={width - padding}
              y1={padding + ((height - padding * 2) / 3) * i}
              y2={padding + ((height - padding * 2) / 3) * i}
              stroke="#e5e7eb"
              opacity="0.6"
            />
          ))}

          {/* axis */}
          <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="#d1d5db" />

          {/* labels */}
          {data.map((d, i) => (
            <text key={d.month} x={padding + i * ((width - padding * 2) / (data.length - 1))} y={height - padding + 20} textAnchor="middle" fontSize="12" fill="#9ca3af">
              {d.month}
            </text>
          ))}

          {/* area fill */}
          <polyline points={`${points} ${width - padding},${height - padding} ${padding},${height - padding}`} fill="url(#area)" stroke="none" />

          {/* line */}
          <polyline points={points} fill="none" stroke="url(#line)" strokeWidth="3" />

          {/* dots */}
          {points.split(' ').map((p, idx) => {
            const [x, y] = p.split(',').map(Number)
            return <circle key={idx} cx={x} cy={y} r="4" fill="#6366F1" stroke="#fff" strokeWidth="2" />
          })}
        </svg>
      </div>
    </div>
  )
}
