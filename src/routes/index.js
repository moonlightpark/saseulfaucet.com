const express = require('express');
const router = express.Router();

const SASEUL = require('saseul');

(async function () {
    SASEUL.Rpc.endpoint("test.saseul.net");

    let private_key = "a4dffb08e4c9e5d0a5f42d63df22127452ba9ea0eb416d38afc9f24d63ed2bbd"
    let address = SASEUL.Sign.address(SASEUL.Sign.publicKey(private_key));

    let signed_request = SASEUL.Rpc.signedRequest({
        "type": "GetBalance",
        "address": address
    }, private_key);

    let result = await SASEUL.Rpc.request(signed_request);
    let balance = result.data.balance;

    console.dir(balance);
})

// const SASEUL = require('saseul');

// (async function () {
//     SASEUL.Rpc.endpoint("test.saseul.net");

//     let private_key = "c3baba5ea51b59c3b213bdac25b25ea75c5e6e5f9f78626757e5f197628aadd6"
//     let address = SASEUL.Sign.address(SASEUL.Sign.publicKey(private_key));

//     let signed_request = SASEUL.Rpc.signedTransaction({
//         "type": "Send",
//         "to": "33f02e5c52f688ba68b5e32ee2e4079df2cf839882aa",
//         "amount": "125000000000000000000"
//     }, private_key);

//     let result = await SASEUL.Rpc.broadcastTransaction(signed_request);

//     console.dir(result);
// })


router.get('/', (req, res) => {
  res.render('index', { title: 'SASEULFaucet' });
});

router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact Page' });
});

module.exports = router;
