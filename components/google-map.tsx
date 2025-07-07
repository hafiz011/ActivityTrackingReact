export function GoogleMap() {
  return (
    <div className="rounded-xl overflow-hidden shadow-md h-[400px] w-[100%]">
      <iframe
        title="Trackly Location"
        src="https://www.google.com/maps/embed?pb=... (your location)"
        width="100%"
        height="100%"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}
