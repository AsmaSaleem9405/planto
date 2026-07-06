export default function WatchVideoPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10">
        <video 
          className="w-full h-full object-cover" 
          controls 
          autoPlay 
          playsInline
        >
          {/* Points directly to public/videos/my-video.mp4 */}
          <source src="/videos/plant.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}