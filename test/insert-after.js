import test from 'ava'
import insertAfter from '../lib/insert-after'

test('insert after a node', t => {
  const root = Tree(0, 1, 3)
  const node = root.children[0]
  const target = Tree(2)
  const ret = insertAfter(node, target)

  t.is(ret, target)
  t.deepEqual(root, Tree(0, 1, 2, 3))
})

test('ignore orphan node', t => {
  const node = Tree()
  const target = Tree()
  const ret = insertAfter(node, target)

  t.is(ret, undefined)
  t.is(node.children.length, 0)
  t.not(target.parent, node)
})

test('ignore itself', t => {
  const node = Tree()
  const ret = insertAfter(node, node)

  t.is(ret, undefined)
  t.is(node.children.length, 0)
  t.not(node.parent, node)
})

test('ignore no argument', t => {
  t.notThrows(() => {
    const ret = insertAfter()
    t.is(ret, undefined)
  })
})
