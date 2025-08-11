'use client';
import React from "react";
import './Trip.css';
import { Box, Button, Card, CardContent, Stack, Typography } from "@mui/material";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";


export default function TripPage() {
    const trips = [
        { id: 1, route: 'Nairobi to Thika', time: '8:00 AM', price: 'KES 100' },
        { id: 2, route: 'Thika to Nairobi', time: '12:00 PM', price: 'KES 100' },
        { id: 3, route: 'Nairobi to Juja', time: '04:30 PM', price: 'KES 80' },
    ];
    
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
                <DirectionsBusIcon sx={{ verticalAlign: 'middle', mr: 1 }}/>
                Available Trips
            </Typography>

            <Stack spacing={2}>
                {trips.map((trip) => (
                    <Card key={trip.id} sx={{ p: 2 }}>
                        <CardContent>
                            <Typography variant="h6">
                                <LocationOnIcon sx={{ mr: 1, color: 'primary.main' }}/>
                                {trip.route}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <AccessTimeIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                                {trip.time}
                            </Typography>
                            <Typography variant="body2" sx={{ mt: 1 }}>
                                Price: <strong>{trip.price}</strong>
                            </Typography>
                            <Button
                                variant="contained"
                                size="small"
                                sx={{ mt: 2 }}
                            >
                                Book Now
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </Stack>
        </Box>
    )
}