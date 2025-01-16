interface Pet {
    ownerId: string
    petName: string
    type: string
    petImage?: string
    dob: string
    gender: number
    healthStatus: string
    adoptionStatus: 'available' | 'adopted'
}

interface Product {
    id: string
    userId: string
    title: string
    stock: number
    price: number
    details: string
    rating: number
}

interface PostDetails {
    id: string
    pet?: Pet
    product?: Product
    category: string
    postContent: string
    likesCount: number
    commentsCount: number
    bookmarkCount: number
    images?: string[]
}
export type { Pet, Product, PostDetails }