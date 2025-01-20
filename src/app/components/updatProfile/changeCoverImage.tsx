import { Label } from '@/components/ui/label'
import { RootState, startLoading, stopLoading } from '@/lib/reduxStore/store';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Camera, GalleryRemove } from 'iconsax-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

function changeCoverImage({ setFile, setUploadedUrl}) {
    // const [file, setFile] = useState<File | null>(null);
    // const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);
    const [imageBlob, setImageBlob] = useState(null);
    // const dispatch: AppDispatch = useDispatch();

    const coverImage = useSelector((state: RootState) => state.userInfo.userProfileImage);

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




    return (
        <div className="mt-2 relative">
            <img
                src={imageBlob || coverImage || "/defaultAvatar.png"}
                alt="Cover"
                className="w-full h-80 object-cover rounded-lg"
            />
            <div className='absolute bottom-2 right-2'>
                {
                    imageBlob ?
                        <Button className={cn('rounded-full  h-8 w-8 p-1 bg-whity hover:bg-primary-75 flex')} onClick={removeNewImage}>
                            <GalleryRemove className='block' color='var(--prime-color)' />
                        </Button> :

                        <Label
                            htmlFor="coverImageUpload"
                            className={cn(" bg-whity text-primary-foreground hover:bg-primary-75 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 cursor-pointer")}
                        >
                            <Input
                                id="coverImageUpload"
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={handleFileChange}
                            />
                            <Camera className="mr-2 h-4 w-4" color='var(--prime-color)' />
                            Change Cover Image
                        </Label>
                }
            </div>
        </div>
    )
}

export default changeCoverImage