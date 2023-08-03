const db = require('../db/db.js');

function getUrl(originalUrl) {
    const slash = originalUrl.lastIndexOf('/');
    return originalUrl.slice(slash + 1);
}

async function queryDatabase(query) {
    const result = await new Promise((res, rej) => {
        db.query(query, (err, data) => {
            if (err) {
                rej(err);
            }
            res(data);
        });
    });
    return result;
}

class Controller {
    async getApps(req, res) {
        const url = getUrl(req.originalUrl);
        const query = `SELECT * FROM \`app-list\` WHERE type = '${url}'`;
        const data = await queryDatabase(query);
        res.send("hello worlds getApps");
        // res.send(data);
    }
    async getTypes(req, res) {
        const query = 'SELECT DISTINCT type FROM `app-list`';
        const data = await queryDatabase(query);
        res.send("hello world types");
        // res.send(data);
    }
}

module.exports = new Controller();
