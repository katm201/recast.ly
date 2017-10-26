var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      part: 'snippet',
      type: 'video',
      q: options.query,
      maxResults: options.max,
      key: options.key   
    },
    success: function(data) {
      console.log('Successfully received Data, ', data);
      callback(data.items);
    },
    failure: function() {
      console.log('Data fetch failed, ', error);
    }
  });
};

window.searchYouTube = searchYouTube;
