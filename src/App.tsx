import { Grid, GlobalStyles } from "@mui/material";
import { MediaCard } from "./components/Card/Card.js";
import { Header } from "./components/Header/Header.js";

import { resultState } from "./components/Store/State.js";
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

    return (
        <>
            {/* スタイルの初期化 */}
            <GlobalStyles styles={{ body: { margin: 0, padding: 0 } }} />

            {/* ヘッダー */}
            <Header />

            {/* カード */}
            <Grid
                sx={{ mt: "auto", mb: "auto", p: 1 }}
                container
                direction="row"
                spacing={3}
                alignItems="center"
                justifyContent="center">

                {keys.map(key =>
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
