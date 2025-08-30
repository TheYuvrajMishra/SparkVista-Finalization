import React from 'react';

const NoiseOverlay: React.FC = () => {
  // Using a base64 encoded tiny PNG for a repeating noise pattern.
  // This avoids an extra HTTP request for an image file.
  // This specific string creates a subtle grayscale noise.
  // You can find or generate different base64 noise images online if needed.
  const noiseBackground = `url("https://img.freepik.com/free-photo/dark-stone-desk-texture-with-concrete-background-high-resolution-top-view-table-with-copy-space-idea-advertising-banner-product-article_166373-2662.jpg?t=st=1746452030~exp=1746455630~hmac=1223af9c43c405ef15438c74b781a87720d50c4ee3442a7bdaa6021306a0c923&w=900")`;

  return (
    <div
      style={{
        backgroundImage: noiseBackground,
        // Ensure the background repeats over the entire area
        backgroundRepeat: 'repeat',
      }}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999] opacity-[0.1]"
      // `fixed top-0 left-0 w-full h-full`: Covers the entire viewport.
      // `pointer-events-none`: Ensures the overlay doesn't block clicks or interactions with elements below it.
      // `z-[9999]`: Sets a high z-index to make sure it's visually on top of almost everything.
      // `opacity-[0.05]`: Controls the intensity of the noise effect. Adjust this value (0 to 1) as desired.
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50 z-99" />
    </div>
  );
};

export default NoiseOverlay;