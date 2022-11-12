import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';

const Jumbotron = () =>{
    return(
        <div >
            <Card sx={{ mt: 1, mb: 1 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://st4.depositphotos.com/1003924/22950/i/1600/depositphotos_229506068-stock-photo-travel-planning-map-tourism-traveler.jpg"
                        alt="green iguana"
                        sx={{ height: 350 }}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Traveling.com
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

        </div>

    )
}

export default Jumbotron;