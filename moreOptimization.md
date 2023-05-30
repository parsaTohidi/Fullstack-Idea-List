## More optimizations (if I have more time or want to optimize the project more)
> 1. Definitely, I will add much more test cases with Jest such as unit tests, integration tests, and even End to end tests for testing routes of the backend. It is always a must, but because of some lack of time and being busy and the option to talk about it in the interview session, I decided to concentrate on other parts first.

> 2. If I have more time or the project requires I will add a database for storing the ideas in it and even it can affect the auto-generated ideas and their constants and templates too because these data can be dynamic and change or get added frequently.

> 3. Storing the constants and some static values such as port number or lots of other constants into a config file or on some content management third parties like Optimizely or even storing them into some secret managers like AWS secret manager if they are sensitive information or based on the data storing them in DB.

> 4. I will prefer using Nuxtjs instead of using the vuejs directly as the Nuxt framework offers lots of great built-in features and great structure for routings and SSR and SEO staff if the front project is going to be bigger and more complex.

> 5. I will definitely prefer using global state management instead of vue-query which can create a total mess if we wanted to use it and keep it while the project gets bigger and more complex. best libraries for such use cases can be Vuex and Pinia which always leads us to best practices and clean data and state structure.

> 6. After adding the test sure I will add a library like Husky in order to run tests or some validations before pushing the code into the branch or even before merging the PR, or even some GitHub workflow and actions based on the requirements and project size.

> 7. Adding API doc to the system using libraries like API doc js or swagger is always a must if we would have a big rest application or at least list them in a readme file.

> 8. Using environment variables for storing some typical configuration static variables like environment or port,...

> 9. Using ESLint in order to get notified on problems and bad code styles or even some typing issues or any issue of typescript and clean code.

> 10. Using different middlewares and validations like Joi or express validator for different payload validations and maybe authentications.

> 11. Using reCaptcha for preventing DoS attacks or putting high traffic load and requests on the backend and even some rate limiter packages base on Name or IP or other factors.

> 12. Handling paginations for getting a list of ideas when the number of those ideas will grow gradually.

> 13. Separating the front and backend projects in order to maintain them and monitor them separately and deploy them individually.