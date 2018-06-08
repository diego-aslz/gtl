Feature: Task List

  Scenario: Seeing task groups
    Given I have the following tasks:
      | id | group          | task                   | dependencyIds | completedAt |
      | 1  | Purchases      | Go to the bank         |               |             |
      | 1  | Purchases      | Buy hammer             | 1             |             |
      | 1  | Build Airplane | Hammer nails into wood | 2,3,4         |             |
    When I visit Grouped Task List system
    Then I should see the following groups:
      | Build Airplane |
      | Purchases      |
