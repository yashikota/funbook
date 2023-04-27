import SourceCode from "./SourceCode";

// UIライブラリ
import { Card, CardContent, Typography } from "@mui/material";

// ボタン
// import BookMarkButton from "../Buttons/BookMark";
// import ShareButton from "../Buttons/Share";

// カードコンポーネント
export const MediaCard = (props: { language: string; args: string; code: string; func: string; return: string }) => {
    const { language, args, code, func, return: returnValue } = props;

    return (
        <>
            <Card sx={{ margin: "auto", border: 1, position: "relative" }}>
                <CardContent>

                    {/* 言語名 */}
                    <Typography
                        variant="h5"
                        component="div"
                        textAlign="left"
                    >
                        {language}
                    </Typography>

                    {/* 関数名 */}
                    <Typography
                        variant="h5"
                        component="div"
                        textAlign="center"
                    >
                        {func}
                    </Typography>

                    {/* ソースコード */}
                    <SourceCode language={language} code={code} />

                    {/* 引数 */}
                    <Typography
                        variant="h6"
                        component="div"
                        textAlign="left"
                    >
                        引数&emsp;  : {args}
                    </Typography>

                    {/* 戻り値 */}
                    <Typography
                        variant="h6"
                        component="div"
                        textAlign="left"
                    >
                        戻り値 : {returnValue}
                    </Typography>

                    {/* ボタン */}
                    {/* <ShareButton /> */}
                    {/* <BookMarkButton /> */}

                </CardContent>
            </Card >
        </>
    );
};
