import { Grid, GlobalStyles } from "@mui/material";
import { MediaCard } from "./components/Card.tsx";
import { Header } from "./components/Header/Header.tsx";

export default function App() {
    return (
        <>
            {/* 隙間を埋める */}
            <GlobalStyles styles={{ body: { margin: 0, padding: 0 } }} />

            {/* ヘッダー */}
            <Header />

            {/* 中身 */}
            <Grid
                sx={{ mt: "auto", mb: "auto", p: 1 }}
                container
                direction="row"
                spacing={3}
                alignItems="center"
                justifyContent="center">
                <Grid item xs={12} sm={6}>
                    <MediaCard
                        language="C"
                        func="printf"
                        code={'#include<stdio.h>\n\nint main(void){\n\tprintf("Hello World");\n\treturn 0;\n}'}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <MediaCard
                        language="C++"
                        func="cout"
                        code={'#include<iostream>\n\nint main(void){\n\tstd::cout << "Hello World" << std::endl;\n\treturn 0;\n}'}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <MediaCard
                        language="Rust"
                        func="println!"
                        code={'fn main() {\n\tprintln!("Hello World");\n}'}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <MediaCard
                        language="Go"
                        func="Println"
                        code={'package main\nimport "fmt"\n\nfunc main() {\n\tfmt.Println("Hello World")\n}'}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <MediaCard
                        language="Java"
                        func="System.out.println"
                        code={'public class Main {\n\tpublic static void main(String[] args) {\n\tSystem.out.println("Hello World");\n\t}\n}'}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <MediaCard
                        language="JavaScript"
                        func="encodeURIComponent"
                        code={'console.log("Hello World");'}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <MediaCard
                        language="Python"
                        func="print"
                        code={'print("Hello World")'}
                    />
                </Grid>
            </Grid>
        </>
    );
}
