const getdata=async(slug)=>{
    // const res=await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`,{cache:'no-store'})
    const res = await fetch(`https://fakestoreapi.com/products/${slug}`);
     if (!res.ok) {
       throw new Error ("Something went wrong")
     }
     return res.json()
   }
const PostNo = async({params}) => {
    const {slug}=params
    const post=await getdata(slug)
    return (
        <div className="p-4">
        <h3 className="text-lg font-semibold">{post.title}</h3>
        <p className="text-gray-600 mb-2">${post.price}</p>
        <p className="text-sm text-gray-700 mb-4">{post.description}</p>
        <div className="flex items-center">
            <span className="text-gray-700 mr-2">
                Rating: {post.rating.rate} ({post.rating.count} reviews)
            </span>
        </div>
        </div>
    )
}
export default PostNo