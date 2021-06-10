import { uploadToS3 } from "../../../helpers/uploadAndDownload";
import { parser } from "../../../helpers/formParser";
import { v4 as uuidv4 } from "uuid";
const MAX_SIZE = 4000000;

export async function uploadFile(event) {
  try {
    const formData:any = await parser(event, MAX_SIZE);
    const file = formData.files[0];
    const validationType = mimeValid(file.contentType);
    const originalKey = `${uuidv4()}_original_${file.filename}`;
    if (validationType === true) {
      const eventSaveFile = await uploadToS3(
        originalKey,
        file.content,
        file.contentType
      );
      return {
        statusCode: 200,
        body: JSON.stringify({
          message: "Imagen subida",
        }),
      };
    }
    return {
      statusCode: 400,
      body: JSON.stringify({ err: { message: "Mime type no es valido" } }),
    };
  } catch (e) {
    console.log(e);
    return {
      statusCode: 400,
      body: JSON.stringify({
        err: {
          message: e.message,
        },
      }),
    };
  }
}

function mimeValid(mime) {
  const allowedMimes: Array<string> = ["image/jpeg", "image/png", "image/jpg"];
  const isValid: Boolean = allowedMimes.includes(mime);
  return isValid;
}
