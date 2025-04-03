import { tCategories } from "@/lib/utils/categoryColor"

interface PostDetails {
    id: string
    pet?: Pet
    product?: Product
    category: tCategories
    postContent: string
    likesCount: number
    comments: CommentsProps[]
    bookmarkCount: number
    sharesCount: number
    images?: string[]
}

interface Pet {
    id: string
    petName: string
    type: string
    petImage?: string[]
    dob: string
    gender: number
    healthStatus: string
    adoptionStatus: 'available' | 'adopted'
}

interface Product {
    id: string
    title: string
    stock: number
    price: number
    details: string
    rating: number
    productImage?: string[]
}

interface PostProps {
    user: {
        id: string,
        username: string,
        fullName: string,
        labelTag: tCategories,
        userImage: string,
    },
    post: PostDetails,
    pet: Pet,
    product: Product
}

interface CommentsProps {
    userImage: string
    fullName: string
    username: string
    commentContent: string
    commentId: string
    createdAt: string
}

export type { Pet, Product, PostDetails, PostProps, CommentsProps }