import React from "react";
import { useEffect } from "react";

// UIライブラリ
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Snackbar } from "@mui/material";

// シンタックスハイライト用
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-python";
import "prismjs/components/prism-java";
import "prismjs/components/prism-go";
import "prismjs/components/prism-rust";
import "prismjs/components/prism-c";
import "prismjs/components/prism-cpp";

// カードコンポーネント
export const MediaCard = (props: { title: string; code: string; url: string; }) => {
    const { title, code, url } = props;

    // コピー通知
    const [open, setOpen] = React.useState(false);

    // Prismの初期化
    useEffect(() => {
        Prism.highlightAll();
    }, [code]);

    // コードをクリップボードにコピー
    const handleCopyClick = () => {
        navigator.clipboard.writeText(code);
        setOpen(true);
    };

    // コピー通知を閉じる
    const handleClose = () => {
        setOpen(false);
    };

    // 言語名を取得
    const getLanguage = () => {
        if (title === "C++") {
            return "cpp";
        }
        return title.toLowerCase();
    };

    return (
        <>
            <Card sx={{ margin: "auto", border: 1 }}>
                <CardContent>

                    {/* タイトル */}
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        margin="auto"
                        textAlign="center"
                    >
                        {title}
                    </Typography>

                    {/* ソースコード */}
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                            whiteSpace: "pre-wrap",
                            position: "relative",
                            display: "flex",
                            alignItems: "center",
                            "& code": {
                                // padding: "2px 5px",
                                lineHeight: "1.25",
                                overflowX: "auto",
                                display: "block",
                                width: "100%",
                                "& .token.comment": {
                                    color: "gray",
                                },
                                "& .token.keyword, & .token.operator": {
                                    fontWeight: "bold",
                                }
                            },
                        }}
                    >
                        <pre style={{ width: "100%" }}>
                            <code className={`language-${getLanguage()}`}>
                                {code}
                            </code>
                        </pre>
                        <Button
                            size="small"
                            onClick={handleCopyClick}
                            sx={{
                                position: "absolute",
                                top: 10,
                                right: -10,
                                opacity: 0.5,
                                transition: "opacity 0.2s ease-in-out",
                                "&:hover": {
                                    opacity: 1
                                },
                            }}
                        >
                            <img src="https://zenn.dev/images/copy-icon.svg" alt="copy" width="25vw" />
                        </Button>
                        <Snackbar open={open} autoHideDuration={1500} onClose={handleClose} message="コピーしました！" />
                    </Typography>
                </CardContent>

                {/* ボタン */}
                <CardActions>
                    <Button
                        size="large"
                        variant="contained"
                        sx={{
                            margin: "auto",
                            px: 5,
                        }}
                        href={url}
                        target="_blank"
                        rel="noopener"
                    >
                        詳しく見る
                    </Button>
                </CardActions>
            </Card >
        </>
    );
};
