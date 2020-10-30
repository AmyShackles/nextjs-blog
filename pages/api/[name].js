const fs = require("fs");
const path = require("path");

const imageDirectory = path.join(process.cwd(), "public/images/");

export default (req, res) => {
  const {
    query: { name },
  } = req;
  if (/tom/i.test(name)) {
    fs.createReadStream(imageDirectory + "tom.jpg").pipe(res);
  } else if (/bob/i.test(name)) {
    fs.createReadStream(imageDirectory + "bob.jpg").pipe(res);
  } else {
    res.status(404).json({ "I am so sorry": "Cat not found" });
  }
};
