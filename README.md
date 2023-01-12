## Developer Test: Frontend Development

**Summary**

We need you to take the following standard technical assessment to enable us to gauge the following:

1.  Speed
2.  How you write code using the language in your job application (Flutter, ReactJS, VueJS, Angular). (correctness, efficiency, readable, clear).
3.  How you decompose a problem and design a solution.
4.  How you are able to maintain a consistent state throughout the application using a dedicated state management container.
5.  How you are able to conform to ECMAScript standards for JavaScript throughout the application.
6.  Are you able to consume an API to communicate with an external data source within your application?
7.  How complete and thoughtful your implementation is. Can the reviewer run it immediately?

**Quiz:**

Given the below API endpoint, you are required to complete the following tasks:

1.  Setup a fresh web app. The setup should use Webpack as the dedicated module bundler and dependency manager for your web app. It should also use either yarn or npm for package management.
2.  Implement the Browse and the Edit endpoints below.

**Hint:**

For speed, you could use a project initiator, eg CreateReactApp for React contains pre configured webpack settings.

1. Establish a stable state tree for the application.
2. Once all is set, use the provided API endpoint to fetch data from an external server and display it in your web app, conforming a design template of your choice.

**Note:**
It is key for your web app to use a state management container to handle all data mutations. As such, you are required to illustrate the use of the different component lifecycle hooks of the framework used as well as the following key concepts of state management container used:

**Redux:**

- State
- Store
- Reducers
- Actions
- Action creators

Complementing the understanding of the JavaScript framework used, the quiz focuses on knowledge of scoping, function expressions (and how they differ from function declarations), references, process of variable and function declaration, order of evaluation, and a couple more things like delete operator, object and array instantiation, assignment and mutation as used in JavaScript.

These are all relatively simple concepts, which we think every professional JavaScript developer should know.

Most of these are applied in practice quite often.

**API Endpoints:**

To retrieve the data, the headers must include `x-apikey: 63be7360969f06502871ad7f`

Curl Example:

    curl -k -i -H "Content-Type: application/json" -H "x-apikey: 63be7360969f06502871ad7f" -X GET 'https://touchinspiration-0ada.restdb.io/rest/sample'

With that in mind, use the following endpoints to interact with your data:

#### Browse

**Method: GET**

**Endpoint:** "[https://touchinspiration-0ada.restdb.io/rest/sample](https://touchinspiration-0ada.restdb.io/rest/sample)"

#### Edit:

**Method: PATCH**

**Endpoint:** "[https://touchinspiration-0ada.restdb.io/rest/sample/{\_id}](https://touchinspiration-0ada.restdb.io/rest/sample/_id)"

    Parameters: {
      "name": "Barret Wallbutton",
      "email"=>"bwallbutton0@salon.com",
      "occupation": "Geological Engineer",
      "bio": "aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent"
    }

---

**Submission:**

Extra points for pretty functionality.

Once you have completed the assessment reply to this email with a link to your public git(github/gitlab/etc) repo for assessment.
