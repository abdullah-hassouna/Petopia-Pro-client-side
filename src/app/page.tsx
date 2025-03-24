// 'use client'
import TrindingSidebar from './components/sidebars/TrendingSidebar'
// import { AppDispatch, RootState, startLoading, stopLoading } from '@/lib/reduxStore/store'
// import { useDispatch, useSelector } from 'react-redux'
import PostContainer from './components/Post/PostsContainer'
import PostFormCreation from './components/PostForms/CreatePostForms'
import ContainerHeader from './components/Post/PostContainerHeader'

function Home() {
  // const dispatch: AppDispatch = useDispatch()
  // const isLoading = useSelector((state: RootState) => state.loading.isLoading)
  // const userName = useSelector((state: RootState) => state.user.userName)

  return (
    <div className="w-full mb-14 md:mb-0 ">
      <div className="flex justify-between  overflow-hidden">
        {/* <h1 className="text-3xl font-bold">Welcom Back, {userName}!</h1>
        <button onClick={() => dispatch(startLoading())}>Start Loading</button>
        <button onClick={() => dispatch(stopLoading())}>Stop Loading</button>
        {isLoading ? <h2>loading...</h2> : <h2>Done Loading!</h2>} */}
        <div className="flex flex-col justify-between items-center mx-auto w-full">
          <PostFormCreation
            userInfo={{
              fullName: 'Haitham AbuLamdi',
              userImage: 'https://cdn.pixabay.com/photo/2023/08/18/15/02/cat-8198720_960_720.jpg',
            }}
          />
          <ContainerHeader header={'Feeds'} />
          <PostContainer
            posts={[{ tag: 'adoption' }, { tag: 'help' }, { tag: 'discuss' }, { tag: 'product' }, { tag: 'other' }]}
          />
        </div>

        <TrindingSidebar />
      </div>
    </div>
  )
}

export default Home
