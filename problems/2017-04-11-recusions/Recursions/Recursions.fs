module Recursions

let rec fib n =
    if n <= 1 then 0
    elif n < 3 then 1
    else (fib (n - 2)) + (fib (n - 1))

let map fn lst =
    []

let join sep lst =
    ""

[<EntryPoint>]
let main argv =
    printfn "%A" argv
    0 // return an integer exit code
