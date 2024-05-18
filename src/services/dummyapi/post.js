import axios from "axios";
import {dummyApiConfig} from "@/services/dummyapi/config";

export async function getPosts(limit = 20, page = 0){
    // Set options dummy api
    const url = `/post?page=${page}&limit=${limit}`;
    const options = {
        ...dummyApiConfig,
        url,
        method: "GET"
    };

    // incializar posts
    let posts = [];

    try {
        const response = await axios(options);
        // asignar posts
        posts = response.data.data;
    } catch (e) {
        console.error(e);
    }

    return posts;
}