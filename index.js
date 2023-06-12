const mongoose = require("mongoose");
const { PORT, MONGODB_URI } = require("./config");
const app = require("./server");

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
  })
  .catch((error) => console.log(error));
