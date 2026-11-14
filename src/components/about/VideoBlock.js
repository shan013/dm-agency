export default function VideoBlock() {
  return (
    <section className="video-block fade-up">
      <div className="site-container">
        <iframe
          src="https://www.youtube.com/embed/FRs15LYVFeI?autoplay=1&mute=1&playsinline=1"
          title="YouTube video player"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}