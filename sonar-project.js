const sonarqubeScanner = require('sonarqube-scanner');
sonarqubeScanner(
  {
    serverUrl: process.env.REACT_APP_SONAR_DASHBOARD_URL,
    token: process.env.REACT_APP_SONAR_DASHBOARD_TOKEN,
    options: {
      'sonar.sources': '.',
      'sonar.inclusions': 'src/**', // Entry point of your code
      'sonar.javascript.lcov.reportPaths': 'coverage/lcov.info',
      'sonar.exclusions':
        '**/__tests__/**,**/assets/**,**/styles.js,src/App.js,src/index.js,src/commons/theme.js, src/services/api/base.js,src/services/mock/**, src/serviceWorker.js',
      'sonar.test.inclusions': '**/__tests__/*.test.js',
      'sonar.login': '367591295bd804eab2c598d954503d412b1ac638',
      'sonar.cpd.exclusions':
        '**/__tests__/**,**/assets/**,**/styles.js,src/App.js,src/index.js,src/services/api/base.js,src/services/mock, src/serviceWorker.js',
    },
  },
  () => {}
);
