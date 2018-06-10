Feature: Task List

  Scenario: Listing task groups
    Given I have the following tasks:
      | id | group          | task                   | dependencyIds | completedAt          |
      | 1  | Purchases      | Go to the bank         |               |                      |
      | 2  | Purchases      | Buy hammer             | 1             | 2018-06-10 10:00:00Z |
      | 3  | Build Airplane | Hammer nails into wood | 2,3,4         |                      |
    When I visit Grouped Task List system
    Then I should see the following groups:
      | group          | subtitle               |
      | Build Airplane | 0 of 1 tasks completed |
      | Purchases      | 1 of 2 tasks completed |

  Scenario: Listing group tasks
    Given I have the following tasks:
      | id | group          | task                   | dependencyIds | completedAt |
      | 1  | Purchases      | Go to the bank         |               |             |
      | 2  | Purchases      | Buy hammer             | 1             |             |
      | 3  | Build Airplane | Hammer nails into wood | 2,3,4         |             |
    When I expand group "Purchases"
    Then I should see the following tasks:
      | task           |
      | Go to the bank |
      | Buy hammer     |
