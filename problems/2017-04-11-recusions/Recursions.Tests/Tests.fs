module Tests

open Recursions
open Expecto

[<Tests>]
let fibTests =
  testList "A test for the Fibonacci sequence" [
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

[<Tests>]
let mapTests =
  testList "A list map() implementation test" [
    testCase "An empty list results in an empty list" (fun _ ->
      Expect.isTrue false "Should be true"
    )

    testCase "A list with one element is turned into a new list with a single element" (fun _ ->
      Expect.isTrue false "Should be true"
    )

    testCase "A list with many elements is turned into a new list with many elements" (fun _ ->
      Expect.isTrue false "Should be false"
    )
  ]

[<Tests>]
let joinTests =
  testList "A list join() implementation" [
    testCase "An empty list returns an empty string" (fun _ ->
      Expect.isTrue false "Should be true"
    )

    testCase "A list with one string returns a string with only that item listed (no separator)" (fun _ ->
      Expect.isTrue false "Should be true"
    )

    testCase "A list with two strings returns a string with both items (one instance of the separator)" (fun _ ->
      Expect.isTrue false "Should be true"
    )

    testCase "A list with n strings returns a string with all n items (n-1 instances of the separator)" (fun _ ->
      Expect.isTrue false "Should be true"
    )
  ]