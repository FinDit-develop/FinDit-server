module.exports = function(app) {
    const user = require('./videoController');


    // ์์ ์กฐํ API
    app.get('/app/video/:id', video.getVideos);

}