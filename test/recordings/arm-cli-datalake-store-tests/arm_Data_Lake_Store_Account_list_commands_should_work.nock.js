// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '53d9063d-87ae-4ea8-be90-3686c3b8669f',
    name: 'Visual Studio Ultimate with MSDN',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '6e606ece-3a5a-4674-a654-d6b02bc5a51b',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeStore/accounts?api-version=2015-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"testdatalake11362.azuredatalakestore.net\",\"accountId\":\"10fb07d1-7353-443f-b529-ceb233756312\",\"creationTime\":\"2016-04-28T01:04:09.0392712Z\",\"lastModifiedTime\":\"2016-04-28T01:04:09.0392712Z\"},\"location\":\"East US 2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/rgaba18242/providers/Microsoft.DataLakeStore/accounts/testdatalake11362\",\"name\":\"testdatalake11362\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"testdatalake23104.azuredatalakestore.net\",\"accountId\":\"1c8b511a-6150-4485-b1b5-4f57febd18b5\",\"creationTime\":\"2016-04-28T01:04:46.0154923Z\",\"lastModifiedTime\":\"2016-04-28T01:04:46.0154923Z\"},\"location\":\"East US 2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/rgaba18242/providers/Microsoft.DataLakeStore/accounts/testdatalake23104\",\"name\":\"testdatalake23104\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls206.azuredatalakestore.net\",\"accountId\":\"2ad8ebd0-8eab-4a00-88cb-32afdac5687c\",\"creationTime\":\"2016-04-28T18:28:37.5441899Z\",\"lastModifiedTime\":\"2016-04-28T18:28:37.5441899Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls206\",\"name\":\"xplattestadls206\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls7064.azuredatalakestore.net\",\"accountId\":\"87439f8c-ff9c-4da6-9ea0-17b7f501f271\",\"creationTime\":\"2016-04-28T18:28:03.089248Z\",\"lastModifiedTime\":\"2016-04-28T18:28:03.089248Z\"},\"location\":\"eastus2\",\"tags\":{},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls7064\",\"name\":\"xplattestadls7064\",\"type\":\"Microsoft.DataLakeStore/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2127',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'e35e7c10-8184-450b-918e-c8b387d6536c',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'a64dd081-cbf4-49f2-b3da-5d1ec135c662',
  'x-ms-routing-request-id': 'WESTUS:20160428T182917Z:a64dd081-cbf4-49f2-b3da-5d1ec135c662',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 28 Apr 2016 18:29:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeStore/accounts?api-version=2015-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"testdatalake11362.azuredatalakestore.net\",\"accountId\":\"10fb07d1-7353-443f-b529-ceb233756312\",\"creationTime\":\"2016-04-28T01:04:09.0392712Z\",\"lastModifiedTime\":\"2016-04-28T01:04:09.0392712Z\"},\"location\":\"East US 2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/rgaba18242/providers/Microsoft.DataLakeStore/accounts/testdatalake11362\",\"name\":\"testdatalake11362\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"testdatalake23104.azuredatalakestore.net\",\"accountId\":\"1c8b511a-6150-4485-b1b5-4f57febd18b5\",\"creationTime\":\"2016-04-28T01:04:46.0154923Z\",\"lastModifiedTime\":\"2016-04-28T01:04:46.0154923Z\"},\"location\":\"East US 2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/rgaba18242/providers/Microsoft.DataLakeStore/accounts/testdatalake23104\",\"name\":\"testdatalake23104\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls206.azuredatalakestore.net\",\"accountId\":\"2ad8ebd0-8eab-4a00-88cb-32afdac5687c\",\"creationTime\":\"2016-04-28T18:28:37.5441899Z\",\"lastModifiedTime\":\"2016-04-28T18:28:37.5441899Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls206\",\"name\":\"xplattestadls206\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls7064.azuredatalakestore.net\",\"accountId\":\"87439f8c-ff9c-4da6-9ea0-17b7f501f271\",\"creationTime\":\"2016-04-28T18:28:03.089248Z\",\"lastModifiedTime\":\"2016-04-28T18:28:03.089248Z\"},\"location\":\"eastus2\",\"tags\":{},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls7064\",\"name\":\"xplattestadls7064\",\"type\":\"Microsoft.DataLakeStore/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2127',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'e35e7c10-8184-450b-918e-c8b387d6536c',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'a64dd081-cbf4-49f2-b3da-5d1ec135c662',
  'x-ms-routing-request-id': 'WESTUS:20160428T182917Z:a64dd081-cbf4-49f2-b3da-5d1ec135c662',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 28 Apr 2016 18:29:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts?api-version=2015-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls206.azuredatalakestore.net\",\"accountId\":\"2ad8ebd0-8eab-4a00-88cb-32afdac5687c\",\"creationTime\":\"2016-04-28T18:28:37.5441899Z\",\"lastModifiedTime\":\"2016-04-28T18:28:37.5441899Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls206\",\"name\":\"xplattestadls206\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls7064.azuredatalakestore.net\",\"accountId\":\"87439f8c-ff9c-4da6-9ea0-17b7f501f271\",\"creationTime\":\"2016-04-28T18:28:03.089248Z\",\"lastModifiedTime\":\"2016-04-28T18:28:03.089248Z\"},\"location\":\"eastus2\",\"tags\":{},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls7064\",\"name\":\"xplattestadls7064\",\"type\":\"Microsoft.DataLakeStore/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1093',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'a7db9431-aa9b-4df7-9c65-24664ff14102',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '30c44553-ec3b-480a-b9f8-8ea6d7368bba',
  'x-ms-routing-request-id': 'WESTUS:20160428T182918Z:30c44553-ec3b-480a-b9f8-8ea6d7368bba',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 28 Apr 2016 18:29:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts?api-version=2015-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls206.azuredatalakestore.net\",\"accountId\":\"2ad8ebd0-8eab-4a00-88cb-32afdac5687c\",\"creationTime\":\"2016-04-28T18:28:37.5441899Z\",\"lastModifiedTime\":\"2016-04-28T18:28:37.5441899Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls206\",\"name\":\"xplattestadls206\",\"type\":\"Microsoft.DataLakeStore/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls7064.azuredatalakestore.net\",\"accountId\":\"87439f8c-ff9c-4da6-9ea0-17b7f501f271\",\"creationTime\":\"2016-04-28T18:28:03.089248Z\",\"lastModifiedTime\":\"2016-04-28T18:28:03.089248Z\"},\"location\":\"eastus2\",\"tags\":{},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls7064\",\"name\":\"xplattestadls7064\",\"type\":\"Microsoft.DataLakeStore/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1093',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'a7db9431-aa9b-4df7-9c65-24664ff14102',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '30c44553-ec3b-480a-b9f8-8ea6d7368bba',
  'x-ms-routing-request-id': 'WESTUS:20160428T182918Z:30c44553-ec3b-480a-b9f8-8ea6d7368bba',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 28 Apr 2016 18:29:17 GMT',
  connection: 'close' });
 return result; }]];