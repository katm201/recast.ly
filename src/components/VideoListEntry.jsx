class VideoListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thumbnail: this.props.video.snippet.thumbnails.default.url,
      title: this.props.video.snippet.title,
      description: this.props.video.snippet.description,
      id: this.props.video.id.videoId,
      vid: ('https://www.youtube.com/embed/' + this.props.video.id.videoId)
    };
  }

  handleClick() {
    ReactDOM.render(<VideoPlayer video={this.props.video} />, document.getElementById('player'));
  }

  // on click, re-render videoPlayer with whichever video data
    // <VideoPlayer video={this.props.video} />

  render() {
    return (
      <div className="video-list-entry media">
        <div className="media-left media-middle">
          <img className="media-object" src={this.state.thumbnail} alt="" />
        </div>
        <div className="media-body">
          <div onClick={this.handleClick.bind(this)} className="video-list-entry-title">{this.state.title}</div>
          <div className="video-list-entry-detail">{this.state.description}</div>
        </div>
      </div>
    );
  }
}

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoListEntry = VideoListEntry;
