import React from "react";
import TextField from '@mui/material/TextField';
import "bootstrap/dist/css/bootstrap.min.css";
import "./reservation_style.css";
import { Button, Box } from "@mui/material";

const dummyTable = [
    {
        lName: "SMITH",
        resNum: "123456789",
        destination: "Dallas"
    },
    {
        lName: "JAMES",
        resNum: "987654321",
        destination: "Miami"
    },
    {
        lName: "JONES",
        resNum: "123454321",
        destination: "New York"
    }
]

function CheckReservation() {
    const [clicked, setClicked] = React.useState(true);
    const [resInput, setInput] = React.useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(resInput);
    }

    return (
        <Box
            sx={{
                '& .MuiTextField-root': { m: 2, width: '36ch' }
            }}
            noValidate
            autoComplete="off"
        >
            <div className="Reservation-title">
                <h2> Check Reservations</h2>
            </div>
            <div className="Reservation-input">
                <form onSubmit={handleSubmit}>
                    <p>To check your reservations, input the following information:</p>
                    <TextField
                        id="reservationNum"
                        label="Reservation Number"
                        type="search"
                        value={resInput}
                        helperText="Required*"
                        required
                        onChange={(e) => {
                            setInput(e.target.value);
                        }}
                    />
                    <Button
                        type="submit"
                        size="large"
                        sx={{
                            ":hover": { backgroundColor: "gray" },
                            color: "white",
                            backgroundColor: clicked ? "#00180e" : "gray",
                        }}
                    >
                        Check
                    </Button>
                </form>
            </div>
            <div className="Reservation-body">
                <p>Don't have a reservation? Make one here:</p>
                <Button
                    variant="themed"
                    size="large"
                    sx={{
                        ":hover": { backgroundColor: "gray" },
                        color: "white",
                        backgroundColor: clicked ? "#00180e" : "gray",
                    }}
                    onClick={() => setClicked(!clicked)}
                    href="https://minthouse.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Make A Reservation
                </Button>
            </div>
        </Box>
    );
}

export default CheckReservation;
