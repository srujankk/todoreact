var express = require('express');
var router = express.Router();

const todos = {
  "todos":[
    {"title":"from server", "done":false}
  ]
}

router.get('/',(req,res,next)=>{
  res.send(todos);
});

module.exports = router;
