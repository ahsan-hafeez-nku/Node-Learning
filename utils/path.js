// import path from "path";
// import { fileURLToPath } from "url";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const absPathViews = path.join(__dirname, "..", "views");
// const absPathPublic = path.join(__dirname, "..", "public");

// export { absPathViews, absPathPublic };
const path = require('path');

module.exports = path.dirname(process.mainModule.filename);