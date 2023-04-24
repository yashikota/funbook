import { useState } from "react";
import { Link, Box, AppBar, Toolbar, Typography, Collapse, IconButton } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';

import Function from "./Function";
import Language from "./Language";
import Search from "./Search";

export const Header = () => {
    const isSmallScreen = window.innerWidth <= 830;

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <>
            <Box
                sx={{
                    flexGrow: 1,
                    minHeight: 44,
                }}
            >
                <AppBar
                    sx={{
                        position: "fixed",
                        minHeight: 64,
                    }}
                >
                    <Toolbar
                        sx={{
                            minHeight: 64,
                            backgroundColor: "#424242",
                        }}>

                        {/* ロゴとアプリ名 */}
                        <Typography
                            variant="h5"
                            component="div"
                            sx={{ flexGrow: 1 }}>
                            <Link
                                sx={{ textDecoration: "none", color: "white", mr: 1 }}
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://funbook.pages.dev">
                                <img
                                    src="https://1.bp.blogspot.com/-BYOigKcBTGY/VkxLkKfHwWI/AAAAAAAA0n0/7Mb5mGxI6L8/s800/dictionary.png"
                                    alt="logo"
                                    width="32"
                                    height="32"
                                    style={{ verticalAlign: "middle" }}
                                />
                                &nbsp;FunBook
                            </Link>
                        </Typography>

                        {isSmallScreen ? (
                            // 端末のサイズが小さい場合
                            <IconButton
                                onClick={handleClick}
                                aria-label="menu"
                                sx={{
                                    color: "white",
                                    variant: "outlined",
                                    border: "1px solid white",
                                    borderRadius: "5px",
                                    ml: 1,
                                }}
                            >
                                {open ? <CloseIcon /> : <MenuIcon />}
                            </IconButton>
                        ) : (
                            // 端末サイズが大きい場合
                            <>
                                {/* 言語選択 */}
                                <Language isSmallScreen={isSmallScreen} />

                                {/* 検索バー */}
                                <Function isSmallScreen={isSmallScreen} />

                                {/* 検索アイコン */}
                                <Search isSmallScreen={isSmallScreen} />
                            </>
                        )}
                    </Toolbar>
                </AppBar>

                {/* 端末サイズが小さい場合 */}
                <Collapse
                    sx={{
                        position: "fixed",
                        top: 64,
                        width: "100%",
                        zIndex: 1
                    }}
                    in={open}
                >
                    <Box sx={{ p: 2, backgroundColor: "#424242" }}>
                        <>
                            {/* 言語選択 */}
                            <Language isSmallScreen={isSmallScreen} />

                            {/* 検索バー */}
                            <Function isSmallScreen={isSmallScreen} />

                            {/* 検索アイコン */}
                            <Search isSmallScreen={isSmallScreen} />
                        </>
                    </Box>
                </Collapse>

            </Box>
        </>
    );
}
