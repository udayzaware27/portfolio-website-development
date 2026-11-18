const teamBars = [96, 88, 83, 75, 70, 58, 52, 45, 38, 31, 25, 19]
const wicketTakers = [
  { name: 'R Ashwin', value: 96 },
  { name: 'SP Narine', value: 84 },
  { name: 'B Kumar', value: 82 },
  { name: 'PP Chawla', value: 78 },
  { name: 'RA Jadeja', value: 73 },
]
const runScorers = [
  { name: 'V Kohli', value: 96 },
  { name: 'S Dhawan', value: 82 },
  { name: 'RG Sharma', value: 78 },
  { name: 'DA Warner', value: 73 },
]
const seasonBars = [48, 43, 51, 66, 72, 53, 59, 55, 58, 54, 63, 60]
const seasons = ['2007/08', '2013', '2018', '2023', '2009', '2014', '2019', '2024']

export default function IplDashboardPreview() {
  return (
    <div
      className="ipl-dashboard-preview"
      role="img"
      aria-label="Custom IPL Power BI dashboard preview with team wins, wicket takers, season filters, match and run totals, top scorers, matches per season, and toss decisions."
    >
      <div className="ipl-dashboard-topbar" aria-hidden="true">
        <span className="ipl-dashboard-brand"><i /> IPL PERFORMANCE</span>
        <span>SEASON OVERVIEW · 2024</span>
      </div>

      <div className="ipl-dashboard-grid ipl-dashboard-top" aria-hidden="true">
        <section className="ipl-panel ipl-team-panel">
          <h3>Matches won by teams</h3>
          <div className="ipl-column-chart">
            {teamBars.map((height, index) => <i key={index} style={{ height: `${height}%`, animationDelay: `${index * 35}ms` }} />)}
          </div>
          <span className="ipl-panel-axis">WINNER</span>
        </section>

        <section className="ipl-panel">
          <h3>Top wicket takers</h3>
          <div className="ipl-leader-list">
            {wicketTakers.map((player, index) => (
              <div className="ipl-leader-row" key={player.name}>
                <span>{player.name}</span>
                <i><b style={{ width: `${player.value}%`, animationDelay: `${index * 80}ms` }} /></i>
              </div>
            ))}
          </div>
        </section>

        <section className="ipl-panel ipl-season-panel">
          <h3>Season</h3>
          <div className="ipl-season-filters">
            {seasons.map((season) => <span key={season}>{season}</span>)}
          </div>
        </section>
      </div>

      <div className="ipl-dashboard-kpis" aria-hidden="true">
        <div><strong>1K</strong><span>Total matches</span></div>
        <div><strong>348K</strong><span>Total runs</span></div>
        <div className="ipl-kpi-winner"><strong>SRH</strong><span>Season winner</span></div>
        <div><strong>261K</strong><span>Total wickets</span></div>
        <div><strong>19</strong><span>Total teams</span></div>
      </div>

      <div className="ipl-dashboard-grid ipl-dashboard-bottom" aria-hidden="true">
        <section className="ipl-panel">
          <h3>Top run scorers</h3>
          <div className="ipl-leader-list">
            {runScorers.map((player, index) => (
              <div className="ipl-leader-row" key={player.name}>
                <span>{player.name}</span>
                <i><b style={{ width: `${player.value}%`, animationDelay: `${index * 80}ms` }} /></i>
              </div>
            ))}
          </div>
        </section>

        <section className="ipl-panel">
          <h3>Matches per season</h3>
          <div className="ipl-season-chart">
            {seasonBars.map((height, index) => <i key={index} style={{ height: `${height}%`, animationDelay: `${index * 35}ms` }} />)}
          </div>
        </section>

        <section className="ipl-panel ipl-toss-panel">
          <h3>Toss decision</h3>
          <div className="ipl-toss-content">
            <i className="ipl-toss-donut" />
            <div className="ipl-toss-legend"><span>Field</span><span>Bat</span></div>
          </div>
        </section>
      </div>
    </div>
  )
}
