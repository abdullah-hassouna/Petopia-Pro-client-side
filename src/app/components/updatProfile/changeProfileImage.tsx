import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { AppDispatch, RootState, startLoading, stopLoading } from '@/lib/reduxStore/store'
import { cn } from '@/lib/utils'
import { Label } from '@radix-ui/react-label'
import { Camera, GalleryRemove, User } from 'iconsax-react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function changeProfileImage() {

    const [file, setFile] = useState<File | null>(null);
    const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);
    const [imageBlob, setImageBlob] = useState(null);
    const dispatch: AppDispatch = useDispatch();


    const userProfileImage = useSelector((state: RootState) => state.userInfo.userProfileImage);


    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        if (selectedFile) {
            setFile(selectedFile);

            const reader = new FileReader();
            reader.onload = (event) => {
                const base64 = event.target.result;
                setImageBlob(base64);
            };
            reader.readAsDataURL(selectedFile);
        }
    };

    const removeNewImage = () => {
        setFile(null);
        setImageBlob(null)
    }

    const __uploadFile = async () => {
        if (!file) return;

        dispatch(startLoading())

        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'your_unsigned_preset'); // Replace with your preset name

        try {
            const response = await fetch('https://api.cloudinary.com/v1_1/your_cloud_name/image/upload', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();
            if (response.ok) {
                setUploadedUrl(data.secure_url);
            } else {
                console.error('Upload failed:', data);
            }
        } catch (error) {
            console.error('Error uploading file:', error);
        } finally {
            dispatch(stopLoading())
        }
    };


    return (
        <div className="flex items-end space-x-4">
            <Avatar className="h-24 w-24">
                <AvatarImage src={imageBlob || userProfileImage || '/defaultAvatar.png'} />
                <AvatarFallback><User /></AvatarFallback>
            </Avatar>

            {
                imageBlob ?
                    <Button className={cn('rounded-full  h-8 w-8 p-1 bg-whity hover:bg-primary-75 flex')} onClick={removeNewImage}>
                        <GalleryRemove className='block' color='var(--prime-color)' />
                    </Button> :
                    <>
                        <Label
                            htmlFor="profilePictureUpload"
                            className={cn(" bg-whity text-primary-foreground hover:bg-primary-75 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 cursor-pointer")}
                        >
                            <Camera className="mr-2 h-4 w-4" color='var(--prime-color)' />
                            Change Profile Picture
                        </Label>
                        <Input
                            id="profilePictureUpload"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleFileChange}
                        />
                    </>

            }
        </div>
    )
}

export default changeProfileImage