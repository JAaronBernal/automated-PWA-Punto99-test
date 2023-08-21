Feature: Report my Earnings

  Scenario Outline: Download report
    Given login in P99 "<organization>" "<phoneNumber>"
    When the user enter in My Earnings
    Then donwload de report 
    

    Examples: 
      |organization| phoneNumber    |
      |Sandbox     |5623613748      |
