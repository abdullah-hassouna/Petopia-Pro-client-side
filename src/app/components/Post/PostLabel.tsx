import clsx from 'clsx'

const PostLabel = (props: { title: string }) => {
  const bgColorClass = `bg-${props.title.toLowerCase()}`
  const bgColorClass100 = `bg-${props.title.toLowerCase()}-100`

  console.log(bgColorClass)

  return (
    <div
      className={`inline-flex self-end  items-center flex-shrink-0 absolute text-whity -translate-x-full left-[101.9%] z-[5] top-6 h-8`}
    >
      <div
        className={`w-full h-full ${bgColorClass} text-whity px-[30px] py-1 flex rounded-l-lg justify-center items-center  z-[5] `}
      >
        <p className="font-light capitalize">{props.title}</p>
      </div>
    </div>
  )
}

export default PostLabel

/* Group 2 */



