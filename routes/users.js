const express = require('express');
const router = express.Router();

/* 로그인 요청 method POST, 바디에 id, password 키로 값을 보낸다. */
router.post('/login', (req, res, next) => {
  const { id, password } = req.body;
  if(id !== 'jaewon') {
    const err = new Error("User Not Found");
    err.status = 404;
    return next(err);
    // return res.status(404).json({ message: "User Not Found" })
  } else if (password !== 'jaewon1234') {
    const err = new Error("User Not Found");
    err.status = 404;
    return next(err);
    // return res.status(401).json({ message: "Invalid Password" })
  }
  next();
});

router.post('/login', (req, res, next) => {
  res.json({ message: "LoggedIn Success" })
});

router.post('/', (req, res, next) => {
  /* User을 만는 API _ User생성 CREATE 요청
    body : id, password method: post content-type: x-www-urlencoded application/json
    @ DB 모델을 가지고 실제 User 생성
  */
  const { id, password } = req.body;
  if(id !== 'jaewon') {
    const err = new Error("Bad Request");
    err.status = 400;
    return next(err);
    // return res.status(404).json({ message: "User Not Found" })
  } else if (password !== 'jaewon1234') {
    const err = new Error("Bad Request");
    err.status = 400;
    return next(err);
   // return res.status(401).json({ message: "Invalid Password" })
  }
  const User = {
    id: id,
    password: password
  };
  req.CreatedUser = User;
  next();
});

router.post('/', (req, res, next) => {
  req.User
});

module.exports = router;
