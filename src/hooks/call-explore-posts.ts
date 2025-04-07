import { PostProps } from '@/app/interfaces/postInterface'
import axios from 'axios'
import { useEffect, useState } from 'react'

function callExplorePosts(refresh?: boolean | null) {
  const [posts, setPosts] = useState<PostProps[]>([])
  const [isLoadingPosts, setIsLoadingPosts] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoadingPosts(true)
      setError(null)

      try {
        const response = await axios.get('http://localhost:3000/api/v1/posts')
        console.log('API Response:', response.data.data)

        if (response.status === 200) {
          // Assuming the API returns an array of posts directly
          setPosts( response.data.data.PostData)
        } else {
          throw new Error(`Unexpected response status: ${response.status}`)
        }
      } catch (err) {
        console.error('Error fetching posts:', err)
        setError(err.message || 'Failed to fetch posts')
      } finally {
        setIsLoadingPosts(false)
      }
    }

    fetchPosts()
  }, [refresh])

  return { isLoadingPosts, posts, error }
}

export default callExplorePosts