const db = require("../data/db-config");

function find(steps_id) {
  return db("steps as s")
    .join("schemes as sch", "sch.id", "s.steps_id")
    .where({ steps_id })
    .select("s.id", "sch.scheme_name");
}

module.exports = {
  find
};
