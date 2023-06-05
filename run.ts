import { app } from "./src/server/";


const PORT = process.env.SERVER_PORT || 8081;

app.listen(PORT, () => {
  console.log("Server runing on port " + PORT);
});