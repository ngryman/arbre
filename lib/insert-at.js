import remove from './remove'
import withinBounds from './internal/within-bounds'
import isEqual from './internal/is-equal'

/**
 * Insert a node at the given index of the parent node children.
 *
 * @param {Node} parent Parent node.
 * @param {Node} node Node to be inserted.
 * @param {Number} index Index where to insert the node.
 * @return {Node}
 */
export default function insertAt(parent, node, index) {
  if (isEqual(node, parent)) return node
  if (withinBounds(parent, index)) {
    remove(node)
    parent.children.splice(index, 0, node)
    node.parent = parent
  }
  return node
}
