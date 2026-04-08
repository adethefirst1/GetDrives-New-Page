/**
 * WebP-first images with raster fallback. Use `responsive` for large hero/section
 * assets that have -480w / -960w / -1440w WebP variants (see scripts/generate-webp.mjs).
 */
export default function ResponsivePicture({
  base,
  ext = "png",
  alt,
  className,
  /** Layout wrapper for <picture> (block images default to full width of container). */
  pictureClassName = "block w-full",
  sizes,
  loading = "lazy",
  fetchPriority,
  decoding = "async",
  responsive = false,
  ...rest
}) {
  const webpSrcSet = responsive
    ? `${base}-480w.webp 480w, ${base}-960w.webp 960w, ${base}-1440w.webp 1440w`
    : `${base}.webp`;
  const fallbackSrc = `${base}.${ext}`;

  return (
    <picture className={pictureClassName}>
      <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />
      <img
        src={fallbackSrc}
        alt={alt}
        className={className}
        sizes={sizes}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding={decoding}
        {...rest}
      />
    </picture>
  );
}
