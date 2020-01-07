const db = require("../data/db-config");

function find() {
  return db("schemes").select();
}

function findById(id) {
  return db("schemes")
    .where({ id })
    .first();
}

async function add(data) {
  const [id] = await db("schemes").insert(data);
  return db("schemes")
    .where({ id })
    .first();
}

async function update(id, body) {
  await db("schemes")
    .where({ id })
    .update(body);

  return findById(id);
}

function remove(id) {
  return db("schemes")
    .where({ id })
    .del();
}

module.exports = {
  find,
  findById,
  add,
  update,
  remove
};
