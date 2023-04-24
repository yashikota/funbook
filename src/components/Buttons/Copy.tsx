import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { IconButton, Snackbar } from "@mui/material";
import { useState } from "react";

export default function CopyButton({ code }: { code: string }) {
    // コピー通知
    const [copyOpen, setCopyOpen] = useState(false);

    // コードをクリップボードにコピー
    const handleCopyClick = () => {
        navigator.clipboard.writeText(code);
        setCopyOpen(true);
    };

    // コピー通知を閉じる
    const handleCopyClose = () => {
        setCopyOpen(false);
    };

    // 閉じるまでの時間
    const duration = 1500;

    return (
        <>
            <IconButton
                size="small"
                onClick={handleCopyClick}
                sx={{
                    position: "absolute",
                    top: 10,
                    right: 0,
                    color: "white",
                    opacity: 0.5,
                    transition: "opacity 0.2s ease-in-out",
                    "&:hover": {
                        opacity: 1
                    },
                }}
            >
                <ContentCopyIcon />
            </IconButton>
            <Snackbar open={copyOpen} autoHideDuration={duration} onClose={handleCopyClose} message="コピーしました！" />
        </>
    );
}
