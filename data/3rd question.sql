USE IPL;
SELECT * from matches;

SELECT
  season,
  winner AS team,
  COUNT(*) AS matches_won
FROM
  matches
GROUP BY
  season, winner;

