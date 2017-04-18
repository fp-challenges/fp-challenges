module Recursions

let rec isNat (x:float) : bool = 
    if x < 0.0 then false
    elif x = 0.0 then true
    else isNat <| x - 1.0

let rec fib (n: int) : int =
    -1

let map (fn: 'a -> 'b) (values: 'a list) : 'b list =
    ["lol"]

let join (sep: string) (values: 'a list) : string =
    "lol"
