import video from '../media/background-video.mp4';

function BackgroundVideo() {
  return (
    <video src={video} autoPlay="autoplay" loop="loop" muted className="video">
      Your browser does not support the video tag.
    </video>
  )
}

export default BackgroundVideo;