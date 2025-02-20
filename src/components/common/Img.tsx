import { motionPropsType } from '@mytypes/types'
import { motion } from 'motion/react'

type ImgType = {
  src: string,
  alt: string,
  className?: string,
  motionProps?: motionPropsType
}
export const Img = ({ src, alt, className, motionProps }: ImgType) => {
  return motionProps
    ? <motion.img src={src} alt={alt} loading='lazy' className={className} {...motionProps} />
    : <img src={src} alt={alt} loading='lazy' className={className} />
}