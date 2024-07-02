import { connectDatabase } from "./database/connections"
import app from "./app"

const PORT = process.env.PORT || 3006
async function main() {
    await connectDatabase()
    app.listen(PORT)
    console.log(`Server running on port ${PORT} 🚀`)
}

main()