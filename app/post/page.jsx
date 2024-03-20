import Link from "next/link";

const getdata=async()=>{
    const res = await fetch("https://fakestoreapi.com/products",{cache:'no-store'});
     if (!res.ok) {
       throw new Error ("Something went wrong")
     }
     return res.json()
   }
const Post = async() => {
    const posts=await getdata()
    return (
        <div>
        {posts.map(post => (
            <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md">
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
                <button ><Link href={`/post/${post.id}`}>View
                </Link></button>
            </div>
    
        ))}
    </div>
);
}


export default Post;