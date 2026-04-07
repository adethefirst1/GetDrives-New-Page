export default function TagRow({ tags }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-sm border border-gray-700 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
