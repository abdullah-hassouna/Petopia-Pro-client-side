"use client"

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
    PhoneInput
} from "@/components/ui/phoneInput";
import ChangeCoverImage from '@/app/components/updatProfile/changeCoverImage'
import ChangeProfileImage from '@/app/components/updatProfile/changeProfileImage'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/lib/reduxStore/store'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { z, } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Text } from 'iconsax-react'
import { isValidPhoneNumber } from 'react-phone-number-input'
import { Textarea } from '@/components/ui/textarea'


export default function ProfileEditor() {

    const dispatch: AppDispatch = useDispatch();
    const { userName, userBio, userCoverImage, userProfileImage, userPhoneNumber } = useSelector((state: RootState) => state.userInfo)
    const [filesUpload, setFilesUpload] = useState<{ profile: File, cover: File }>()

    const [newProfileData, setNewProfileData] = useState({
        name: userName,
        bio: userBio,
        profilePicture: userProfileImage,
        coverImage: userCoverImage,
        phoneNumber: userPhoneNumber
    })

    const formSchema = z.object({
        display_name:
            z.string()
                .min(5, {
                    message: "Username must be at least 5 characters.",
                })
                .max(20, {
                    message: "Username must be at most 20 characters."
                })
                .optional(),

        bio: z.string().superRefine((value, ctx) => {
            // Check if the Bio are empty
            if (!value.trim()) return

            const valueArray = value.trim().split(" ").slice(0, 5);

            // Check if the each word are 3 or more characters
            if (valueArray.length === valueArray.filter(word => word.length > 3).length) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "Each word in the bio must be at least 3 characters.",
                })
            }

            // Check if there 5 words (because it easy as first step)
            if (valueArray.length) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "The bio must be at least 5 words.",
                })
            }
        }).optional(),
        address: z.string()
            .superRefine((value, ctx) => {
                // Check if the Bio are empty
                if (!value.trim()) return

                const valueArray = value.trim().split(" ").slice(0, 2);

                // Check if the each word are 3 or more characters
                if (valueArray.length === valueArray.filter(word => word.length > 3).length) {
                    ctx.addIssue({
                        code: z.ZodIssueCode.custom,
                        message: "Country name must be at least 3 characters.",
                    })
                }

                // Check if there 5 words (because it easy as first step)
                if (valueArray.length) {
                    ctx.addIssue({
                        code: z.ZodIssueCode.custom,
                        message: "The address must containe the Country and the state.",
                    })
                }
            }).optional(),
        phone_number: z.string()
            .refine(isValidPhoneNumber, { message: "Invalid phone number" })
            .optional()
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema)
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

    // const uploadFile = async (file) => {
    //     console.log("Run Upload", filesUpload)
    //     if (!file) return;

    //     dispatch(startLoading())

    //     const formData = new FormData();
    //     formData.append('file', file);

    //     formData.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET); // Replace with your preset name

    //     try {
    //         const response = await fetch(process.env.NEXT_PUBLIC_CLOUDINARY_API_URL, {
    //             method: 'POST',
    //             body: formData,
    //         });

    //         const data = await response.json();
    //         if (response.ok) {
    //             console.log(data)
    //             // setURLUpload({ profile: data.secure_url, cover: data.secure_url });
    //         } else {
    //             console.error('Upload failed:', data);
    //         }
    //     } catch (error) {
    //         console.error('Error uploading file:', error);
    //     } finally {
    //         dispatch(stopLoading())
    //     }
    // };

    async function handleSubmit(values: z.infer<typeof formSchema>) {
        try {
            // await uploadFile(filesUpload.profile)
            // await uploadFile(filesUpload.cover)
            console.log("first")
            console.log(values);
            //   toast(
            //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            //       <code className="text-white">{JSON.stringify(values, null, 2)}</code>
            //     </pre>
            //   );
        } catch (error) {
            //   console.error("Form submission error", error);
            //   toast.error("Failed to submit the form. Please try again.");
        }
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
                        <Form {...form}>
                            <form className='space-y-2' onSubmit={form.handleSubmit(handleSubmit)}>
                                <ChangeCoverImage setFile={addNewImage} setUploadedUrl={undefined} />
                                <ChangeProfileImage setFile={addNewImage} setUploadedUrl={undefined} />
                                <br />
                                <FormField
                                    control={form.control}
                                    name="display_name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className='capitalize'>{field.name.replace("_", " ")}</FormLabel>
                                            <FormControl>
                                                <Input placeholder={userName} {...field} />
                                            </FormControl>
                                            <FormDescription>Your {field.name} must be atleast 5 characters.</FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <div className='grid grid-cols-1 md:grid-cols-2 md:flex-row w-full gap-2 justify-between'>
                                    <FormField
                                        control={form.control}
                                        name="address"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className='capitalize'>{field.name}</FormLabel>
                                                <FormControl>
                                                    <Input placeholder={userName} {...field} />
                                                </FormControl>
                                                <FormDescription>Your {field.name} must be atleast 5 characters.</FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="phone_number"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className='capitalize'>{field.name}</FormLabel>
                                                <FormControl className="w-full">
                                                    <PhoneInput placeholder="Enter a phone number" {...field} />
                                                </FormControl>
                                                <FormDescription>Enter your phone number.</FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                </div>

                                <FormField
                                    control={form.control}
                                    name="bio"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className='capitalize'>{field.name}</FormLabel>
                                            <FormControl >
                                                <Textarea
                                                    placeholder="Placeholder"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <Button onClick={() => {
                                                field.value = `Hello`;
                                            }} className='flex cursor-pointer justify-center items-center'>
                                                <Text className='h-5 w-5' color='var(--background)' />
                                                Add the Previous Bio to Edit
                                            </Button>
                                            <FormDescription>Your {field.name} must be atleast 5 characters.</FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </form>
                        </Form>


                    </CardContent>
                    <CardFooter>
                        <Button type="submit" onClick={form.handleSubmit(handleSubmit)}>Save Changes</Button>
                    </CardFooter>
                </Card>
            </div>
        </div >
    )
}