import { S3 } from 'aws-sdk';
const bucketName:any = process.env.bucket;
const region:any = process.env.REGION;
const accessKey:any = process.env.UPLOAD_ACCESS_KEY;
const secretKey:any = process.env.UPLOAD_SECRET_KEY;

const s3 = new S3({
    region,
    accessKeyId: accessKey,
    secretAccessKey: secretKey
});

//subir un archivo a s3
export async function uploadToS3(key, body, mimeType) {


    const uploadParams = {
        Bucket: bucketName,
        Body: body,
        Key: key,
        ContentType: mimeType
    }

    const uploadFinal = await s3.upload(uploadParams).promise();
    console.log(uploadFinal);
    
    return uploadFinal;
}

//descargar un archivo de s3
