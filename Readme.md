# Polestar QA Tests

## Frontend Tests

This project consists on the frontend test cases on the link https://www.polestar.com/se

- Implemented the Pojo model folder structure where I segregated the HomePage elements, DiscoverPage & TestDriverPage with test cases.
- Total of six test cases were written to automate minimal sample checks in the polestar site.

### Command to run the frontend test

```
cd frontend-tests

npx playwright test
```

## Backend Test

This project consists on the backend test cases on the link https://reqres.in/

- Implemented the test cases with GET, POST, PUT and DELETE http methods.
- Total of four test cases were written to test the http methods.

### Command to run the frontend test

```
cd backend-tests

npx playwright test
```

## k6-performance Test

This project consists on the k6 performance test case on the link https://www.polestar.com/se/test-drive/booking/ps4/

- Implemented the GET call performance test case with virtual users of 25vu.
- More information of this k6-performance framework in written in Readme.md file in k6-performance folder.

## Azure pipeline set-up

- I have configured the pipeline stages in such a way that the playwright test can run in the azure pipeline and the json report & artifacts will be published as well. We can find it in azure-pipeline.yml file

### Tech stack used

- Node.js
- Playwright
- JavaScript  
- Docker & docker-compose installed (for k6-performance tests)

## Allure Report

- I configured the Allure report where the vibrant and user friendly report can be generated.
- we need to install package using below command
```
npm install -D allure-playwright
```
- Reports will stored in allure-results folder.
- we need to install allure in our local and run the bvelow command to vie thw report
```
allure open ./allure-report
```

ref: https://www.npmjs.com/package/allure-playwright


