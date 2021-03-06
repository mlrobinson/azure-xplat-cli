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
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5099/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate3438?api-version=2015-03-01-preview')
  .reply(200, "{\"id\":\"/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5099/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate3438\",\"name\":\"xplatTestHDInsightClusterCreate3438\",\"type\":\"Microsoft.HDInsight/clusters\",\"location\":\"North Central US\",\"etag\":\"5d1de2ff-7a5e-481f-85f9-e6986bd034a0\",\"tags\":null,\"properties\":{\"clusterVersion\":\"3.2.7.889\",\"osType\":\"Windows\",\"clusterDefinition\":{\"kind\":\"Hadoop\"},\"computeProfile\":{\"roles\":[{\"name\":\"HeadNode\",\"targetInstanceCount\":2,\"hardwareProfile\":{\"vmSize\":\"Standard_D3\"},\"osProfile\":{\"windowsOperatingSystemProfile\":{\"rdpSettings\":{\"username\":\"xplattestrdpuser\",\"expiryDate\":\"2025-12-12T00:00:00\"}},\"linuxOperatingSystemProfile\":null}},{\"name\":\"workernode\",\"targetInstanceCount\":3,\"hardwareProfile\":{\"vmSize\":\"Standard_D3\"},\"osProfile\":{\"windowsOperatingSystemProfile\":{\"rdpSettings\":{\"username\":\"xplattestrdpuser\",\"expiryDate\":\"2025-12-12T00:00:00\"}},\"linuxOperatingSystemProfile\":null}}]},\"provisioningState\":\"Succeeded\",\"clusterState\":\"Running\",\"createdDate\":\"2016-04-28T19:18:39.943\",\"quotaInfo\":{\"coresUsed\":20},\"connectivityEndpoints\":[{\"name\":\"HTTPS\",\"protocol\":\"TCP\",\"location\":\"xplatTestHDInsightClusterCreate3438.azurehdinsight.net\",\"port\":443},{\"name\":\"RDP\",\"protocol\":\"TCP\",\"location\":\"xplatTestHDInsightClusterCreate3438.azurehdinsight.net\",\"port\":3389}],\"tier\":\"standard\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1388',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'cc136e79-4d23-465c-80c6-3f47b759d113',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14960',
  'x-ms-correlation-request-id': '88d01c4c-4574-468b-8915-465797ede14b',
  'x-ms-routing-request-id': 'WESTUS:20160428T194041Z:88d01c4c-4574-468b-8915-465797ede14b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 28 Apr 2016 19:40:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5099/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate3438?api-version=2015-03-01-preview')
  .reply(200, "{\"id\":\"/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5099/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate3438\",\"name\":\"xplatTestHDInsightClusterCreate3438\",\"type\":\"Microsoft.HDInsight/clusters\",\"location\":\"North Central US\",\"etag\":\"5d1de2ff-7a5e-481f-85f9-e6986bd034a0\",\"tags\":null,\"properties\":{\"clusterVersion\":\"3.2.7.889\",\"osType\":\"Windows\",\"clusterDefinition\":{\"kind\":\"Hadoop\"},\"computeProfile\":{\"roles\":[{\"name\":\"HeadNode\",\"targetInstanceCount\":2,\"hardwareProfile\":{\"vmSize\":\"Standard_D3\"},\"osProfile\":{\"windowsOperatingSystemProfile\":{\"rdpSettings\":{\"username\":\"xplattestrdpuser\",\"expiryDate\":\"2025-12-12T00:00:00\"}},\"linuxOperatingSystemProfile\":null}},{\"name\":\"workernode\",\"targetInstanceCount\":3,\"hardwareProfile\":{\"vmSize\":\"Standard_D3\"},\"osProfile\":{\"windowsOperatingSystemProfile\":{\"rdpSettings\":{\"username\":\"xplattestrdpuser\",\"expiryDate\":\"2025-12-12T00:00:00\"}},\"linuxOperatingSystemProfile\":null}}]},\"provisioningState\":\"Succeeded\",\"clusterState\":\"Running\",\"createdDate\":\"2016-04-28T19:18:39.943\",\"quotaInfo\":{\"coresUsed\":20},\"connectivityEndpoints\":[{\"name\":\"HTTPS\",\"protocol\":\"TCP\",\"location\":\"xplatTestHDInsightClusterCreate3438.azurehdinsight.net\",\"port\":443},{\"name\":\"RDP\",\"protocol\":\"TCP\",\"location\":\"xplatTestHDInsightClusterCreate3438.azurehdinsight.net\",\"port\":3389}],\"tier\":\"standard\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1388',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'cc136e79-4d23-465c-80c6-3f47b759d113',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14960',
  'x-ms-correlation-request-id': '88d01c4c-4574-468b-8915-465797ede14b',
  'x-ms-routing-request-id': 'WESTUS:20160428T194041Z:88d01c4c-4574-468b-8915-465797ede14b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 28 Apr 2016 19:40:41 GMT',
  connection: 'close' });
 return result; }]];