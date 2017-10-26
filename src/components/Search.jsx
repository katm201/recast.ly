class Search extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    this.props.onClick(this.state.value); 
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.props.onClick(this.state.value);
    }
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" onChange={(event) => { this.handleChange(event); } } onKeyDown={ (event) => { this.handleKeyPress(event); }}/>
        <button className="btn hidden-sm-down" onClick={ () => { this.props.onClick(this.state.value); } }>
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div> 
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
