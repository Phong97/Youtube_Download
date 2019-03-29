const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();
app.use(cors());
app.listen(3000, () => {
    console.log('Server is running on port 3000...!');
});
app.get('/download', (req,res) => {
var url = req.query.url;
res.header('Content-Disposition', 'attachment; filename="video.mp4"');
ytdl(url, {
    format: 'mp4'
    }).pipe(res);
});
