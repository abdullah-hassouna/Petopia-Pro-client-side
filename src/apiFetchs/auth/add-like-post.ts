import { CommentsProps, } from '@/app/interfaces/postInterface'
import authedAxios from '@/auth/authedAxios'

async function likePost(postId: string) {
    let comments: CommentsProps[] = []
    let error: string = (null)
    console.log("calls comments")

    try {
        const response = await authedAxios.post(`comments/${postId}`,
            { data: 'yourData' }
        )
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

export default likePost