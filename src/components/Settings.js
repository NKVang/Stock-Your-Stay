import React from "react";
import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2'
import "./settings_style.css";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


function Settings() {
    const [clicked, setClicked] = React.useState(true);
    const [value, setValue] = React.useState('alpha');
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box>
            <div>
                <h2 style={{ position: "absolute", left: "50%", top: "12%", transform: 'translate(-50%, -50%)'}}>Settings</h2>
            </div>
            <Grid xs={12} sm={12} style={{ position: "absolute", left: "50%", top: "24%", transform: 'translate(-50%, -50%)'}}>
                <FormControl xs={12} sm={12}>
                    <FormLabel id="radio-buttons-group">Radial Menu</FormLabel>
                    <RadioGroup
                        aria-labelledby="radio-buttons-group"
                        name="radio-buttons-group"
                        value={value}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="alpha" control={<Radio />} label="Alpha" />
                        <FormControlLabel value="beta" control={<Radio />} label="Beta" />
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid xs={12} sm={12} style={{ position: "absolute", left: "50%", top: "36%", transform: 'translate(-50%, -50%)'}}>
                <TextField id="textInput" label="Text Input 1" type="search"/>
            </Grid>
            <Grid xs={12} sm={12} style={{ position: "absolute", left: "50%", top: "43%", transform: 'translate(-50%, -50%)'}}>
                <TextField id="textInput" label="Text Input 2" type="search"/>
            </Grid>
            <Grid xs={12} sm={12} style={{ position: "absolute", left: "50%", top: "50%", transform: 'translate(-50%, -50%)'}}>
            <Button type="submit" size="large"  sx={{ ":hover": {backgroundColor: "gray"},  color: "white",backgroundColor: clicked? "#00180e" : "gray"}}>
                Button
            </Button>
            </Grid>
            <Grid xs={12} sm={12} style={{ position: "absolute", left: "50%", top: "58%", transform: 'translate(-50%, -50%)'}}>
            <Button type="submit" size="large"  sx={{ ":hover": {backgroundColor: "gray"},  color: "white",backgroundColor: clicked? "#00180e" : "gray"}}
                id="dropdown-button"
                aria-controls={open ? 'dropdown-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                Dropdown
            </Button>
            <Menu
                id="dropdown-menu"
                aria-labelledby="dropdown-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
                }}
            >
                <MenuItem onClick={handleClose}>Option 1</MenuItem>
                <MenuItem onClick={handleClose}>Option 2</MenuItem>
                <MenuItem onClick={handleClose}>Option 3</MenuItem>
            </Menu>
            </Grid>
        </Box>
    );
}

export default Settings;