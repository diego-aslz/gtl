Feature: Task List

  Scenario: Listing groups
    Given I have the following tasks:
      | id | group          | task                   | dependencyIds | completedAt          |
      | 1  | Purchases      | Go to the bank         |               | 2018-06-10 10:00:00Z |
      | 2  | Purchases      | Buy hammer             | 1             |                      |
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
    And I visit Grouped Task List system
    When I open group "Purchases"
    Then I should see the following tasks:
      | task           | status     |
      | Go to the bank | incomplete |
      | Buy hammer     | locked     |

  Scenario: Completing a task
    Given I have the following tasks:
      | id | group     | task           | dependencyIds | completedAt |
      | 1  | Purchases | Go to the bank |               |             |
      | 2  | Purchases | Buy hammer     | 1             |             |
      | 3  | Purchases | Buy paint      | 2             |             |
    And I visit Grouped Task List system
    And I open group "Purchases"
    When I mark task "Go to the bank" as completed
    Then I should see the following tasks:
      | task           | status     |
      | Go to the bank | completed  |
      | Buy hammer     | incomplete |
      | Buy paint      | locked     |

  Scenario: Marking a completed task as incomplete
    Given I have the following tasks:
      | id | group     | task           | dependencyIds | completedAt          |
      | 1  | Purchases | Go to the bank |               | 2018-06-10 10:00:00Z |
      | 2  | Purchases | Buy hammer     | 1             | 2018-06-10 10:00:00Z |
      | 3  | Purchases | Buy paint      | 2             |                      |
    And I visit Grouped Task List system
    And I open group "Purchases"
    When I mark task "Buy hammer" as incomplete
    Then I should see the following tasks:
      | task           | status     |
      | Go to the bank | completed  |
      | Buy hammer     | incomplete |
      | Buy paint      | locked     |

  Scenario: Trying to complete a locked task
    Given I have the following tasks:
      | id | group     | task           | dependencyIds | completedAt |
      | 1  | Purchases | Go to the bank |               |             |
      | 2  | Purchases | Buy hammer     | 1             |             |
    And I visit Grouped Task List system
    And I open group "Purchases"
    When I mark task "Buy hammer" as completed
    Then I should have the following tasks:
      | id | group     | task           | dependencyIds | completedAt |
      | 1  | Purchases | Go to the bank |               |             |
      | 2  | Purchases | Buy hammer     | 1             |             |

  Scenario: Non-existent dependencies should be ignored
    Given I have the following tasks:
      | id | group     | task           | dependencyIds | completedAt |
      | 1  | Purchases | Go to the bank | 2             |             |
    And I visit Grouped Task List system
    And I open group "Purchases"
    When I mark task "Go to the bank" as completed
    Then I should see the following tasks:
      | task           | status    |
      | Go to the bank | completed |
