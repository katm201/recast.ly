class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialSearch: this.props.searchYouTube,
      videos: this.props.videos,
      currentVideo: this.props.videos[0] 
    };
    this.handleVideoSelection = this.handleVideoSelection.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.search = this.search.bind(this);
  }

  handleVideoSelection(newVideo) {
    this.setState({currentVideo: newVideo});
  }

  handleSearch(newVideos) {
    this.setState({videos: newVideos});
    this.setState({currentVideo: newVideos[0]});
  }

  search(query) {
    var options = {
      query: query,
      max: 5,
      key: window.YOUTUBE_API_KEY
    };

    let searchCallback = this.handleSearch;

    window.searchYouTube(options, searchCallback);
  }
  
  componentDidMount() {
    this.search(this.props.searchYouTube);
  }
  
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div id="search"><Search onClick={this.search}/></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div id="player"><VideoPlayer video={this.state.currentVideo} /></div>
          </div>
          <div className="col-md-5">
            <div id="videoList"><VideoList videos={this.state.videos} onClick={this.handleVideoSelection} /></div>
          </div>
        </div>
      </div>
    );
  }
}

App.defaultProps = { 
  searchYouTube: 'puppies',
  videos: window.exampleVideoData
};
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
