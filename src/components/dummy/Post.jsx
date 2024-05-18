import Owner from "@/components/dummy/Owner";
import {useEffect, useState} from "react";
import Modal from "@/components/Modal";
import Comments from "@/components/dummy/Comments";

export default function Post({ post }) {
    const [selectedPost, setSelectedPost] = useState(false);

    return (
        <div className="bg-white p-5 rounded-lg shadow-md flex flex-col justify-between h-full">
            <div className="h-20">
                <p className="text-gray-700 mb-2 text-center">{post.text}</p>
            </div>
            <div className="w-full h-48 overflow-hidden rounded-lg mb-2">
                <img src={post.image} alt="Post Image" className="w-full h-full object-cover"/>
            </div>
            <p className="text-gray-500 text-sm">{post.publishDate}</p>
            <p className="text-gray-500 text-sm">({post.likes}👍)</p>
            <p className="text-gray-500 text-sm">
                {post.tags.map(tag => `#${tag} `)}
            </p>
            <Owner owner={post.owner} />
            {
                selectedPost ?
                    <Modal onClose={() => setSelectedPost(false)} isVisible={selectedPost}>
                        <Comments postId={post.id} />
                    </Modal>
                    : null
            }

            <div className="mt-auto flex items-center justify-center">
                <a href="#"
                   className="text-black relative bottom-0 inline-block bg-gray-200 px-4 py-2 rounded-lg shadow hover:bg-gray-300 transition duration-300"
                   onClick={() => setSelectedPost(true)}>
                    💬 Ver Comentarios
                </a>
            </div>
        </div>
    );
}