import { CommentsProps, } from '@/app/interfaces/postInterface'
import unAuthedAxios from '@/axios/axiosCall'

async function callPostComments(postId: string) {
    let comments: CommentsProps[] = []
    let error: string = (null)
    console.log("calls comments")

    try {
        const response = await unAuthedAxios.get(`comments/${postId}`)
        if (response.status === 200) {
            comments = (response.data.comments)
        } else {
            throw new Error(`Unexpected response status: ${response.status}`)
        }
    } catch (err) {
        console.error('Error fetching comments:', err)
        error = (err.message || 'Failed to fetch comments')
    }

    return { comments, error }
}

export default callPostComments