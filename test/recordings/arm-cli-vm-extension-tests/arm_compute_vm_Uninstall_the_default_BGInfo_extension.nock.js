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
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension8895/providers/Microsoft.Compute/virtualMachines/xplatvmExt?api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"5fdde5ce-ec58-4768-882f-a2da8e73c3c3\",\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_DS1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"MicrosoftWindowsServerEssentials\",\r\n        \"offer\": \"WindowsServerEssentials\",\r\n        \"sku\": \"WindowsServerEssentials\",\r\n        \"version\": \"1.0.20131018\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Windows\",\r\n        \"name\": \"clic55277d3b433d12e-os-1461868826399\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatstoragext3626.blob.core.windows.net/xplatstoragecntext6121/clic55277d3b433d12e-os-1461868826399.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvmExt\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"windowsConfiguration\": {\r\n        \"provisionVMAgent\": true,\r\n        \"enableAutomaticUpdates\": true\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension8895/providers/Microsoft.Network/networkInterfaces/xplatnicExt\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://xplatstoragext3626.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"resources\": [\r\n    {\r\n      \"properties\": {\r\n        \"publisher\": \"Microsoft.Compute\",\r\n        \"type\": \"BGInfo\",\r\n        \"typeHandlerVersion\": \"2.1\",\r\n        \"autoUpgradeMinorVersion\": true,\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension8895/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/BGInfo\",\r\n      \"name\": \"BGInfo\",\r\n      \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n      \"location\": \"eastus\"\r\n    }\r\n  ],\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension8895/providers/Microsoft.Compute/virtualMachines/xplatvmExt\",\r\n  \"name\": \"xplatvmExt\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2260',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_131056317130923594',
  'x-ms-request-id': '28cc3291-bcad-4636-ab71-c5de1adedb53',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '57c6c521-749f-48d0-a9e9-0901d23bd86a',
  'x-ms-routing-request-id': 'CENTRALUS:20160428T184959Z:57c6c521-749f-48d0-a9e9-0901d23bd86a',
  date: 'Thu, 28 Apr 2016 18:49:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension8895/providers/Microsoft.Compute/virtualMachines/xplatvmExt?api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"5fdde5ce-ec58-4768-882f-a2da8e73c3c3\",\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_DS1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"MicrosoftWindowsServerEssentials\",\r\n        \"offer\": \"WindowsServerEssentials\",\r\n        \"sku\": \"WindowsServerEssentials\",\r\n        \"version\": \"1.0.20131018\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Windows\",\r\n        \"name\": \"clic55277d3b433d12e-os-1461868826399\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatstoragext3626.blob.core.windows.net/xplatstoragecntext6121/clic55277d3b433d12e-os-1461868826399.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvmExt\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"windowsConfiguration\": {\r\n        \"provisionVMAgent\": true,\r\n        \"enableAutomaticUpdates\": true\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension8895/providers/Microsoft.Network/networkInterfaces/xplatnicExt\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://xplatstoragext3626.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"resources\": [\r\n    {\r\n      \"properties\": {\r\n        \"publisher\": \"Microsoft.Compute\",\r\n        \"type\": \"BGInfo\",\r\n        \"typeHandlerVersion\": \"2.1\",\r\n        \"autoUpgradeMinorVersion\": true,\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension8895/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/BGInfo\",\r\n      \"name\": \"BGInfo\",\r\n      \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n      \"location\": \"eastus\"\r\n    }\r\n  ],\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension8895/providers/Microsoft.Compute/virtualMachines/xplatvmExt\",\r\n  \"name\": \"xplatvmExt\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2260',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_131056317130923594',
  'x-ms-request-id': '28cc3291-bcad-4636-ab71-c5de1adedb53',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '57c6c521-749f-48d0-a9e9-0901d23bd86a',
  'x-ms-routing-request-id': 'CENTRALUS:20160428T184959Z:57c6c521-749f-48d0-a9e9-0901d23bd86a',
  date: 'Thu, 28 Apr 2016 18:49:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension8895/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/BGInfo?$expand=instanceView&api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"publisher\": \"Microsoft.Compute\",\r\n    \"type\": \"BGInfo\",\r\n    \"typeHandlerVersion\": \"2.1\",\r\n    \"autoUpgradeMinorVersion\": true,\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"instanceView\": {\r\n      \"name\": \"BGInfo\",\r\n      \"type\": \"Microsoft.Compute.BGInfo\",\r\n      \"typeHandlerVersion\": \"2.1\",\r\n      \"statuses\": [\r\n        {\r\n          \"code\": \"ProvisioningState/succeeded\",\r\n          \"level\": \"Info\",\r\n          \"displayStatus\": \"Provisioning succeeded\",\r\n          \"message\": \"Plugin enabled (name: Microsoft.Compute.BGInfo, version: 2.1).\"\r\n        }\r\n      ]\r\n    }\r\n  },\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension8895/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/BGInfo\",\r\n  \"name\": \"BGInfo\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n  \"location\": \"eastus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '887',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_131056317130923594',
  'x-ms-request-id': '3111d521-06aa-4dbd-80bf-ce559e19fc21',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '34042367-a24b-441f-8808-9018eaba2b41',
  'x-ms-routing-request-id': 'CENTRALUS:20160428T184959Z:34042367-a24b-441f-8808-9018eaba2b41',
  date: 'Thu, 28 Apr 2016 18:49:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension8895/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/BGInfo?$expand=instanceView&api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"publisher\": \"Microsoft.Compute\",\r\n    \"type\": \"BGInfo\",\r\n    \"typeHandlerVersion\": \"2.1\",\r\n    \"autoUpgradeMinorVersion\": true,\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"instanceView\": {\r\n      \"name\": \"BGInfo\",\r\n      \"type\": \"Microsoft.Compute.BGInfo\",\r\n      \"typeHandlerVersion\": \"2.1\",\r\n      \"statuses\": [\r\n        {\r\n          \"code\": \"ProvisioningState/succeeded\",\r\n          \"level\": \"Info\",\r\n          \"displayStatus\": \"Provisioning succeeded\",\r\n          \"message\": \"Plugin enabled (name: Microsoft.Compute.BGInfo, version: 2.1).\"\r\n        }\r\n      ]\r\n    }\r\n  },\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension8895/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/BGInfo\",\r\n  \"name\": \"BGInfo\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n  \"location\": \"eastus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '887',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_131056317130923594',
  'x-ms-request-id': '3111d521-06aa-4dbd-80bf-ce559e19fc21',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '34042367-a24b-441f-8808-9018eaba2b41',
  'x-ms-routing-request-id': 'CENTRALUS:20160428T184959Z:34042367-a24b-441f-8808-9018eaba2b41',
  date: 'Thu, 28 Apr 2016 18:49:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension8895/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/BGInfo?api-version=2016-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus/operations/9e7b8109-f457-4fa2-ab19-13096f5471fb?monitor=true&api-version=2016-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus/operations/9e7b8109-f457-4fa2-ab19-13096f5471fb?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_131056317130923594',
  'x-ms-request-id': '9e7b8109-f457-4fa2-ab19-13096f5471fb',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '8f43561d-ec0d-4b24-9b06-e040a13907c4',
  'x-ms-routing-request-id': 'CENTRALUS:20160428T185001Z:8f43561d-ec0d-4b24-9b06-e040a13907c4',
  date: 'Thu, 28 Apr 2016 18:50:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension8895/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/BGInfo?api-version=2016-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus/operations/9e7b8109-f457-4fa2-ab19-13096f5471fb?monitor=true&api-version=2016-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus/operations/9e7b8109-f457-4fa2-ab19-13096f5471fb?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_131056317130923594',
  'x-ms-request-id': '9e7b8109-f457-4fa2-ab19-13096f5471fb',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '8f43561d-ec0d-4b24-9b06-e040a13907c4',
  'x-ms-routing-request-id': 'CENTRALUS:20160428T185001Z:8f43561d-ec0d-4b24-9b06-e040a13907c4',
  date: 'Thu, 28 Apr 2016 18:50:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus/operations/9e7b8109-f457-4fa2-ab19-13096f5471fb?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-04-28T18:50:00.4459986+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"9e7b8109-f457-4fa2-ab19-13096f5471fb\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_131056317130923594',
  'x-ms-request-id': '789a02db-46fe-491b-85d0-344a672b8593',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'fa8d2bdc-65d6-472c-a122-4158390454df',
  'x-ms-routing-request-id': 'CENTRALUS:20160428T185031Z:fa8d2bdc-65d6-472c-a122-4158390454df',
  date: 'Thu, 28 Apr 2016 18:50:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus/operations/9e7b8109-f457-4fa2-ab19-13096f5471fb?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-04-28T18:50:00.4459986+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"9e7b8109-f457-4fa2-ab19-13096f5471fb\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_131056317130923594',
  'x-ms-request-id': '789a02db-46fe-491b-85d0-344a672b8593',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'fa8d2bdc-65d6-472c-a122-4158390454df',
  'x-ms-routing-request-id': 'CENTRALUS:20160428T185031Z:fa8d2bdc-65d6-472c-a122-4158390454df',
  date: 'Thu, 28 Apr 2016 18:50:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus/operations/9e7b8109-f457-4fa2-ab19-13096f5471fb?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-04-28T18:50:00.4459986+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"9e7b8109-f457-4fa2-ab19-13096f5471fb\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_131056317130923594',
  'x-ms-request-id': '1a0d4ef0-f329-48ac-839d-945d09230566',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'af1ca0ad-89b6-4fc1-8cdc-4504a412ae76',
  'x-ms-routing-request-id': 'CENTRALUS:20160428T185102Z:af1ca0ad-89b6-4fc1-8cdc-4504a412ae76',
  date: 'Thu, 28 Apr 2016 18:51:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus/operations/9e7b8109-f457-4fa2-ab19-13096f5471fb?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-04-28T18:50:00.4459986+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"9e7b8109-f457-4fa2-ab19-13096f5471fb\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_131056317130923594',
  'x-ms-request-id': '1a0d4ef0-f329-48ac-839d-945d09230566',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'af1ca0ad-89b6-4fc1-8cdc-4504a412ae76',
  'x-ms-routing-request-id': 'CENTRALUS:20160428T185102Z:af1ca0ad-89b6-4fc1-8cdc-4504a412ae76',
  date: 'Thu, 28 Apr 2016 18:51:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus/operations/9e7b8109-f457-4fa2-ab19-13096f5471fb?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-04-28T18:50:00.4459986+00:00\",\r\n  \"endTime\": \"2016-04-28T18:51:18.9303542+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"9e7b8109-f457-4fa2-ab19-13096f5471fb\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_131056317130923594',
  'x-ms-request-id': '6245c0e7-9b85-40f3-a3ab-749a61c396b1',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '7d98dee1-bc07-4138-9351-3fd9bdde5996',
  'x-ms-routing-request-id': 'CENTRALUS:20160428T185132Z:7d98dee1-bc07-4138-9351-3fd9bdde5996',
  date: 'Thu, 28 Apr 2016 18:51:32 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus/operations/9e7b8109-f457-4fa2-ab19-13096f5471fb?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-04-28T18:50:00.4459986+00:00\",\r\n  \"endTime\": \"2016-04-28T18:51:18.9303542+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"9e7b8109-f457-4fa2-ab19-13096f5471fb\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_131056317130923594',
  'x-ms-request-id': '6245c0e7-9b85-40f3-a3ab-749a61c396b1',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '7d98dee1-bc07-4138-9351-3fd9bdde5996',
  'x-ms-routing-request-id': 'CENTRALUS:20160428T185132Z:7d98dee1-bc07-4138-9351-3fd9bdde5996',
  date: 'Thu, 28 Apr 2016 18:51:32 GMT',
  connection: 'close' });
 return result; }]];