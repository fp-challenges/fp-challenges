module Tests

open Recursions
open Expecto

[<Tests>]
let isNatTests = 
  testList "A test suite for checking if a number is natural or not" [
    testCase "Zero (0) is a natural number" (fun _ ->
      Expect.isTrue (Recursions.isNat 0.0) "Zero is not a natural number as was expected"
    )

    testCase "One (1) is a natural number" (fun _ ->
      Expect.isTrue (Recursions.isNat 1.0) "One is not a natural number as was expected"
    )

    testCase "1.1 is not a natural number" (fun _ ->
      Expect.isFalse (Recursions.isNat 1.1) "1.1 was considered a natural number unexpectedly"
    )

    testCase "A rather long real number is not a natural number" (fun _ ->
      Expect.isFalse (Recursions.isNat 3.141592653) "An approximation of pi was considered a natural number unexpectedly"
    )

    testCase "A negative integer is not a natural number" (fun _ ->
      Expect.isFalse (Recursions.isNat -5.0) "An approximation of pi was considered a natural number unexpectedly"
    )
  ]

[<Tests>]
let fibTests =
  testList "A test suite for the Fibonacci sequence" [
    testCase "The first number in the sequence is 0" (fun _ ->
      Expect.equal (Recursions.fib 1) 0 "Not equal"
    )

    testCase "The second number in the sequence is 1" (fun _ ->
      Expect.equal (Recursions.fib 2) 1 "Not equal"
    )

    testCase "The sixth number in the sequence is 5" (fun _ ->
      Expect.equal (Recursions.fib 6) 5 "Not equal"
    )

    testCase "The tenth number in the sequence is 34" (fun _ ->
      Expect.equal (Recursions.fib 10) 34 "Not equal"
    )

    testCase "The twentieth number in the sequence is 4181" (fun _ ->
      Expect.equal (Recursions.fib 20) 4181 "Not equal"
    )

    testCase "Negative numbers result in 0" (fun _ ->
      Expect.equal (Recursions.fib -5) 0 "Not equal"
    )
  ]

let testApp (x: string) = 
  x.ToUpper()

[<Tests>]
let mapTests =
  testList "A test suite for the map() implementation" [
    testCase "An empty list results in an empty list" (fun _ ->
      let actual = Recursions.map testApp []
      Expect.isEmpty actual "Should be empty when no values supplied"
    )

    testCase "A list with one element is turned into a new list with a single element" (fun _ ->
      let actual = Recursions.map testApp ["hello"]
      Expect.contains actual "HELLO" "The single value was not found as expected"
    )

    testCase "A list with many elements is turned into a new list with many elements" (fun _ ->
      let actual = Recursions.map testApp ["Hello"; "HELLO"; "gOoDbYe"; "HAlP"]
      Expect.containsAll actual ["HELLO"; "HELLO"; "GOODBYE"; "HALP"] "Does not contain all expected values"
    )
  ]

[<Tests>]
let joinTests =
  testList "A test suite for the join() implementation" [
    testCase "An empty list returns an empty string" (fun _ ->
      Expect.equal "" (Recursions.join ";" []) "An empty string was not returned as expected"
    )

    testCase "A list with one string returns a string with only that item listed (no separator)" (fun _ ->
      let actual = Recursions.join ";" ["only"]
      Expect.equal actual "only" "The string 'only' was not provided"
      Expect.isNotMatch actual ";" "The string had a separator when it should not have"
    )

    testCase "A list with two strings returns a string with both items (one instance of the separator)" (fun _ ->
      let actual = Recursions.join "|" ["cat ~/.bash_profile"; "grep test"]
      Expect.equal actual "cat ~/.bash_profile|grep test" "The correct string was not provided"
      Expect.isMatch actual "|" "The string does not have a separator when it should have"
    )

    testCase "A list with n strings returns a string with all n items (n-1 instances of the separator)" (fun _ ->
      let actual = Recursions.join "|" ["cat ~/.bash_profile"; "grep test"; "echo 'Check complete'; echo 'Ending'"]
      Expect.equal actual "cat ~/.bash_profile|grep test|echo 'Check complete'|echo 'Ending'" "The correct string was not provided"
    )
  ]