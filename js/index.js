Plotly.d3.json('https://rawgit.com/plotly/documentation/cf89fd13f7db46d0203cf1f8236993bfbf9f80df/_posts/plotly_js/animations/gapminder-with-frames.json', function (err, data) {
  Plotly.plot('graph', data);
});