import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from '@mui/icons-material';
import { demoThumbnailUrl, demoVideoTitle, demoVideoUrl, demoChannelUrl, demoChannelTitle } from "../assets/constants";
import './App.css';

const VideoCard = ({video: {id: {videoId}, snippet }}) => {


  return (
    <Card sx= {{width: {md : '320px', xs: '100%'}, boxShadow: 'none', borderRadius: '5px' }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia 
        image={snippet?.thumbnails?.high?.url} 
        alt={snippet?.title}
        sx={{width: 358, height: 180, borderRadius: '5px'}}
        />
        </Link>
        <CardContent className="card-container"
        sx={{height: '106px'}}>

        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight='bold' >
            {snippet?.title.slice(0,60) || demoVideoTitle.slice(0, 60)}
            </Typography>  
        </Link>

        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
          <Typography variant="subtitle2" fontWeight='gray' >
            {snippet?.demoChannelTitle || demoChannelTitle}
            <CheckCircle sx={{fontSize: 12, color: 'gray', ml: '5px'}}/>
            </Typography>  
        </Link>
        </CardContent>
    </Card>
  )
}

export default VideoCard