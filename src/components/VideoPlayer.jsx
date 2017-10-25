class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.video.snippet.title,
      description: this.props.video.snippet.description,
      id: this.props.video.id.videoId,
      vid: ('https://www.youtube.com/embed/' + this.props.video.id.videoId)
    };
  }


  render() {
    return (
      <div className="video-player">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={this.state.vid} allowFullScreen></iframe>
        </div>
        <div className="video-player-details">
          <h3>{this.state.title}</h3>
          <div>{this.state.description}</div>
        </div>
      </div>
    );
  } 
}
// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoPlayer = VideoPlayer;
