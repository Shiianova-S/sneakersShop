import { Button, Card, Avatar, CardContent, Grid, Typography } from "@material-ui/core";
import Rating from '@mui/material/Rating';

export default function ReviewsCard({reviews}) {

const data = reviews.createdAt.substring(0,10)
const userNameAv = reviews.authorName.substring(0,1)
  return (
    <Grid item xs={12} md={4}>
    <Card className="motion" sx={{height: '100%',}} >
        <CardContent style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Avatar sx={{ width: 32, height: 32 }}> {userNameAv} </Avatar>
        <Typography>{reviews.authorName}</Typography>
        <Rating name="read-only" value={reviews.rating} readOnly />
            <Typography
                variant="body1"
                component="h4"
            >
            <Typography color="textSecondary">
            {data}
            </Typography>
            </Typography>
            <Typography >{reviews.text}</Typography>
        </CardContent>
    </Card>
</Grid>

  );
}
