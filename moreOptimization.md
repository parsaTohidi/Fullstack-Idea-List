## More optimizations (if I have more time or want to optimize the project more)
> 1. Definitly, I will add much more test cases with Jest such as unit tests, integrations tests and even End to end tests for testing routes of backend. It is a must always to me but because of some lack of time and being bussy and the option to talk about it on the interview session I decided to concentrate on other parts first.

> 2. If I have more time or the projects requires i will add a database for storing the ideas in it and even it can affect the auto generated ideas and its constants and templates too because these data can be dynamic and change or get added frequently.

> 3. Storing the constants and some static values such as port number or lots of other constants into a config file or on some content managementthird parties like Optimizely or even storing them into some secret managers like AWS secret manager if they are sensetive informations or based on the data storing them in DB.

> 4. I will prefer using Nuxtjs instead of using the vuejs directly as the Nuxt framework offers lots of great built in features and great structure for routings and SSR and SEO staff if the front project is going to be bigger and more complex.

> 5. I will defently prefer using global state managment instead of vue-query which can create a totla mess if  we wanted to use it and keep it while the project will get biiger and more complex.best libraries fro such usecase can be Vuex and Pinia that always leads us to best practices and clean data and state structure.

> 6. After adding test for sure i will add a library lik husky in order to run tests or some validations before pushing the code into the branch or even before merging the PR, or even some github workflow and actions based on the requirements and project size.

> 7. Adding API doc to the system using libraries like apidock js or swagger that is always a must if we would have a big rest application or at leas listing them in readme file.

> 8. Using enviroment variables for storing some normal configuration static variables like enviroment or port, ..

> 9. Using ESLint in order to get notified on problems and bad code styles or even some typing issues or any issue of typescript and clean code.

> 10. Using differnet middlewares and validations like Joi or express validator for different payload validations and maybe authentications.

> 11. Using reCaptcha for preventing from DoS attack or putting high traffic load and requests on backend and even some ratelimiter packages base on Name or IP or other factors.

> 12. Handling paginations for getting list of ideas when the numbers of those ideas will grow granually.

> 13. Seperating the front and backend projects in order to maintenance them and monitor them seperatly and deploy them individually.