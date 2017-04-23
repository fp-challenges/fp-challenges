# Recursion

You finished school a long while ago now. Back in the day, it was all ASM, double-pointers (C doesn't have references after all), and a little taste of this "Lisp" business that only academics use.

But that was ages ago now. You've been developing "for the enterprise" for a long time running.

[While searching StackOverflow for reverse an array in JavaScript, you stumble upon this](http://stackoverflow.com/a/5164159/576975):

    var reverseArray = function(x,indx,str) {
      return indx == 0 ? str : reverseArray(x, --indx, (str+= " " + x[indx]));;
    }

You've come to discover that the these hipsters use ternary operators and inline assignments. These hooligans!
More importantly though, you notice this function seems to call itself. It's a recursive function.

The goal of this problem is to implement several functions recursively.

## General Information

As with the other challenges, practicing functional programming is not only encouraged but also required!

Specifically in this case, you'll be focusing on implementing the following functions *recursively*.
Skip the obvious workarounds like using imperative programming or calling the existing library functions.

1. [Fibonacci sequence](https://en.wikipedia.org/wiki/Fibonacci_number). This is the summation of Fib(n-1) and Fib(n-2) until n reaches 0.
1. [The list map() function](https://msdn.microsoft.com/en-us/visualfsharpdocs/conceptual/list.map%5B't,'u%5D-function-%5Bfsharp%5D). Same as other `map()` functions such as in JavaScript (`[].map(function() {...})`).
1. [The list join() function](http://stackoverflow.com/questions/1779048/how-do-i-concatenate-a-list-of-strings-in-f). Same as other `join()` functions such as in JavaScript (`['x', 'y', 'z'].join(';')`).

The functions are stubbed out in the `Recursions/Recursions.fs` file.
The test cases are in the `Recursions.Tests/Tests.fs` file.

F# infers the types that functions should have based on the implementation. For clarity, we have written
them explicitly into the stub files to avoid confusion. They can be removed once functioning.

## Setup Details

The other new challenge is that the problem setup is in F#. The tools are provided in the problem to get up-and-running assuming you have the following running:

* Mono (or .NET Core)
* F# compiler

We also recommend using Visual Studio Code for a nice environment to work with F# in.

### A quick setup guide

This assumes you're OK with trying out Visual Studio Code (VSC). If you're not, it should be OK to use a terminal
and replace the parts where FAKE is used with `build.sh` or `build.cmd` your OS.

1. Install VSC.
1. Install the following Extensions:
    1. Ionide-fsharp
    1. Ionide-Paket
    1, Ionide-FAKE
1. Fork/update your own fp-challenges repository to get the newest challenge.
1. In VSC, use "Open Folder" to open up the Recursions problem.
1. Open up the command palette (Ctrl-Shift-P), type `FAKE: Build`, press enter.
1. Select the "Test" option from here.

If all has gone well, the code build & the test build should have run. You should see failing tests in the "Output"
section of VSC.