const express = require('express');
const router = express.Router();

const blogDb = require('../../data/blogDb');
let randomPic =1


let idCount = 3

// blog api
// /api/blog gauti visu postus json pavidalu
router.get('/', (req, res) => {
  res.json(blogDb);
});

router.post('/', (req, res)=>{
 console.log(req.body)
  // res.json({msg: 'testing'})
  const newBlog = {
    id: ++idCount,
    title: req.body.title,
    author: req.body.author,
    body: req.body.text,
    date: new Date().toLocaleDateString(),
    imgUrl: `https://picsum.photos/1000/500?random=${++randomPic}`,
  };
  
  blogDb.push(newBlog);
  res.json({ msg: 'success', newBlog });
})

module.exports = router;
