import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config();

cloudinary.config({
    cloud_name: process.env.cloudinary_cloud_name as string,
    api_key: process.env.cloudinary_api_key as string,
    api_secret: process.env.cloudinary_api_secret as string,
});

export default cloudinary;
