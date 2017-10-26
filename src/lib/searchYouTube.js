var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      part: 'snippet',
      type: 'video',
      q: options.query,
      maxResults: options.max,
      key: window.YOUTUBE_API_KEY   
    },
    success: function(data) {
      console.log('Successfully received Data');
      callback(data.items);
    },
  });
};

window.searchYouTube = searchYouTube;
