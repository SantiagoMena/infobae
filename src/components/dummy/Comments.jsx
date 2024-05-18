import Comment from "@/components/dummy/Comment";
import {useEffect, useState} from "react";
import {getCommentsByPost} from "@/services/dummyapi/comment";

export default function Comments({ postId }) {
    const [comments, setComments] = useState();

    // Obtener comentarios
    useEffect(() => {
        async function getComments() {
            // Obtener comentarios API
            const commentsApi = await getCommentsByPost(postId);
            if(commentsApi.length > 0) {
                setComments(commentsApi);
            }
        }

        getComments().catch(console.error);
    }, [postId]);

    return (
        <div className="overflow-y-scroll h-96">
            {
                comments ?
                    comments.map((comment) => (<Comment key={comment.id} comment={comment}/>))
                    : <p className="text-black">Sin Comentarios....</p>
            }
        </div>

    );
}