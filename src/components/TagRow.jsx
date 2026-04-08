export default function TagRow({ tags }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-none border border-[#555555] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-white"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
