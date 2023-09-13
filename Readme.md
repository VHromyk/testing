Testing pyramid:

| Level  | Type test         | Description                                                    | Proportion |
|--------|-------------------|----------------------------------------------------------------|------------|
| Top    | E2E tests         | Testing all application, as rule automatically                 | 10%        |
| Middle | Integration tests | Testing integration between the components or systems          | 20%-30%    |
| Low    | UNIT              | Testing separated units of code (functions, methods, handlers) | 70%-80%    |


Testing group:

| Functional            | Not functional            |
|-----------------------|---------------------------|
| Module testing (unit) | Нагрузочное тестирование  |
| Integration testing   | Тусторование безопасности |
 | End-to-end (e2e)      | Регресионное тестирование |

1. E2E
2. Integration
(Screenshot test)
3. UNIT



1. Jest (unit test)
2. React-testing-library (react-router-dom + redux) (integration testing)
3. E2E | Webdriver IO (cypress, puppeteer, hermione etc)
4. Storybook + Loki