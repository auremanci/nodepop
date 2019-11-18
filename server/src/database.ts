const mysql = require('mysql2');

import keys from './keys';

const db = mysql.createPool(keys.database);

const pool = db.promise();

export default pool;