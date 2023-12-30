let config = {
    // replace this key with yours
    "publicKey": 'test_public_key_e4f0611cc95e45869d9fdd246498ac14',
    "productIdentity": "123755",
    "productName": "Real Estate Nepal",
    "productUrl": "http://gameofthrones.com/buy/Dragons",
    "eventHandler": {
        onSuccess (payload) {
            // hit merchant api for initiating verfication
            console.log(payload);
        },
        // onError handler is optional
        onError (error) {
            // handle errors
            console.log(error);
        },
        onClose () {
            console.log('widget is closing');
        }
    },
    "paymentPreference": ["KHALTI", "EBANKING","MOBILE_BANKING", "CONNECT_IPS", "SCT"],
};

export default config;