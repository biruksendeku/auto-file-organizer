import "dotenv/config";

import app from "./src/app.js";

app.listen(process.env.PORT, () => {
  console.log(
    `${process.env.NODE_ENV} server started on port ${process.env.PORT}...`,
  );
});
