import { Grid, GlobalStyles, Alert, Link, Box } from "@mui/material";

import { MediaCard } from "./components/Card/Card.tsx";
import { Header } from "./components/Header/Header.tsx";
// import Navigation from "./components/Navigation/Navigation.tsx";
import Search from "./components/Search/Search.tsx";
// import SearchType from "./components/Buttons/SearchType.tsx";

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
    const newKeys: string[] = keys.filter(key => key.toLowerCase() !== language.toLowerCase());

    return (
        <>
            {/* スタイルの初期化 */}
            <GlobalStyles styles={{ body: { margin: 0, padding: 0 } }} />

            {/* ヘッダー */}
            <Header />

            {/* 検索タイプ */}
            {/* {useRecoilValue(isMobileState) ? (<SearchType />) : (<></>)} */}

            {/* 終了した旨の表示を追加 */}
            <Box display="flex" justifyContent="center">
                <Alert severity="error">
                    開発を終了したため、使用できません。リポジトリはこちら→
                    <Link href="https://github.com/yashikota/funbook">フロントエンド</Link>，
                    <Link href="https://github.com/t-nobuyuki0330/mbs-back">バックエンド</Link>
                </Alert>
            </Box>

            {/* 検索 */}
            <Search />

            {/* カード */}
            <Grid
                sx={{ mt: "auto", mb: "auto", p: 1, pb: 8 }}
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

            {/* ナビゲーション */}
            {/* <Navigation /> */}

        </>
    );
}
