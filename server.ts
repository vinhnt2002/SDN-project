import { app } from "./app";
import connectDB from "./utils/db";



app.listen(process.env.PORT, () => {
    console.log(`Server is connected with port ${process.env.HOSTNAME}:${process.env.PORT}`)
    connectDB()
})