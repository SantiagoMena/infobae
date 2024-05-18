'use client';
import {useEffect, useState} from "react";
import Post from "@/components/dummy/Post";
import {getPosts} from "@/services/dummyapi/post";


export default function Posts() {
    // Post obtenidos desde la API
    const [ posts, setPosts ] = useState([]);
    // Posts filtrados por tag
    const [ activePosts, setActivePosts ] = useState();
    // Tags sin repetir en base a los posts obtenidos
    const [tags, setTags] = useState([]);

    // Carga inicial de datos
    useEffect(() => {
        async function getAllPosts() {
            // Obtener los parametros GET "limit" & "page"
            const params = new URLSearchParams(window.location.search);
            const limit = params.get('limit');
            const page = params.get('page');

            try {
                // Obtener los posts del API
                const postsApi = await getPosts(limit ?? 20, page ?? 0);
                // Asignar los posts del api
                setPosts(postsApi);
                // Por defecto dejar todos lo sposts como activos
                setActivePosts(postsApi);

                // Obtener los tags de todos los posts obtenidos
                let totalTags = [];
                postsApi.map(post => post.tags.map((tag) => totalTags.push(tag)));
                // Tags sin repetir
                const filteredTags = [...new Set(totalTags)];
                setTags(filteredTags);
            } catch (e) {
                console.error(e);
            }
        }

        // Ejecutar función inicial
        getAllPosts().catch(console.error);

    }, []);

    // State para tag seleccionado
    const [selectedTag, setSelectedTag] = useState(null);
    useEffect(() => {
        // Si un tag ha sido seleccionado filtrar los posts
        if(selectedTag) {
            setActivePosts(posts.filter(post => post.tags.includes(selectedTag)))
        } else {
            // si no hay tag seleccionado mostrar todos los posts
            setActivePosts(posts);
        }

    }, [selectedTag]);

    return (
        <>
            <section>
                {/* Mostrar tags, si se selecciona uno previamente seleccionado se deseleccionara */}
                {
                    tags &&
                    tags.map((tag) =>
                        <a
                            href="#"
                            key={tag}
                            className={`inline-block px-3 py-1 m-1 text-sm font-medium rounded-full cursor-pointer 
                                ${ tag === selectedTag ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800' }`}
                            onClick={() => setSelectedTag(tag == selectedTag ? null : tag)}
                        >
                            #{tag}
                        </a>
                    )

                }
            </section>
            <section className={"grid gap-6 lg:grid-cols-4 md:grid-cols-2 grid-cols-1"}>
                {/* Recorrero los posts filtrados */}
                {
                    activePosts && activePosts.map((post) => <Post key={post.id} post={post} />)
                }
            </section>
        </>
    );
}