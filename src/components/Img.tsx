export const Img = ({ src, alt, className }: { src: string, alt: string, className?: string }) => {
  return <img src={src} alt={alt} loading='lazy' className={className} />;
}