import { tCategories } from "@/lib/utils/categoryColor"
import { RefObject } from "react";

interface PostDetails {
    bookmarkCount: number;
    category: tCategories;
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
    // triggeredRef: RefObject<HTMLDivElement>;
    user: UserProps,
    bookmarkCount: number;
    category: tCategories;
    categoryId: number;
    commentsCount: number;
    sharesCounts: number;
    comments: CommentsProps[],
    createdAt: string;
    id: string;
    images: Image[];
    likesCount: number;
    likes: UserProps[];
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
    username?: string | undefined;
    fullName: string,
    userImage: string,
    isAdmin: boolean
}
interface LikeProps {
    relateId: string
    isComment: boolean
    createdAt: string
    updatedAt: string
    user: UserProps
    id: string
}

interface Image {
    [key: string]: any;
}

export type { Pet, Product, PostDetails, PostProps, CommentsProps, UserProps, LikeProps }