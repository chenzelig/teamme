import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { withStyles } from "@material-ui/core/styles";

export default function Header() {
    const logo = require(`../assets/Teamme_logo_BLACK.png`);

    const WhiteTextTypography = withStyles({
        root: {
            backgroundColor: "white"

        }
    })(Typography);
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <WhiteTextTypography variant="h6" sx={{ flexGrow: 1 }} >
                        <img alt='logo' style={{ width: 150 }} src={String(logo)} />
                        {/* Team.me */}
                    </WhiteTextTypography>
                    {/* <Button color="inherit">Login</Button> */}
                </Toolbar>
            </AppBar>
        </Box>
    );
}