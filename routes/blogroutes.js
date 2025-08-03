const express = require('express');
const control = require('../controller/blogscontroller')
const router = express.Router();

router.get('/',control.blog_index); 
router.post('/', control.blog_post);

router.get('/create',control.created);

router.get('/:id', control.single_blog);

router.delete('/:id', control.deleted);
module.exports=router;