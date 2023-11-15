const express = require('express');
const bodyParser = require('body-parser');
const signingKey = require('./config/keys');
const cookieParser = require('cookie-parser');
const Register = require('./routes/Register');
const Login = require('./routes/Login');
const auth = require('./routes/GetJwt');
const validateToken = require('./routes/GetAuthentication');

const app = express()
app.use(bodyParser.json())
  app.use(cookieParser(signingKey.SIGNING_KEY_COOKIE));

let port=10101;

app.use('/Register', Register);
app.use('/Login',Login);
app.use('/readToken', validateToken);
app.use('/auth', auth);


app.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
  });
  
  