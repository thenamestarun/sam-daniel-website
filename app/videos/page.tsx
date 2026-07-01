const videos = [
  { id: "7oUg3xlFeRU", title: "Sam Daniel — Live Worship" },
  { id: "yrh-1-YxEuU", title: "Sam Daniel" },
  { id: "3jHRhA3A394", title: "Sam Daniel" },
  { id: "u8CFI6OCJqg", title: "Sam Daniel" },
  { id: "v4FnvgXbBjU", title: "Sam Daniel" },
  { id: "rxlShFBFhYo", title: "Sam Daniel" },
  { id: "Y10mdSUh_fI", title: "Sam Daniel" },
];

export default function VideosPage() {
  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="mb-10">
        <p className="text-xs tracking-widest uppercase text-[#f43f8a] mb-3 font-medium">Watch</p>
        <h1 className="font-montserrat text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter uppercase">Videos</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {videos.map((v) => (
          <div key={v.id} className="relative w-full rounded-sm overflow-hidden border border-white/6" style={{ paddingBottom: "56.25%" }}>
            <iframe
              src={`https://www.youtube.com/embed/${v.id}?rel=0&modestbranding=1`}
              title={v.title}
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="absolute inset-0 w-full h-full"
            />
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href="https://youtube.com/samdanielmusic"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 rounded-sm border border-white/15 text-white/60 text-sm tracking-wide hover:bg-white/6 hover:text-white transition-all"
        >
          Subscribe on YouTube →
        </a>
      </div>
    </div>
  );
}
