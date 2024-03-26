import express from 'express';
import {Pool} from 'pg';

const app = express();
const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const pool = new Pool({
    port: 5433,
    password: '123456',
    user: 'postgres',
    host: 'localhost',
    database: 'find_my_pet'
});

app.get('/', (req, res) => {
    res.send('Hello World with TypeScript!');
});


app.get('/users', async (req, res) => {
    const client  = await pool.connect()
    let users:Array<any> = [];

    const result  = await pool.query('SELECT * FROM users ORDER BY id ASC')
    result.rows.forEach((user) => {
        users.push(user);
    })

    res.json(users);
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});