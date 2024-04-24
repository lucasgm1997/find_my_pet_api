import express from 'express';
import {Pool} from 'pg';

const app = express();
const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const pool = new Pool({
    port: 5432,
    password: '123456',
    user: 'admin',
    host: 'postgres_db',
    database: 'find_my_pet'
});


app.get('/', (req, res) => {
    res.send('Hello World with TypeScript!');
});


app.get('/users', async (req, res) => {
    let users:Array<any> = [];
    try {
    const client  = await pool.connect()

        const result  = await client.query('SELECT * FROM users')
        result.rows.forEach((user) => {
            users.push(user);
        })
    } catch (error) {
        console.error(`Algum erro: ${error}`);
    }

    const result  = await pool.query('SELECT * FROM users')
    result.rows.forEach((user) => {
        users.push(user);
    })

    res.json(users);
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});