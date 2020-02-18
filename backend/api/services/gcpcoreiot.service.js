const iot = require('@google-cloud/iot');

const client = new iot.v1.DeviceManagerClient();
const location = 'europe-west1';
const registry = 'AmbientSensors';

async function getNodes() {
  const projectId = await client.getProjectId();
  const parent = client.registryPath(projectId, location, registry);
  const [devices] = await client.listDevices({ parent });

  return devices;
}

module.exports.getNodes = getNodes;
