import { ImageResponse } from 'next/server';

// Route segment config
export const runtime = 'edge';
export const contentType = 'image/png';
export const size = {
  width: 32,
  height: 32,
};

// Image generation
export default async function Icon() {
  // Fetch avatar from DiceBear API
  const avatarUrl = 'https://api.dicebear.com/7.x/avataaars/png?seed=Damburudhar&backgroundColor=b6e3f4';
  const response = await fetch(avatarUrl);
  
  // Return the image directly
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: `url(${avatarUrl})`,
          backgroundSize: 'cover',
        }}
      />
    ),
    {
      ...size,
    }
  );
} 