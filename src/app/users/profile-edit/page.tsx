"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Separator } from "@/components/ui/separator"
import { toast } from "@/hooks/use-toast"
import { Camera, User } from 'lucide-react'
import UploadImage from '@/cloudinary/UploadImage'

export default function ProfileEditor() {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Web developer and tech enthusiast',
    profilePicture: '/placeholder.svg?height=128&width=128',
    coverImage: '/placeholder.svg?height=300&width=1000'
  })

  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setProfile(prev => ({ ...prev, [name]: value }))
  }

  const handleImageUpload = (e, type) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setProfile(prev => ({ ...prev, [type]: reader.result }))
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the updated profile data to your backend
    console.log('Updated profile:', profile)
    console.log('New password:', newPassword)
    
    // Show a success toast
    toast({
      title: "Profile updated",
      description: "Your profile has been successfully updated.",
    })
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-4xl mx-auto">
        <Card className='bg-foreground'>
          <CardHeader>
            <CardTitle className='text-whity'>Edit Profile</CardTitle>
            <CardDescription className='text-whity'>Update your personal information and profile settings</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="space-y-8">
                {/* Cover Image */}
                <div>
                  <Label htmlFor="coverImage">Cover Image</Label>
                  <div className="mt-2 relative">
                    <img
                      src={profile.coverImage || "/placeholder.svg"}
                      alt="Cover"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <Label
                      htmlFor="coverImageUpload"
                      className="absolute bottom-2 right-2 bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 cursor-pointer"
                    >
                      <Camera className="mr-2 h-4 w-4" />
                      Change Cover
                    </Label>
                    <UploadImage />
                  </div>
                </div>

                {/* Profile Picture */}
                <div className="flex items-center space-x-4">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src={profile.profilePicture} alt={profile.name} />
                    <AvatarFallback><User /></AvatarFallback>
                  </Avatar>
                  <Label
                    htmlFor="profilePictureUpload"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 cursor-pointer"
                  >
                    Change Profile Picture
                  </Label>
                  <Input
                    id="profilePictureUpload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleImageUpload(e, 'profilePicture')}
                  />
                </div>

                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={profile.name}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={profile.email}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Bio */}
                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    name="bio"
                    value={profile.bio}
                    onChange={handleInputChange}
                    rows={4}
                  />
                </div>

                <hr />

                {/* Password Change */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-whity">Change Password</h3>
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input
                      id="newPassword"
                      name="newPassword"
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm New Password</Label>
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
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