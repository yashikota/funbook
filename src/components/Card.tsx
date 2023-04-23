import { useEffect, useState } from "react";

// UIライブラリ
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Modal, Snackbar } from "@mui/material";

// シンタックスハイライト用
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";
// import "prismjs/plugins/line-numbers/prism-line-numbers.js"
// import "prismjs/plugins/line-numbers/prism-line-numbers.css"
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-python";
import "prismjs/components/prism-java";
import "prismjs/components/prism-go";
import "prismjs/components/prism-rust";
import "prismjs/components/prism-c";
import "prismjs/components/prism-cpp";

// カードコンポーネント
export const MediaCard = (props: { language: string; code: string; }) => {
    const { language, code } = props;

    // コピー通知
    const [copyOpen, setCopyOpen] = useState(false);

    // モーダル
    const [modalOpen, setModalOpen] = useState(false);

    // Prismの初期化
    useEffect(() => {
        Prism.highlightAll();
    }, [code]);

    // コードをクリップボードにコピー
    const handleCopyClick = () => {
        navigator.clipboard.writeText(code);
        setCopyOpen(true);
    };

    // コピー通知を閉じる
    const handleCopyClose = () => {
        setCopyOpen(false);
    };

    // 言語名を取得
    const getLanguage = () => {
        if (language === "C++") {
            return "cpp";
        }
        return language.toLowerCase();
    };

    const handleModalOpen = () => setModalOpen(true);
    const handleModalClose = () => setModalOpen(false);

    const style = {
        // eslint-disable-next-line @typescript-eslint/prefer-as-const
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <>
            <Card sx={{ margin: "auto", border: 1 }}>
                <CardContent>

                    {/* 言語名 */}
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        margin="auto"
                        textAlign="center"
                    >
                        {language}
                    </Typography>

                    {/* ソースコード */}
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                            position: "relative",
                            display: "flex",
                            alignItems: "center",
                            "& code": {
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
                        <pre className="line-numbers" style={{ width: "100%" }}>
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
                        <Snackbar open={copyOpen} autoHideDuration={1500} onClose={handleCopyClose} message="コピーしました！" />
                    </Typography>
                </CardContent>

                {/* モーダル */}
                <CardActions>
                    <Button
                        size="large"
                        onClick={handleModalOpen}
                        variant="contained"
                        color="primary"
                        sx={{
                            margin: "auto",
                            px: 5,
                        }}
                    >
                        詳しく見る
                    </Button>
                    <Modal
                        open={modalOpen}
                        onClose={handleModalClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                関数名
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                引数
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                戻り値
                            </Typography>
                        </Box>
                    </Modal>
                </CardActions>
            </Card >
        </>
    );
};
