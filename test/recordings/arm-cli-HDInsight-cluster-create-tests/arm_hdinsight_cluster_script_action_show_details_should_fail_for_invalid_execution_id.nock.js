// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '26d6d535-5164-443d-82f6-4c695caf7688',
    name: 'BDHadoopHumboldtCRPAdhocTestShortTerm',
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
  process.env['AZURE_ARM_TEST_LOCATION'] = 'NorthCentralUS';
  process.env['SSHCERT'] = 'test/myCert.pem';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5099/providers/Microsoft.HDInsight//clusters/xplatTestHDInsightClusterCreate1537/scriptExecutionHistory/1?api-version=2015-03-01-preview')
  .reply(404, "{\"code\":\"NotFound\",\"message\":\"Script with execution id '1' not found for cluster with id 'xplatTestHDInsightClusterCreate1537'\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '128',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '824479b6-a7a6-443a-a835-d9074f09d101',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14882',
  'x-ms-correlation-request-id': '4cabfc74-b126-4a7d-80b8-917496a84d5f',
  'x-ms-routing-request-id': 'WESTUS:20160428T200906Z:4cabfc74-b126-4a7d-80b8-917496a84d5f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 28 Apr 2016 20:09:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5099/providers/Microsoft.HDInsight//clusters/xplatTestHDInsightClusterCreate1537/scriptExecutionHistory/1?api-version=2015-03-01-preview')
  .reply(404, "{\"code\":\"NotFound\",\"message\":\"Script with execution id '1' not found for cluster with id 'xplatTestHDInsightClusterCreate1537'\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '128',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '824479b6-a7a6-443a-a835-d9074f09d101',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14882',
  'x-ms-correlation-request-id': '4cabfc74-b126-4a7d-80b8-917496a84d5f',
  'x-ms-routing-request-id': 'WESTUS:20160428T200906Z:4cabfc74-b126-4a7d-80b8-917496a84d5f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 28 Apr 2016 20:09:06 GMT',
  connection: 'close' });
 return result; }]];