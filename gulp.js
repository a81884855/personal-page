const fs = require("fs");
const path = require("path");
const AWS = require("aws-sdk");
const readdir = require("recursive-readdir");
const async = require("async");
const { accessKeyId, secretAccessKey, Bucket } = require("./config");

const rootFolder = path.resolve(__dirname, "./build/");

const s3 = new AWS.S3({
  accessKeyId,
  secretAccessKey,
});

function getFiles(dirPath) {
  return fs.existsSync(dirPath) ? readdir(dirPath) : [];
}

async function deploy(upload) {
  const filesToUpload = await getFiles(path.resolve(__dirname, upload));

  return new Promise((resolve, reject) => {
    async.eachOfLimit(
      filesToUpload,
      10,
      async.asyncify(async (file) => {
        const Key = file.replace(`${rootFolder}/`, "");
        console.log(`uploading: [${Key}]`);
        return new Promise((res, rej) => {
          s3.upload(
            {
              Key,
              Bucket,
              Body: fs.readFileSync(file),
            },
            (err) => {
              if (err) {
                return rej(new Error(err));
              }
              res({ result: true });
            }
          );
        });
      }),
      (err) => {
        if (err) {
          return reject(new Error(err));
        }
        resolve({ result: true });
      }
    );
  });
}

deploy(rootFolder)
  .then(() => {
    console.log("task complete");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err.message);
    process.exit(1);
  });
