import type { CSSProperties, HTMLAttributes } from 'vue'

type SVGoptions = {
  customStyles?: CSSProperties
  customClasses?: HTMLAttributes['class']
}

export const useSVG = (props: SVGoptions) => {
  const getSVGProps = (options: SVGoptions) => {
    const { customStyles, customClasses } = options

    return {
      style: {
        width: '20px',
        height: '20px',
        fill: 'currentColor',
        stroke: 'currentColor',
        strokeWidth: '0',
        ...customStyles,
      },
      class: customClasses,
    }
  }

  return {
    SVGProps: getSVGProps(props),
  }
}
