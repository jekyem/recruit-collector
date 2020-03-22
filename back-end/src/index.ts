import "module-alias/register";
import "@src/LoadEnv"; // Must be the first import
import app from "@src/Server";
import { logger } from "@src/shared";

// Start the server
const port = Number(process.env.PORT || 3000);
app.listen(port, () => {
  logger.info("Express server started on port: " + port);
});
