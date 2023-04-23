import { Autocomplete, TextField } from "@mui/material";

const Languages = () => {
    const languages = [
        { label: "C" },
        { label: "C++" },
        { label: "Java" },
        { label: "Python" },
        { label: "Go" },
        { label: "Rust" },
        { label: "JavaScript" },
    ];
    return languages;
}

export default function Language({ isSmallScreen }: { isSmallScreen: boolean; }) {
    const width = isSmallScreen ? "100%" : "200px";

    return (
        < Autocomplete
            disablePortal
            id="SearchLanguage"
            size="small"
            options={Languages()}
            sx={{
                width: width,
                backgroundColor: "white",
                borderRadius: "5px",
                mr: isSmallScreen ? 0 : 1,
                mb: isSmallScreen ? 1 : 0,
            }}
            renderInput={(params) => <TextField {...params} label="Language" />}
        />
    );
}
