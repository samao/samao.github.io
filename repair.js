const mockJS = require("mockjs");
const fs = require("fs");
const path = require("path");

let [, , size = 1000, duration = 10 * 60] = process.argv;

size = Number.isNaN(parseInt(size)) ? 1000 : parseInt(size);
const sizeStream = fs.createWriteStream(path.join(__dirname, "size", "9527"));
sizeStream.write(JSON.stringify([0, 0, size]));

const danmu = Array.from({ length: size }, () => {
  const { Random } = mockJS;
  const time = Random.integer(0, duration);
  const COLOR_RAN = Math.random();
  const color = COLOR_RAN > 0.7 ? 0xffffff : Random.integer(0, 0xffffff);

  const MODE_RAN = Math.random();
  const mode = MODE_RAN > 0.9 ? 1 : MODE_RAN > 0.95 ? 5 : 4;

  const SIZE_RAN = Math.random();
  const fontSize = SIZE_RAN > 0.8 ? 25 : 37;

  const uuid = Random.uuid();

  return {
    c: `${time},${color},${mode},${fontSize},13143927,1523267343,${uuid}`,
    m: Random.csentence(3, 15),
  };
});

const danmuStream = fs.createWriteStream(
  path.join(__dirname, "V4", "9527_2", "8888", "500")
);
danmuStream.write(JSON.stringify([[], [], danmu]));
