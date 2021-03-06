// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '46241355-bb95-46a9-ba6c-42b554d71925',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Microsoft Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'jstesteastus2';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://jstesteastus2.eastus2.batch.azure.com';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://jstesteastus2.eastus2.batch.azure.com:443')
  .delete('/pools/xplatCreatedPool?api-version=2016-02-01.3.0&timeout=30')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'a750cf48-4637-4181-8142-a3b038128bb6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'e4864eef-a8a7-4a40-bf8f-c2ed2ade2a47',
  dataserviceversion: '3.0',
  date: 'Sat, 09 Apr 2016 00:08:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://jstesteastus2.eastus2.batch.azure.com:443')
  .delete('/pools/xplatCreatedPool?api-version=2016-02-01.3.0&timeout=30')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'a750cf48-4637-4181-8142-a3b038128bb6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'e4864eef-a8a7-4a40-bf8f-c2ed2ade2a47',
  dataserviceversion: '3.0',
  date: 'Sat, 09 Apr 2016 00:08:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://jstesteastus2.eastus2.batch.azure.com:443')
  .get('/pools/xplatCreatedPool?api-version=2016-02-01.3.0&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://jstesteastus2.eastus2.batch.azure.com/$metadata#pools/@Element\",\"id\":\"xplatCreatedPool\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/pools/xplatCreatedPool\",\"eTag\":\"0x8D3600B223C2A0A\",\"lastModified\":\"2016-04-09T00:08:52.4646922Z\",\"creationTime\":\"2016-04-09T00:08:49.4519354Z\",\"state\":\"deleting\",\"stateTransitionTime\":\"2016-04-09T00:08:52.4646922Z\",\"allocationState\":\"steady\",\"allocationStateTransitionTime\":\"2016-04-09T00:08:49.6063845Z\",\"vmSize\":\"small\",\"resizeTimeout\":\"PT15M\",\"currentDedicated\":0,\"targetDedicated\":0,\"enableAutoScale\":false,\"enableInterNodeCommunication\":false,\"startTask\":{\r\n    \"commandLine\":\"cmd /c echo updated\",\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":true\r\n  },\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\r\n    \"nodeFillType\":\"Spread\"\r\n  },\"cloudServiceConfiguration\":{\r\n    \"osFamily\":\"4\",\"targetOSVersion\":\"*\",\"currentOSVersion\":\"*\"\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Sat, 09 Apr 2016 00:08:52 GMT',
  etag: '0x8D3600B223C2A0A',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '8126e5d6-26ee-413b-9a77-612c63d703e8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'e77cda11-0734-455e-948d-ef2fcd54940c',
  dataserviceversion: '3.0',
  date: 'Sat, 09 Apr 2016 00:08:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://jstesteastus2.eastus2.batch.azure.com:443')
  .get('/pools/xplatCreatedPool?api-version=2016-02-01.3.0&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://jstesteastus2.eastus2.batch.azure.com/$metadata#pools/@Element\",\"id\":\"xplatCreatedPool\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/pools/xplatCreatedPool\",\"eTag\":\"0x8D3600B223C2A0A\",\"lastModified\":\"2016-04-09T00:08:52.4646922Z\",\"creationTime\":\"2016-04-09T00:08:49.4519354Z\",\"state\":\"deleting\",\"stateTransitionTime\":\"2016-04-09T00:08:52.4646922Z\",\"allocationState\":\"steady\",\"allocationStateTransitionTime\":\"2016-04-09T00:08:49.6063845Z\",\"vmSize\":\"small\",\"resizeTimeout\":\"PT15M\",\"currentDedicated\":0,\"targetDedicated\":0,\"enableAutoScale\":false,\"enableInterNodeCommunication\":false,\"startTask\":{\r\n    \"commandLine\":\"cmd /c echo updated\",\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":true\r\n  },\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\r\n    \"nodeFillType\":\"Spread\"\r\n  },\"cloudServiceConfiguration\":{\r\n    \"osFamily\":\"4\",\"targetOSVersion\":\"*\",\"currentOSVersion\":\"*\"\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Sat, 09 Apr 2016 00:08:52 GMT',
  etag: '0x8D3600B223C2A0A',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '8126e5d6-26ee-413b-9a77-612c63d703e8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'e77cda11-0734-455e-948d-ef2fcd54940c',
  dataserviceversion: '3.0',
  date: 'Sat, 09 Apr 2016 00:08:54 GMT',
  connection: 'close' });
 return result; }]];