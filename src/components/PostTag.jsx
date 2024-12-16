function PostTag({tagName}) {
  return (
    <span className={`badge text-bg-primary me-1 ${tagName}`}>{tagName}</span>
  )
}

export default PostTag;