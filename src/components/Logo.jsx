import ResponsivePicture from "./ResponsivePicture";

export default function Logo({ className = "h-8 md:h-9" }) {
  return (
    <ResponsivePicture
      base="/logo-getdrives"
      ext="png"
      alt=""
      pictureClassName="inline-block w-auto"
      loading="eager"
      decoding="async"
      sizes="120px"
      className={`block w-auto object-contain object-left ${className}`}
    />
  );
}
