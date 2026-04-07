export default function Logo({ className = "h-8 md:h-9" }) {
  return (
    <img
      src="/logo-getdrives.png"
      alt="GetDrives"
      className={`block w-auto object-contain object-left ${className}`}
    />
  );
}
