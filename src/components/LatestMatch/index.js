import './index.css'

const LatestMatch = props => {
  const {latestMatchData = {}} = props
  const {
    competingTeam = 'N/A',
    date = 'N/A',
    venue = 'N/A',
    result = 'N/A',
    competingTeamLogo = '',
    firstInnings = 'N/A',
    secondInnings = 'N/A',
    manOfTheMatch = 'N/A',
    umpires = 'N/A',
  } = latestMatchData

  return (
    <div className="latest-match-container">
      <h1 className="latest-match-heading">Latest Matches</h1>
      <div className="latest-match-card">
        <div className="latest-match-details-logo-container">
          <div className="latest-match-details-1">
            <p className="latest-match-team-name">{competingTeam}</p>
            <p className="latest-match-date">{date}</p>
            <p className="match-details">{venue}</p>
            <p className="match-details">{result}</p>
          </div>
          <img
            className="latest-match-team-logo"
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
          />
        </div>
        <hr className="separator" />
        <div className="latest-match-details-2">
          <p className="latest-match-details-label">First Innings</p>
          <p className="latest-match-details-value">{firstInnings}</p>
          <p className="latest-match-details-label">Second Innings</p>
          <p className="latest-match-details-value">{secondInnings}</p>
          <p className="latest-match-details-label">Man Of The Match</p>
          <p className="latest-match-details-value">{manOfTheMatch}</p>
          <p className="latest-match-details-label">Umpires</p>
          <p className="latest-match-details-value">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
