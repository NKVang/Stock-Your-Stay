import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import DestinationImage from './assets/LocationPlaceholder.jpg';

function LocationCard() {
    return (
        <Card>
            <CardActionArea sx={{ display: 'block'}}>
            <CardMedia
                component="img"
                height="600"
                image={DestinationImage}
                alt="Destination Image"
            />
            <CardContent style={{backgroundColor: "#00180e"}}>
                <Typography gutterBottom variant="h5" component="div" color="#fff">
                Destination
                </Typography>
            </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default LocationCard;
