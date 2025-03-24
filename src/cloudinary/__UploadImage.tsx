import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label';
import { AppDispatch, startLoading, stopLoading } from '@/lib/reduxStore/store';
import { Camera } from 'iconsax-react';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

function UploadImage() {
    const [file, setFile] = useState<File | null>(null);
    const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);
    const dispatch: AppDispatch = useDispatch();


    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        if (selectedFile) {
            setFile(selectedFile);
        }
    };



    return (

        <Label
            htmlFor="coverImageUpload"
            className="absolute bottom-2 right-2 bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 cursor-pointer"
        >
            <Camera className="mr-2 h-4 w-4" />
            Change Cover
            <Input
                id="coverImageUpload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
            />
        </Label>

    )
}

export default UploadImage