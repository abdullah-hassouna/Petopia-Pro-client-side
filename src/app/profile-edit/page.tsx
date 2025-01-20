"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import ChangeCoverImage from '@/app/components/updatProfile/changeCoverImage'
import ChangeProfileImage from '@/app/components/updatProfile/changeProfileImage'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState, startLoading, stopLoading } from '@/lib/reduxStore/store'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import countriesNumPhone from '@/lib/countries'

export default function ProfileEditor() {

    const dispatch: AppDispatch = useDispatch();
    const { userName, userBio, userCoverImage, userProfileImage, userPhoneNumber } = useSelector((state: RootState) => state.userInfo)
    const [filesUpload, setFilesUpload] = useState<{ profile: File, cover: File }>()
    const [urlUpload, setURLUpload] = useState<{ profile: string, cover: string }>()


    const [newProfileData, setNewProfileData] = useState({
        name: userName,
        bio: userBio,
        profilePicture: userProfileImage,
        coverImage: userCoverImage,
        phoneNumber: userPhoneNumber
    })

    const addNewImage = (imageFile, imageType: "profile" | "cover") => {
        setFilesUpload(prev => {
            return ({ ...prev, [imageType]: imageFile })
        })
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setNewProfileData(prev => ({ ...prev, [name]: value }))
    }

    const handlePhoneNumber = ({ phoneNumber, country }: { phoneNumber?: string, country?: string }) => {
        const newPhoneNumber = newProfileData.phoneNumber;

        if (phoneNumber) {
            newPhoneNumber.phoneNumber = phoneNumber;
        }

        if (country) {
            newPhoneNumber.countryNumber = country;
        }

        setNewProfileData(prev => ({ ...(prev), phoneNumber: newPhoneNumber }))
    }

    const __uploadFile = async () => {
        if (!filesUpload.cover || !filesUpload.profile) return;

        dispatch(startLoading())

        const formData = new FormData();
        formData.append('file', filesUpload.cover);
        formData.append('upload_preset', 'your_unsigned_preset'); // Replace with your preset name

        try {
            const response = await fetch('https://api.cloudinary.com/v1_1/your_cloud_name/image/upload', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();
            if (response.ok) {
                setURLUpload({ profile: data.secure_url, cover: data.secure_url });
            } else {
                console.error('Upload failed:', data);
            }
        } catch (error) {
            console.error('Error uploading file:', error);
        } finally {
            dispatch(stopLoading())
        }
    };

    function handleSubmit(event): void {
        throw new Error('Function not implemented.')
    }

    return (
        <div className="min-h-screen bg-background py-8 px-0 md:px-4">
            <div className="max-w-4xl mx-auto">
                <Card className='bg-foreground'>
                    <CardHeader>
                        <CardTitle className='text-whity'>Edit Profile</CardTitle>
                        <CardDescription className='text-whity'>Update your personal information</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit}>
                            <div className="space-y-2">
                                <ChangeCoverImage setFile={addNewImage} setUploadedUrl={undefined} />
                                <ChangeProfileImage />

                                <div className="space-y-2 flex-grow">
                                    <Label htmlFor="name">Name</Label>
                                    <Input
                                        id="name"
                                        name="name"
                                        value={newProfileData.name}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div className='grid grid-cols-1 md:grid-cols-2 md:flex-row w-full gap-2 justify-between'>

                                    <div className="space-y-2 flex-grow">
                                        <Label htmlFor="phoneNumber">Phone Number</Label>
                                        <div className='flex border rounded-md h-fit mt-2'>

                                            <Select>
                                                <SelectTrigger onSelect={(e) => console.log(e)} className="w-[50%] p-2 text-whity border-0 border-r rounded-none border-whity m-0 ring-0 outline-none focus-visible:ring-0">
                                                    Select Country
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {
                                                        countriesNumPhone.countries.map((country, index) => (
                                                            <SelectItem key={Math.random()} value={Math.random() + ""}>
                                                                {country.name} <small className='text-gray-600'>{country.code}</small>
                                                            </SelectItem>
                                                        ))
                                                    }

                                                </SelectContent>
                                            </Select>

                                            <Input
                                                className='border-0 w-full m-0 p-2 ring-0 outline-none focus-visible:ring-0'
                                                id="phoneNumber"
                                                name="phoneNumber"
                                                value={newProfileData.phoneNumber?.phoneNumber}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2 flex-grow">
                                        <Label htmlFor="address">Address</Label>
                                        <Input
                                            id="address"
                                            name="address"
                                            value={newProfileData.name}
                                            onChange={handleInputChange}
                                        />
                                    </div>

                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="bio">Bio</Label>
                                    <Textarea
                                        rows={8}
                                        id="bio"
                                        name="bio"
                                        value={newProfileData.bio}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter>
                        <Button type="submit" onClick={handleSubmit}>Save Changes</Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}