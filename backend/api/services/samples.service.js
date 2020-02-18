const db = require('../db/initalize').getDb();

async function getSamples() {
  const samples = db
    .collection('samples')
    .get()
    .then((snapshot) => snapshot.docs.map((x) => x.data()));

  return samples;
}

async function createSample(temperatureValue) {
  const sampleRef = await db
    .collection('samples')
    .add({ temperature: temperatureValue });
  const sample = await sampleRef.get();
  return { id: sample.id, data: sample.data() };
}

module.exports.getSamples = getSamples;
module.exports.createSample = createSample;
