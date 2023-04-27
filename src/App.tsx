import { Grid, GlobalStyles } from "@mui/material";
import { MediaCard } from "./components/Card/Card.tsx";
import { Header } from "./components/Header/Header.tsx";
import Search from "./components/Header/Search.tsx";

import { languageState, responseState, resultState } from "./components/Store/State.tsx";
import { useRecoilValue } from "recoil";

type Message = {
    [key: string]: {
        args: string;
        example: string;
        function: string;
        return: string
    };
};

export default function App() {
    const resultData = useRecoilValue(resultState);
    const message: Message = resultData.message;
    const keys = Object.keys(message);

    const language: string = useRecoilValue(languageState);
    const responses: string[] = useRecoilValue(responseState);
    const isLanguageInclude = responses.includes(language);
    const newKeys: string[] = keys.filter(key => key.toLowerCase() !== language.toLocaleLowerCase());

    return (
        <>
            {/* スタイルの初期化 */}
            <GlobalStyles styles={{ body: { margin: 0, padding: 0 } }} />

            {/* ヘッダー */}
            <Header />

            {/* 検索 */}
            <Search />

            {/* カード */}
            <Grid
                sx={{ mt: "auto", mb: "auto", p: 1 }}
                container
                direction="row"
                spacing={3}
                alignItems="center"
                justifyContent="center">

                {isLanguageInclude ?
                    keys.map(key =>
                        <Grid item xs={12} sm={6}>
                            <MediaCard
                                language={key}
                                args={message[key].args}
                                code={message[key].example}
                                func={message[key].function}
                                return={message[key].return}
                            />
                        </Grid>
                    ) : newKeys.map(key =>
                        <Grid item xs={12} sm={6}>
                            <MediaCard
                                language={key}
                                args={message[key].args}
                                code={message[key].example}
                                func={message[key].function}
                                return={message[key].return}
                            />
                        </Grid>
                    )}
            </Grid>
        </>
    );
}
