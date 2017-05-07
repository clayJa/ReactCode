import React , { Component } from 'react';

import VideoListItem from  './video_list_item';
// class VideoList extends Component{
//     constructor(props){
//       super(props);
//     }
//     render(){
//       return (
//         <ul className="col-md-4 list-group">
//           {this.props.videos.length}
//         </ul>
//       );
//     }
// }
const VideoList = (props) =>{
  const videoItems = props.videos.map(video => <VideoListItem video={video} key={video.etag} onVideoSelect={props.onVideoSelect}/>);

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
}

export default VideoList;
