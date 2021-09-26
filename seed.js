const els = document.querySelectorAll('.ytd-grid-video-renderer')
const nodeList = [...els];

const results = nodeList.map(node => ({
  thumb: node.querySelector('.yt-img-shadow')
    ? node.querySelector('.yt-img-shadow').getAttribute('src')
    : null,
  title: node.querySelector('#video-title')
    ? node.querySelector('#video-title').innerText
    : null,
  subtitle: node.querySelector('#metadata-line')
    ? node.querySelector('#metadata-line').innerText
    : null
}));

const filteredResults = results
  .filter(result => !!result.title && !!result.thumb)
  .map(result => ({
    ...result,
    subtitle: result.subtitle.replace(/\n/ig, ' - ')
  }));

export {
  filteredResults
};
  