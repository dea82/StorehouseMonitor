const Firestore = require('@google-cloud/firestore');

exports.getDb = () => new Firestore();
