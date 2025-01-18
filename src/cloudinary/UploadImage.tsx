import { Input } from '@/components/ui/input'
import React from 'react'

function UploadImage() {
    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
        const file = e.target.files[0]
        
    }

    return (
        <Input
            id="coverImageUpload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => handleImageUpload(e, 'coverImage')}
        />
    )
}

export default UploadImage