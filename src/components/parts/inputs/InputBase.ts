export type InputItemSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export type InputItemProps = {
  size?: InputItemSize
}

export function calcInputSizeToWidth(size?: InputItemSize) {
  if (size === undefined) {
    return undefined
  }
  const width = 128
  const gap = 4
  switch (size) {
    case 'xs':
      return width
    case 'sm':
      return width * 2 + gap
    case 'md':
      return width * 3 + gap * 2
    case 'lg':
      return width * 4 + gap * 3
    case 'xl':
      return width * 5 + gap * 4
  }
}
