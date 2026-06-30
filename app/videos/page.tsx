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
    <div className="pt-32 pb-24 px-6 max-w-6xl mx-auto">
      <div className="mb-14">
        <p className="text-xs tracking-widest uppercase text-white/35 mb-3">Watch</p>
        <h1 className="text-6xl font-bold tracking-tight">Videos</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {videos.map((v) => (
          <div key={v.id} className="group flex flex-col gap-3">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-white/5">
              <iframe
                src={`https://www.youtube.com/embed/${v.id}?rel=0&modestbranding=1`}
                title={v.title}
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <a
          href="https://youtube.com/samdanielmusic"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 rounded-full border border-white/20 text-white text-sm hover:bg-white/6 hover:border-[#f43f8a]/30 transition-all"
        >
          Subscribe on YouTube →
        </a>
      </div>
    </div>
  );
}
