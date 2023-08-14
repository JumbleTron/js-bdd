Feature: Get todos list from json placeholder

  Scenario: Get lists without filters
    Given GET Request to the url "https://jsonplaceholder.typicode.com/todos"
    When I receive a response
    Then Response code should be 200

  Scenario: Get lists for user with id 2
    Given GET Request to the url "https://jsonplaceholder.typicode.com/todos"
    Given I set query param key "userId" to "2"
    When I receive a response
    Then Response code should be 200

  Scenario: Get lists for user with id 2 and completed false
    Given GET Request to the url "https://jsonplaceholder.typicode.com/todos"
    Given I set query param key "userId" to "2"
    Given I set query param key "completed" to "false"
    When I receive a response
    Then Response code should be 200
