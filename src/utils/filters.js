export function warningLevel (level) {
  const warningLevelMap = {
    '4': {
      color: '#FF0000',
      label: '致命'
    },
    '3': {
      color: '#FA7C00',
      label: '严重'
    },
    '2': {
      color: '#FFC600',
      label: '一般'
    },
    '1': {
      color: '#A09116',
      label: '提示'
    },
    '0': {
      color: '#978ED9',
      label: '正常'
    }
  };
  return warningLevelMap[level];
}
