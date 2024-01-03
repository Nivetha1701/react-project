import * as React from 'react';
import './Booking.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const cardData = [
  {
    title: 'Birthday Events',
    imageUrl: 'https://5.imimg.com/data5/MM/XN/MY-2440773/birthday-celebration.jpg',
  },
  {
    title: 'Marriage',
    imageUrl: 'https://eventsdo.com/wp-content/uploads/job-manager-uploads/gallery_images/2020/09/Grand-weddings.jpg',
  },
  {
    title: 'Reception',
    imageUrl: 'https://d397bfy4gvgcdm.cloudfront.net/267122-PSW-4197.jpeg', 
  },
  {
    title: 'Parties',
    imageUrl: 'https://images.pexels.com/photos/3052360/pexels-photo-3052360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 
  },
];

export default function Events() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1%', margin: '1rem' }}>
      {cardData.map((card, index) => (
        <Card key={index} sx={{ maxWidth: 850 ,marginBottom: '0rem', height:'100%'}}>
          <CardMedia component="img" height="200"  alt={card.title} src={card.imageUrl} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {card.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {card.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Book</Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
