import { warningLevel } from './filters';

// 组装数据，将nodes数组和edges连线打包为能描述节点间关系的一维数组
export function pack (data) {
  const nodes = data.nodes || [];
  const edges = data.edges || [];
  const groups = data.groups || [];
  const temp = {};
  const packedNodes = [];
  // 遍历节点，将所有节点放到对象上，以便遍历连线时快速索引节点
  nodes.forEach((node, index, arr) => {
    temp[node.id] = node;
  });
  // 遍历连线，将连线信息放到节点上
  edges.forEach((edge, index, arr) => {
    const source = edge.source;
    const target = edge.target;
    // 只需要from便可以描述图信息
    temp[source]['to'] instanceof Array ? temp[source]['to'].push({ id: target, shape: edge.shape }) : temp[source]['to'] = [{ id: target, shape: edge.shape }];
    temp[target]['from'] instanceof Array ? temp[target]['from'].push({ id: source, shape: edge.shape }) : temp[target]['from'] = [{ id: source, shape: edge.shape }];
  });
  for (const nodeId in temp) {
    packedNodes.push(temp[nodeId]);
  }
  return {
    nodes: packedNodes,
    groups
  };
}

// 解析数据，将带有关系属性的nodes数组解析为vg渲染所需的nodes和edges数据
export function unPack (data, mode) {
  const packedNodes = data.nodes || [];
  const nodes = [];
  const edges = [];

  function createEdge (f, target, color) {
    const edge = {
      id: f.id + target,
      source: f.id,
      target,
      shape: f.shape,
      color
    };
    return edge;
  }
  packedNodes.forEach((node, index, arr) => {
    const from = node.from;
    const color = mode === 'edit' ? '#7E7C8B' : node.warning.level != 0 ? warningLevel(node.warning.level).color : '#7E7C8B';
    if (from && from instanceof Array) {
      for (const f in from) {
        edges.push(createEdge(from[f], node.id, color));
      }
    }
    // 节点样式以level等级为标志，但在编辑模式先需要统一颜色
    if (mode === 'edit') {
      node.warning.level = 0;
    }
    nodes.push(node);
  });
  return {
    nodes,
    edges,
    groups: data.groups
  };
}
