import {createPool} from 'mysql2/promise'

export const pool = createPool({
    host: '192.168.100.30',
    user: 'root',
    password: 'angel',
    port: 3306,
    database: 'icecream'
})