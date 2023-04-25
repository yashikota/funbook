import { Autocomplete, TextField } from "@mui/material";
import { useRecoilState } from "recoil";
import { languageState } from "../Store/State.tsx";

const Languages = () => {
    return [
        { label: "C" },
        { label: "C++" },
        { label: "Java" },
        { label: "Python" },
        { label: "Go" },
        { label: "Rust" },
        { label: "JavaScript" },
    ];
}

export default function Language({ isSmallScreen }: { isSmallScreen: boolean; }) {
    const width = isSmallScreen ? "100%" : "200px";

    const [value, setValue] = useRecoilState(languageState);

    return (
        < Autocomplete
            disablePortal
            id="SearchLanguage"
            size="small"
            options={Languages()}
            onChange={(_, newValue) => {
                setValue(newValue ? newValue.label : "");
            }}
            sx={{
                width: width,
                backgroundColor: "white",
                borderRadius: "5px",
                mr: isSmallScreen ? 0 : 1,
                mb: isSmallScreen ? 1 : 0,
            }}
            renderInput={(params) => <TextField
                {...params}
                label={value ? "" : "Language"}
                onChange={(event) => setValue(event.target.value)}
                InputLabelProps={{ shrink: false }}
            />}
        />
    );
}
