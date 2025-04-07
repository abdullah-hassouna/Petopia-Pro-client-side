import { tCategories } from "@/lib/utils/categoryColor"

interface PostDetails {
    bookmarkCount: number;
    category: { title: string };
    categoryId: number;
    commentsCount: number;
    createdAt: string;
    id: string;
    likesCount: number;
    postContent: string;
    productId: Product;
    updatedAt: string;
    userId: string;
    pet: Pet,
    product: Product,
}


interface Pet {
    dob: string;
    gender: number;
    healthStatus: string;
    ownerId: string;
    petImage: string;
    petName: string;
    type: string;
    id: string
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
    user: UserProps,
    bookmarkCount: number;
    category: { title: string };
    categoryId: number;
    commentsCount: number;
    comments: CommentsProps[],
    createdAt: string;
    id: string;
    images: Image[];
    likesCount: number;
    postContent: string;
    productId: Product;
    updatedAt: string;
    userId: string;
    pet: Pet,
    product: Product,
}

interface CommentsProps {
    user: UserProps,
    commentText: string
    id: string
    createdAt: string
}

interface UserProps {
    fullName: string,
    userImage: string,
    isAdmin: boolean
}

interface Image {
    [key: string]: any;
}

export type { Pet, Product, PostDetails, PostProps, CommentsProps }