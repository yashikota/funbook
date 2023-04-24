import { useEffect } from "react";
import { Typography } from "@mui/material";

import CopyButton from "./Buttons/Copy";

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

export default function SourceCode(props: { language: string, code: string }) {
    const { language, code } = props;

    // Prismの初期化
    useEffect(() => {
        Prism.highlightAll();
    }, [code]);

    // 言語名を取得
    const getLanguage = () => {
        if (language === "C++") {
            return "cpp";
        }
        return language.toLowerCase();
    };

    return (
        <Typography
            variant="body2"
            color="text.secondary"
            sx={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                fontSize: "18px",
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
            <CopyButton code={code} />
        </Typography>
    );
}
