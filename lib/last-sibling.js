import lastChild from './last-child'

/**
 * Return the last sibling of a node.
 *
 * The last sibling node is the right-most child of a node's parent.
 * If the node is the root node or the only child, it returns the node.
 *
 * @param {Node} node Node.
 * @return {Node}
 */
export default function lastSibling(node) {
  const parent = node.parent
  return (parent ? lastChild(parent) : node)
}
