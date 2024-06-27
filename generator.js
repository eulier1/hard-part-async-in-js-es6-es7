function* createFlow() {
    const num = 10
    const newNum = yield num
    yield 5 + newNum
    yield 6
  }

const foo = createFlow()
foo.next()
foo.next()
foo.next()