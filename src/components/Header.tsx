import { Link } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export const Header = () => {
    return (
        <>
            <Box>
                <Toolbar
                    sx={{
                        minHeight: 64,
                        backgroundColor: "#424242",
                    }}>

                    {/* ロゴ */}
                    <Typography
                        variant="h5"
                        component="div"
                        sx={{ flexGrow: 1 }}>
                        <Link
                            sx={{ textDecoration: "none", color: "white" }}
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

                </Toolbar>
            </Box>
        </>
    );
}
