import express from "express"
import userController from "./modules/user/user_controlller"
import { errorHandler } from "./core/error/error_handler"

const app = express()
const PORT = 3000
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(errorHandler)

//user controller
app.use("/users", userController)

//end point to insert a new lost pet
// app.post("/lost-pet", async (req, res) => {
//     const { user_id, latitude, longitude } = req.body
//     try {
//         const client = await pool.connect()
//         const result = await client.query(
//             "INSERT INTO lost_pets (user_id, latitude, longitude) VALUES ($1, $2, $3)",
//             [user_id, latitude, longitude]
//         )
//         res.json(result)
//     } catch (error) {
//         console.error(`Algum erro: ${error}`)
//         // res.json({error: error});
//         //
//     }
// })

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})
