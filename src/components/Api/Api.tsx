import { useRecoilValue } from "recoil";
import { languageState, functionState, responseState } from "../Store/State.tsx";

export default async function Api() {
    const language = useRecoilValue(languageState);
    const func = useRecoilValue(functionState);
    const response = useRecoilValue(responseState);

    console.log(language, func, response);

    const url = "http://nem-lab.net:9669/funbook/api/Search";

    const form = new FormData();
    form.append("language", language);
    form.append("function", func);
    response.forEach(lang => {
        form.append("response[]", lang);
    });

    const fetchData = async () => {
        const res = await fetch(url, {
            method: "POST",
            body: form,
        });
        const data = await res.json();
        console.log(data);
        return data;
    }

    fetchData();
}

// import { useState, useEffect } from 'react'

// interface Post {
//     id: number
//     title: string
// }

// const Api = () => {
//     const [posts, setPosts] = useState<Post[]>([])

//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/posts', { method: 'GET' })
//             .then(res => res.json())
//             .then(data => {
//                 setPosts(data)
//             })
//     }, [])

//     return (
//         <div>
//             <ul>
//                 {
//                     posts.map(post => <li key={post.id}>{post.title}</li>)
//                 }
//             </ul>

//         </div>
//     )
// }

// export default Api
