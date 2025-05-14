import { LikeProps, } from '@/app/interfaces/postInterface'
import unAuthedAxios from '@/axios/axiosCall'

async function callPostLikes(postId: string) {
    let likes: LikeProps[] = []
    let error: string = (null)

    console.log("call likes")

    try {
        const response = await unAuthedAxios.get(`likes/${postId}`)
        if (response.status === 200) {
            likes = (response.data.likes)
        } else {
            throw new Error(`Unexpected response status: ${response.status}`)
        }
    } catch (err) {
        error = (err.message || 'Failed to fetch comments')
    }

    return { likes, error }
}

export default callPostLikes