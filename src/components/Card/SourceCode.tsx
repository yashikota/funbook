import { useEffect } from "react";
import { Box } from "@mui/material";

import CopyButton from "../Buttons/Copy.tsx";

import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";

// 行番号
import "prismjs/plugins/line-numbers/prism-line-numbers.js"
import "prismjs/plugins/line-numbers/prism-line-numbers.css"

// 言語ごとのスタイル
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
        const lang = language.toLowerCase();
        if (lang === "c++") {
            return "cpp";
        } else if (lang === "c#") {
            return "csharp";
        } else if (lang === "js" || lang === "ts" || lang === "typescript") {
            return "javascript";
        } else if (lang === "py") {
            return "python";
        } else if (lang === "rs") {
            return "rust";
        }
        return lang;
    };

    return (
        <Box
            sx={{
                position: "relative",
                display: "flex",
                fontSize: "16px",
            }}
        >
            <pre className="line-numbers" style={{ width: "100%" }}>
                <code className={`language-${getLanguage()}`}>
                    {code}
                </code>
            </pre>
            <CopyButton code={code} />
        </Box >
    );
}
