/**
 * Created by leon<silenceace@gmail.com> on 22/3/20.
 */
import { store } from '@src/store'
import { V2exObject } from '@src/types'

/**
 * home tab nodes
 */
export interface TabNodeProps {
  title: string
  parentNodeNames: any[]
  children?: V2exObject.Node[]
}

export let TabNodes: TabNodeProps[] = [
  { title: 'Life', parentNodeNames: ['life'] },
  { title: 'Geek', parentNodeNames: ['geek'] },
  { title: 'V2EX', parentNodeNames: ['v2ex'] },
  { title: 'Internet', parentNodeNames: ['internet'] },
  { title: 'Programming', parentNodeNames: ['programming'] },
  { title: 'Apple', parentNodeNames: ['apple'] },
  { title: 'Games', parentNodeNames: ['games'] },
  { title: 'Cloud', parentNodeNames: ['cloud'] },
  { title: 'Hardware', parentNodeNames: ['hardware'] },
  { title: 'Earth', parentNodeNames: ['cn', 'us'] }
]

export const nodeChildren = (rootNode: TabNodeProps, nodeData?: V2exObject.Node[]): V2exObject.Node[] => {
  const { title, parentNodeNames: parentNodes } = rootNode

  let nodes: V2exObject.Node[] = []

  const all_node = nodeData ?? store.getState().app.allNode
  if (!all_node) return nodes

  return all_node.filter((v) => parentNodes.includes(v.parent_node_name))
}
