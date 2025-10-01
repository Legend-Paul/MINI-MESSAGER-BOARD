const pool = require("./pool");

async function getAllMessages() {
    const users = await pool.query("SELECT * FROM users");
    return users;
}
async function getMessage(id) {
    const users = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    return users;
}

async function insertMessage(user, text, date) {
    await pool.query(
        'INSERT INTO users ("user", text, added_date) VALUES ($1, $2, $3)',
        [user, text, date]
    );
}

async function deleteMessage(id) {
    await pool.query("DELETE FROM users WHERE id = $1", [id]);
}
async function updateMessage(id, user, text, date) {
    await pool.query(
        'UPDATE users SET "user" = $1, text = $2, added_date = $3 WHERE id = $4',
        [user, text, date, id]
    );
}

module.exports = {
    getAllMessages,
    getMessage,
    insertMessage,
    deleteMessage,
    updateMessage,
};
