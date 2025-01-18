import cloudinary from './config';

async function uploadImage(filePath: string): Promise<void> {
    try {
        const result = await cloudinary.uploader.upload(filePath, {
            folder: 'my_platform_folder',
        });
        console.log('Image uploaded successfully:', result.url);
    } catch (error) {
        console.error('Error uploading image:', error);
    }
}

uploadImage('path/to/your/image.jpg');
