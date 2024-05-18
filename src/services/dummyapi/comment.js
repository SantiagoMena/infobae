import axios from "axios";
import {dummyApiConfig} from "@/services/dummyapi/config";

export async function getCommentsByPost(post, limit = 20, page = 0){
    // Set options
    const url = `/post/${post}/comment?page=${page}&limit=${limit}`;
    const options = {
        ...dummyApiConfig,
        url,
        method: "GET"
    };

    // inicializar comentarios
    let comments = [];
    try {
        const request = await axios(options);
        // asignar comentarios
        comments = request.data.data;
    } catch (e) {
        console.error(e);
    }

    return comments;
}