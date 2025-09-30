const pool = require("./pool");

async function getAlMessages() {
    const users = await pool.query("SELECT * FROM users");
    return users;
}

async function insertMessage(user, text, date) {
    const insertQuery = pool.query(
        "INSERT INTO users (user, text, added_date) VALUES ($1, $2, $3)"
    );
    await pool.query(insertQuery, [user, text, date]);
}

async function deleteMessage(id) {
    await pool.query("DELETE FROM users WHERE id = $1", [id]);
}
async function updateMessage(id, user, text, date) {
    await pool.query(
        "UPDATE users SET user= $1, text=$2, date=$3 WHERE id = $4",
        [user, text, date, id]
    );
}

module.exports = {
    getAlMessages,
    insertMessage,
    deleteMessage,
    updateMessage,
};
