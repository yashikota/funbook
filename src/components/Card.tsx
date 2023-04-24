import SourceCode from "./SourceCode";

// UIライブラリ
import { Card, CardContent, Typography } from "@mui/material";

// ボタン
import ModalButton from "./Buttons/Modal";
import BookMarkButton from "./Buttons/BookMark";
import ShareButton from "./Buttons/Share";

// カードコンポーネント
export const MediaCard = (props: { language: string; func: string; code: string; }) => {
    const { language, func, code } = props;

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

                    {/* ボタン */}
                    <ShareButton />
                    <BookMarkButton />
                    <ModalButton />

                </CardContent>
            </Card >
        </>
    );
};
