import { useDispatch } from "react-redux";
import { AppDispatch, startLoading, stopLoading } from "../reduxStore/store";

const uploadFile = async (file:File) => {


    console.log("Run Upload", file)
    if (!file) return;
    const dispatch: AppDispatch = useDispatch();

    dispatch(startLoading())

    const formData = new FormData();
    formData.append('file', file);

    formData.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET); // Replace with your preset name

    try {
        const response = await fetch(process.env.NEXT_PUBLIC_CLOUDINARY_API_URL, {
            method: 'POST',
            body: formData,
        });

        const data = await response.json();
        if (response.ok) {
            console.log(data)
            // setURLUpload({ profile: data.secure_url, cover: data.secure_url });
        } else {
            console.error('Upload failed:', data);
        }
    } catch (error) {
        console.error('Error uploading file:', error);
    } finally {
        dispatch(stopLoading())
    }
};

export default uploadFile;