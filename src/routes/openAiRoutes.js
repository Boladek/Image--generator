const {Router} = require('express');
const {generateImage} = require('../controllers/openAiControllers');

const router = Router();

router.post('/generateImage', generateImage)

module.exports = router;