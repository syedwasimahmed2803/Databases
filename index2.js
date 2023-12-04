const sql = require("mysql2/promise");
const deliveries = require("./data/deliveries.json");

const connection = sql.createPool({
  host: "localhost",
  user: "root",
  database: "IPL",
});

const createDeliveriesTable = `CREATE TABLE IF NOT EXISTS deliveries (
    match_id INT,
    inning INT,
    batting_team VARCHAR(255),
    bowling_team VARCHAR(255),
    \`over\` INT,
    ball INT,
    batsman VARCHAR(255),
    non_striker VARCHAR(255),
    bowler VARCHAR(255),
    is_super_over INT,
    wide_runs INT,
    bye_runs INT,
    legbye_runs INT,
    noball_runs INT,
    penalty_runs INT,
    batsman_runs INT,
    extra_runs INT,
    total_runs INT,
    player_dismissed VARCHAR(255),
    dismissal_kind VARCHAR(255),
    fielder VARCHAR(255)
    FOREIGN KEY (match_id) REFERENCES matches(id)
    )`;

const insertDataIntoTable = `INSERT INTO deliveries VALUES ?`;

connection
  .getConnection()
  .then(() => {
    console.log("Database connected");
    return connection.query(createDeliveriesTable);
  })
  .then(() => {
    return connection.query(insertDataIntoTable, [
      deliveries.map((ele) => Object.values(ele)),
    ]);
  })
  .catch((err) => {
    console.log(err.message);
  })
  .finally(() => {
    connection.end();
  });
