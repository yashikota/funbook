import { useRecoilValue, useRecoilState } from "recoil";
import { languageState, functionState, responseState, resultState } from "../Store/State.tsx";
import { useState } from "react";

// export default function Api() {
//     const language = useRecoilValue(languageState);
//     const func = useRecoilValue(functionState);
//     const response = useRecoilValue(responseState);

//     const url = "https://nem-lab.net:9669/funbook/api/search";
//     const [data, setData] = useRecoilState(resultState);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState<Error | null>(null);

//     const fetchData = async () => {
//         setLoading(true);
//         try {
//             const form = new FormData();
//             form.append("language", language);
//             form.append("function", func);
//             response.forEach(lang => {
//                 form.append("response[]", lang);
//             });

//             const res = await fetch(url, {
//                 method: "POST",
//                 body: form,
//             });

//             const json = await res.json();
//             setData(json);
//         } catch (e: unknown) {
//             if (e instanceof Error) {
//                 setError(e);
//             } else {
//                 setError(new Error("Unknown error"));
//             }
//         }
//         setLoading(false);
//     }

//     fetchData();
// }

export default function Api() {
    return useRecoilValue(resultState);
}
