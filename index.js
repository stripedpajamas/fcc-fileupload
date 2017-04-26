/**
 * Created by petersquicciarini on 4/26/17.
 */

const express = require('express');
const multer = require('multer');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(express.static('public'));
app.post('/upload', upload.single('bazinga'), (req, res) => {
  res.json({ original_name: req.file.originalname, size: req.file.size });
});

app.listen(process.env.PORT || 8080);