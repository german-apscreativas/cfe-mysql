const Busboy = require("busboy");

type dataImg = {
  content: string;
  filename: string;
  contentType: string;
  encoding: string;
  fieldname: string;
};

export const parser = (event, fileZise) =>
  new Promise((resolve, reject) => {
    const busboy = new Busboy({
      headers: {
        "content-type":
          event.headers["content-type"] || event.headers["Content-Type"],
      },
      limits: {
        fileZise,
      },
    });

    const result = {
      files: [],
    };

    busboy.on("file", (fieldname, file, filename, encoding, mimetype) => {
      const uploadFile: dataImg = {
        content: "",
        filename: "",
        contentType: "",
        encoding: "",
        fieldname: "",
      };
      file.on("data", (data) => {
        uploadFile.content = data;
      });
      file.on("end", () => {
        if (uploadFile.content) {
          uploadFile.filename = filename;
          uploadFile.contentType = mimetype;
          uploadFile.encoding = encoding;
          uploadFile.fieldname = fieldname;
          result.files.push(uploadFile);
        }
      });
    });

    busboy.on("field", (fieldname, value) => {
      result[fieldname] = value;
    });

    busboy.on("error", (error) => {
      reject(error);
    });

    busboy.on("finish", () => {
      resolve(result);
    });

    busboy.write(event.body, event.isBase64Encoded ? "base64" : "binary");
    busboy.end();
  });
