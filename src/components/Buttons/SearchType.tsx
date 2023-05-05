import { useState } from "react";
import { ToggleButton, ToggleButtonGroup, Box } from "@mui/material";

import LightbulbIcon from "@mui/icons-material/Lightbulb";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

import { useRecoilValue } from "recoil";
import { isMobileState } from "../Store/State";

export default function SearchType() {
    const isMobile = useRecoilValue(isMobileState);

    const [alignment, setAlignment] = useState<string | null>("left");

    const handleAlignment = (
        _: React.MouseEvent<HTMLElement>,
        newAlignment: string | null,
    ) => {
        if (newAlignment !== null) {
            setAlignment(newAlignment);
        }
    };

    return (
        isMobile ? (
            // モバイルの場合
            <Box sx={{ width: "96%" }}>
                <ToggleButtonGroup
                    value={alignment}
                    exclusive
                    fullWidth
                    onChange={handleAlignment}
                    aria-label="text alignment"
                    size="small"
                    sx={{
                        m: 1,
                        '& .MuiToggleButtonGroup-grouped': {
                            border: 1,
                            borderColor: "#000",
                            backgroundColor: "#fff",
                            color: "#000",
                            '&.Mui-selected': {
                                backgroundColor: "#90caf9",
                                color: "#424242",
                                '&:hover': {
                                    backgroundColor: "#90caf9",
                                    color: "#424242",
                                },
                            },
                        },
                    }}
                >
                    <ToggleButton value="left" aria-label="left aligned">
                        <LightbulbIcon />
                        通常検索
                    </ToggleButton>
                    <ToggleButton value="center" aria-label="centered">
                        <QuestionMarkIcon />
                        あいまい検索
                    </ToggleButton>
                </ToggleButtonGroup>
            </Box>
        ) : (
            // モバイル以外の場合
            <ToggleButtonGroup
                value={alignment}
                exclusive
                onChange={handleAlignment}
                aria-label="text alignment"
                size="small"
                sx={{
                    mr: 1,
                    '& .MuiToggleButtonGroup-grouped': {
                        border: 1,
                        borderColor: "#fff",
                        backgroundColor: "#424242",
                        color: "#fff",
                        '&.Mui-selected': {
                            backgroundColor: "#90caf9",
                            color: "#424242",
                            '&:hover': {
                                backgroundColor: "#90caf9",
                                color: "#424242",
                            },
                        },
                    },
                }}
            >
                <ToggleButton value="left" aria-label="left aligned">
                    <LightbulbIcon />
                    通常検索
                </ToggleButton>
                <ToggleButton value="center" aria-label="centered">
                    <QuestionMarkIcon />
                    あいまい検索
                </ToggleButton>
            </ToggleButtonGroup>
        )
    );
}
