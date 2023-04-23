import SourceCode from "./SourceCode";

// UIライブラリ
import { Card, CardContent, Typography } from "@mui/material";

// ボタン
import ModalButton from "./buttons/Modal";
import BookMarkButton from "./buttons/BookMark";
import ShareButton from "./buttons/Share";

// カードコンポーネント
export const MediaCard = (props: { language: string; func: string; code: string; }) => {
    const { language, func, code } = props;

    return (
        <>
            <Card sx={{ margin: "auto", border: 1 }}>
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
                        textAlign="left"
                    >
                        {func}
                    </Typography>

                    {/* ソースコード */}
                    <SourceCode language={language} code={code} />

                    {/* ボタン */}
                    <ModalButton />
                    <BookMarkButton />
                    <ShareButton />

                </CardContent>
            </Card >
        </>
    );
};
