USE IPL;
SELECT * from matches;

SELECT season,COUNT(*) AS matches_played FROM matches GROUP BY season;


SELECT d.bowling_team,SUM(d.extra_runs) AS extra_runs_conceded
FROM deliveries d
JOIN matches m ON d.match_id = m.id
WHERE m.season = '2016'
GROUP BY d.bowling_team;

SELECT
  season,
  winner AS team,
  COUNT(*) AS matches_won
FROM
  matches
GROUP BY
  season, winner;

