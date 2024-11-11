# Polestar QA Tests

## Frontend Tests

This project consists on the frontend test cases on the link https://www.polestar.com/se

- Implemented the Pojo model folder structure where I segregated the HomePage elements & DiscoverPage with test cases.
- Total of four test cases were written to automate and check the 'Discover' & 'Ready For Delivery' links along with Discover page menu values printing.

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

