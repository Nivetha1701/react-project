import * as React from 'react';
import './Booking.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShareIcon from '@mui/icons-material/Share';
import PaymentIcon from '@mui/icons-material/Payment';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const cardData = [
  {
    title: 'Birthday Hall',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 10000</>,
    imageUrl: 'https://www.bookeventz.com/blog-old/wp-content/uploads/2020/07/Feature-Image-5.jpg',
  },
  {
    title: 'Birthday Hall',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 7000</>,
    imageUrl: 'https://content.jdmagicbox.com/comp/bangalore/p9/080pxx80.xx80.120612160556.j1p9/catalogue/mello-birthday-bubbles-koramangala-4th-block-bangalore-birthday-party-organisers-2gt0cmn.jpg',
  },
  {
    title: 'Birthday Hall',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 8000</>,
    imageUrl: 'https://ik.imagekit.io/pu0hxo64d/uploads/gallery/outdoor-sitting-arrangement-at-patio-game-n-grillz-224.jpeg', // Replace with the actual URL for the image
  },
  {
    title: 'Birthday Hall',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 9500</>,
    imageUrl: 'https://media.licdn.com/dms/image/C4D12AQFQFBAZ2EYtSQ/article-cover_image-shrink_600_2000/0/1653285994073?e=2147483647&v=beta&t=8TlWMkb5vLyL3ShKegEAsQemyFQHnNciXvi3UaspTFE', // Replace with the actual URL for the image
  },
  {
    title: 'Marriage Hall',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 45000</>,
    imageUrl: 'https://content.jdmagicbox.com/comp/ahmedabad/e5/079pxx79.xx79.121031110024.s1e5/catalogue/marriage-event-management-ellis-bridge-ahmedabad-event-management-companies-o2hy6.jpg', // Replace with the actual URL for the image
  },
  {
    title: 'Reception Hall',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 55000</>,
    imageUrl: 'https://images.jdmagicbox.com/comp/nagercoil/w1/9999p4652.4652.220912171206.q9w1/catalogue/wonder-wedding-event-management-chetti-kulam-nagercoil-wedding-decorators-96k1lmq93w.jpg', // Replace with the actual URL for the image
  },
  {
    title: 'Marriage Hall',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 45000</>,
    imageUrl: 'https://www.theweddingschool.in/wp-content/uploads/2018/09/download.jpg', // Replace with the actual URL for the image
  },
  {
    title: 'Reception Hall',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 50000</>,
    imageUrl: 'https://miro.medium.com/v2/resize:fit:1024/1*bl-wWXVObXOYa4aEZUxiRA.jpeg', // Replace with the actual URL for the image
  },
  {
    title: 'Marriage Hall',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 65000</>,
    imageUrl: 'https://5.imimg.com/data5/SH/TY/GLADMIN-58324105/event-management-for-weddings-500x500.jpg', // Replace with the actual URL for the image
  },
  {
    title: 'Reception Hall',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 50000</>,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW-qTeY08dqLUMiassMIRvqwGtWn9iXkmpRtDatm8ly2Lm9VOyuhEBY_GMT_xyHt3ffgU&usqp=CAU', // Replace with the actual URL for the image
  },
  {
    title: 'Reception Hall',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 40000</>,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcl-vfLZWoGlatp-Wi7eWWJqeodIZO3HFu7g&usqp=CAU', // Replace with the actual URL for the image
  },
  {
    title: 'Marriage Hall',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 69999</>,
    imageUrl: 'https://content3.jdmagicbox.com/comp/karur/a7/9999p4324.4324.171202104638.w5a7/catalogue/jeeva-wedding-decorations-and-event-management-vennamalai-karur-event-organisers-oh8dr90wya.jpg', // Replace with the actual URL for the image
  },
  {
    title: 'Party Hall',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 29999</>,
    imageUrl: 'https://www.visionvivaah.com/blog/wp-content/uploads/2019/12/0b1dacf6-6314-4a73-a891-725574c683bf.jpg', // Replace with the actual URL for the image
  },
  {
    title: 'Party Hall',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 25000</>,
    imageUrl: 'https://cdn0.weddingwire.in/vendor/3163/3_2/960/jpg/img-20200108-wa0022_15_273163-157960589469831.jpeg', // Replace with the actual URL for the image
  },
  {
    title: 'Get Together',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 20000</>,
    imageUrl: 'https://www.bdeventmanagement.com/wp-content/uploads/2021/03/Premium-Wedding-Radisson-Blu-Water-Garden-Dhaka-Luxury-Wedding-Planning-BD-Event-Management-Wedding-Planners-Justice-Family-Program-2021-best-in-Radisson-.jpg', // Replace with the actual URL for the image
  },
  {
    title: 'Get Together',
    description: <><CurrencyRupeeIcon style={{ fontSize: 'medium' }} /> 15000</>,
    imageUrl: 'https://5.imimg.com/data5/HV/SQ/CH/SELLER-93997122/wedding-event-planning-services-500x500.jpg', // Replace with the actual URL for the image
  },
];

export default function Booking() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1%', margin: '1rem' }}>
      {cardData.map((card, index) => (
        <Card key={index} sx={{ maxWidth: 850 ,marginBottom: '1rem', height:'100%'}}>
          <CardMedia component="img" width="200px" height="200"  style={{ objectFit: 'cover' }} alt={card.title} src={card.imageUrl} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {card.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {card.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small"><PaymentIcon/>Book</Button>
            <Button size="small" ><ShareIcon />Share</Button>
            <Button size="small"><ShoppingCartIcon/>Add Cart</Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
