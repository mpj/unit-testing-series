- good monday morning
- continuing with mocking

- intro

- implement response
  - black: note error with returning promise, show comment
  - white: shit
  - black: are we really testing the code
  - yellow: we are testing side effect
  - black: is this really test-first
  - green: i would say so, because we're not testing vatapi or fetch,
           in the sandbox were just figuring out how to call
- implement pending test country code if statement
- black: does this actually work
- green: when we are in control of the code we can see this all the time, but when side effect we have to verify
- verify in sandbox
  - black: how to get fetch in
  - green: inject!
  - red: feels like extra code
  - yellow: lots of code isnt all that bad, it's better with clear
  - green: there are magic dep inj
  - black: complicated, opaque
  - white: oops this broke
- fix credentials

- outro (encourage questions)

- good monday morning
  - jest built in mocks
- intro
- refactor to jest built in mocks
  - black: why
  - yellow: same as test runner - standardized, shorter
  - black: note duplication
- remove duplication
  - yellow:
    - red, green, refactor
    - allows us to safely refactor

- outro (encourage questions)