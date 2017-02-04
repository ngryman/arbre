import test from 'ava'
import insertAt from '../lib/insert-at'

test('insert at given index', t => {
  const root = Tree(0, 1, 3)
  const inserted = Tree(2)
  const ret = insertAt(root, inserted, 1)

  t.is(ret, inserted)
  t.deepEqual(root, Tree(0, 1, 2, 3))
})

test('ignore out of lower-bound index', t => {
  const node = Tree()

  t.notThrows(() => {
    const ret = insertAt(Tree(), node, -1)
    t.is(ret, undefined)
    t.is(node.children.length, 0)
  })
})

test('ignore out of upper-bound index', t => {
  const node = Tree()

  t.notThrows(() => {
    const ret = insertAt(Tree(), node, 1)
    t.is(ret, undefined)
    t.is(node.children.length, 0)
  })
})

test('ignore itself', t => {
  const node = Tree()
  const ret = insertAt(node, node, 0)

  t.is(ret, undefined)
  t.is(node.children.length, 0)
  t.not(node.parent, node)
})

test('ignore no argument', t => {
  t.notThrows(() => {
    const ret = insertAt()
    t.is(ret, undefined)
  })
})
