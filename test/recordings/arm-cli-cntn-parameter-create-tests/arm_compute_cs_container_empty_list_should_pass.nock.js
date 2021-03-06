// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e33f361b-53c2-4cc7-b829-78906708387b',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Microsoft Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'servicePrincipal'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstCntnGCreate1257/providers/Microsoft.ContainerService/containerServices?api-version=2016-03-30')
  .reply(200, "{\"value\":[]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-request-id': 'e921807d-4a78-4f8a-bf13-71030448a106',
  'x-ms-correlation-request-id': 'e921807d-4a78-4f8a-bf13-71030448a106',
  'x-ms-routing-request-id': 'CENTRALUS:20160428T123224Z:e921807d-4a78-4f8a-bf13-71030448a106',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 28 Apr 2016 12:32:23 GMT',
  connection: 'close',
  'content-length': '12' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstCntnGCreate1257/providers/Microsoft.ContainerService/containerServices?api-version=2016-03-30')
  .reply(200, "{\"value\":[]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-request-id': 'e921807d-4a78-4f8a-bf13-71030448a106',
  'x-ms-correlation-request-id': 'e921807d-4a78-4f8a-bf13-71030448a106',
  'x-ms-routing-request-id': 'CENTRALUS:20160428T123224Z:e921807d-4a78-4f8a-bf13-71030448a106',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 28 Apr 2016 12:32:23 GMT',
  connection: 'close',
  'content-length': '12' });
 return result; }]];