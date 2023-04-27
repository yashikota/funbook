import { Link, Box, AppBar, Toolbar, Typography, Button } from "@mui/material";

// import TrendingUpIcon from "@mui/icons-material/TrendingUp";
// import BookmarkIcon from "@mui/icons-material/Bookmark";

export const Header = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1, minHeight: 80 }}>
                <AppBar sx={{ position: "fixed", minHeight: 64, backgroundColor: "#424242" }}>
                    <Toolbar sx={{ minHeight: 64, backgroundColor: "#424242" }}>

                        {/* ロゴとアプリ名 */}
                        <Typography
                            variant="h5"
                            component="div"
                            sx={{ flexGrow: 1 }}>
                            <Link
                                sx={{ textDecoration: "none", color: "white", mr: 1 }}
                                rel="noopener noreferrer"
                                href="https://funbook.pages.dev">
                                <img
                                    src="https://raw.githubusercontent.com/yashikota/funbook/master/public/icon.png"
                                    alt="logo"
                                    width="32"
                                    height="32"
                                    style={{ verticalAlign: "middle" }}
                                />
                                &nbsp;FunBook (β版)
                            </Link>
                        </Typography>

                        {/* ご意見箱へのボタン */}
                        <Button
                            sx={{ color: "white", mr: 1, borderColor: "white" }}
                            variant="outlined"
                            href="https://forms.gle/NT8qVGv1YKXeg7899"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            ご意見はこちらから
                        </Button>

                        {/* ランキングボタン */}
                        {/* <IconButton
                            sx={{ color: "white", mr: 1 }}
                            aria-label="ranking"
                        >
                            <TrendingUpIcon />
                        </IconButton> */}

                        {/* ブックマークボタン */}
                        {/* <IconButton
                            sx={{ color: "white" }}
                            aria-label="bookmark"
                        >
                            <BookmarkIcon />
                        </IconButton> */}

                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
}
