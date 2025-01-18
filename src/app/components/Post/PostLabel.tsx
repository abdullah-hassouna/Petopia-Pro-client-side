const PostLabel = (props: { title: string }) => {
  let colorScheme = ['adoption', 'help', 'discuss', 'product'].includes(props.title) ? props.title : 'help'

  const bgColorClass = `bg-${colorScheme.toLowerCase()}`
  return (
    <div
      className={`inline-flex self-end  items-center flex-shrink-0 absolute text-whity -translate-x-full left-[103.4%] sm:left-[101.5%] md:left-[102%] z-[5] top-6 h-8 text-sm sm:text-base`}
    >
      <div
        className={`w-full h-full ${bgColorClass} text-whity px-4 sm:px-8 py-1 flex rounded-l-lg justify-center items-center  z-[5] `}
      >
        <p className="font-light capitalize">{props.title}</p>
      </div>
    </div>
  )
}

export default PostLabel

/* Group 2 */
