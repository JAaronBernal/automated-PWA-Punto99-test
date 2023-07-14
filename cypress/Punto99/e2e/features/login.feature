Feature: Login

  Scenario Outline: Successs Login
    Given login "<organization>"
    When credentials "<phoneNumber>"
    Then home page

    Examples: 
      |organization| phoneNumber    |
      |Sandbox     |5623613748      |
