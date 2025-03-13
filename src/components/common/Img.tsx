import { motionPropsType } from '@mytypes/types'
import { motion } from 'motion/react'

type ImgType = {
  src: string,
  alt: string,
  className?: string,
  motionProps?: motionPropsType
  smallImg?: string | null
}
export const Img = ({ src, alt, className, motionProps, smallImg }: ImgType) => {
  if (smallImg) {
    return motionProps
      ? <motion.picture {...motionProps}>
          <source srcSet={smallImg} media='(max-width: 767px)' />
          <motion.img src={src} alt={alt} loading='lazy' className={className} />
        </motion.picture>
      : <picture>
          <source srcSet={smallImg} media='(max-width: 767px)' />
          <img src={src} alt={alt} loading='lazy' className={className} />
        </picture>
  }
  return motionProps
    ? <motion.img src={src} alt={alt} loading='lazy' className={className} {...motionProps} />
    : <img src={src} alt={alt} loading='lazy' className={className} />
}