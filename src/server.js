let express = require('express');
let app = express();
let router = express.Router();
const port = 9000;

var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


let logger = function (req, res, next) {
  console.log('LOGGED Request at ',Date.now());
  console.log('LOGGED Response at ',Date.now());
  next()
};

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(logger);
app.use('/api',router);

app.get('/',function(req, res){
  res.sendFile(`${__dirname}/index.html`);
});

router.get('/packages',  function(req, res){
  res.json([{
    bonus:{
      label : 'Bonus',
      price : 500
    },
    price : 500
  },{
    bonus:{
      label : 'Bonus',
      price : 1000
    },
    price : 1000
  },{
    bonus:{
      label : 'Bonus',
      price : 1500
    },
    price : 2000
  }])
});

router.get('/packages/apply/coupon',function(req, res){
  let code = req.param('code');
  let couponCode = {applied : false};
  if(code === 'ABCDE' || 'abcde'){
    couponCode.applied = true;
    couponCode.code = code;
    couponCode.discount = 100;
  }else{
    couponCode.remark = `${code} is expired please try diffent one.`;
  }
  res.json(couponCode);
});

router.get('/banks',function(req, res){
    res.json(['abc bank ltd','acc bank ltd','aaa bank ltd']);
});

router.post('/banks/pay', function(req, res){
  let package = req.body.package;
  let bonus = package.bonus;
  let cardInfo = req.body.cardInfo;
  let bonusPrice = bonus ? bonus.price : 0;
  let total = package.price + bonusPrice;
  let response = {
    success: true,
    total : total,
    message : 'Account Updated',
    price : package.price,
    bonus : bonus ? bonus.price : 0,
    modeOfPayment: cardInfo.mode,
    cardNumber: cardInfo.cardNumber,
    name: cardInfo.name
  };
  res.json(response);
});

router.post('/netbanking/pay', function (req, res) {
  let package = req.body.package;
  let bonus = package.bonus;
  let bonusPrice = bonus ? bonus.price : 0;
  let total = package.price + bonusPrice;
  let response = {
    success: true,
    total : total,
    message : 'Account Updated',
    price : package.price,
    bonus : bonus ? bonus.price : 0,
    modeOfPayment: req.body.mode,
  };
  res.json(response);
});

app.listen(port);
