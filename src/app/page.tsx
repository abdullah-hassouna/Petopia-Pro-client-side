import TrindingSidebar from './components/sidebars/TrendingSidebar'
import PostContainer from './components/Post/PostsContainer'
import PostFormCreation from './components/PostForms/CreatePostForms'
import ContainerHeader from './components/Post/PostContainerHeader'
import { PostProps } from './interfaces/postInterface';

function Home() {
  const posts = [
    {
      user: {
        id: '1',
        username: 'user1',
        fullName: 'User One',
        labelTag: 'adoption',
        userImage: 'https://placehold.co/600x400',
      },
      post: {
        id: 'post1',
        pet: {
          id: 'pet1',
          petName: 'Fluffy',
          type: 'dog',
          dob: '2020-01-01',
          gender: 1,
          healthStatus: 'healthy',
          adoptionStatus: 'available',
        },
        product: null,
        category: 'adoption',
        postContent: 'Looking for a loving home for Fluffy!',
        likesCount: 10,
        comments: [
          {
            userImage: 'https://placehold.co/600x400',
            fullName: 'Commenter One',
            username: 'commenter1',
            commentContent: 'Fluffy is adorable!',
            commentId: 'comment1',
            createdAt: '2023-10-01T12:00:00Z',
          },
          {
            userImage: 'https://placehold.co/600x400',
            fullName: 'Commenter Two',
            username: 'commenter2',
            commentContent: 'I hope Fluffy finds a great home!',
            commentId: 'comment2',
            createdAt: '2023-10-01T12:05:00Z',
          },
        ],
        bookmarkCount: 1,
        sharesCount: 3,
        images: ['https://placehold.co/600x400'],
      },
      pet: {
        id: 'pet1',
        petName: 'Fluffy',
        type: 'dog',
        dob: '2020-01-01',
        gender: 1,
        healthStatus: 'healthy',
        adoptionStatus: 'available',
      },
      product: null,
    },
    {
      user: {
        id: '2',
        username: 'user2',
        fullName: 'User Two',
        labelTag: 'help',
        userImage: 'https://placehold.co/600x400',
      },
      post: {
        id: 'post2',
        pet: {
          id: 'pet2',
          petName: 'Mittens',
          type: 'cat',
          dob: '2019-05-15',
          gender: 2,
          healthStatus: 'healthy',
          adoptionStatus: 'available',
        },
        product: null,
        category: 'help',
        postContent: 'Mittens needs a foster home!',
        likesCount: 5,
        comments: [
          {
            userImage: 'https://placehold.co/600x400',
            fullName: 'Commenter Three',
            username: 'commenter3',
            commentContent: 'Mittens is so cute!',
            commentId: 'comment3',
            createdAt: '2023-10-01T12:10:00Z',
          },
        ],
        bookmarkCount: 0,
        sharesCount: 2,
        images: ['https://placehold.co/600x400'],
      },
      pet: {
        id: 'pet2',
        petName: 'Mittens',
        type: 'cat',
        dob: '2019-05-15',
        gender: 2,
        healthStatus: 'healthy',
        adoptionStatus: 'available',
      },
      product: null,
    },
    {
      user: {
        id: '3',
        username: 'user3',
        fullName: 'User Three',
        labelTag: 'adoption',
        userImage: 'https://placehold.co/600x400',
      },
      post: {
        id: 'post3',
        pet: {
          id: 'pet3',
          petName: 'Buddy',
          type: 'dog',
          dob: '2021-03-10',
          gender: 1,
          healthStatus: 'healthy',
          adoptionStatus: 'available',
        },
        product: null,
        category: 'adoption',
        postContent: 'Buddy is looking for a forever home!',
        likesCount: 8,
        comments: [
          {
            userImage: 'https://placehold.co/600x400',
            fullName: 'Commenter Four',
            username: 'commenter4',
            commentContent: 'I love Buddy!',
            commentId: 'comment4',
            createdAt: '2023-10-01T12:15:00Z',
          },
        ],
        bookmarkCount: 1,
        sharesCount: 1,
        images: ['https://placehold.co/600x400'],
      },
      pet: {
        id: 'pet3',
        petName: 'Buddy',
        type: 'dog',
        dob: '2021-03-10',
        gender: 1,
        healthStatus: 'healthy',
        adoptionStatus: 'available',
      },
      product: null,
    },
    // Additional records (4 to 20) will follow the same structure with unique details and comments
  ] as PostProps[];

  return (
    <div className="w-full mb-14 md:mb-0 ">
      <div className="flex justify-between  overflow-hidden">
        <div className="flex flex-col justify-between items-center mx-auto w-full">
          <PostFormCreation
            userInfo={{
              fullName: 'Haitham AbuLamdi',
              userImage: 'https://cdn.pixabay.com/photo/2023/08/18/15/02/cat-8198720_960_720.jpg',
            }}
          />
          <ContainerHeader header={'Feeds'} />
          <PostContainer posts={posts} />
        </div>
        <TrindingSidebar />
      </div>
    </div>
  )
}

export default Home
