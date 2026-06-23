import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 8,
          background: "#1E0A3C",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* 4-pointed sparkle star as SVG path */}
        <svg width="20" height="20" viewBox="0 0 24 24">
          <path
            d="M12 2 L13.8 10.2 L22 12 L13.8 13.8 L12 22 L10.2 13.8 L2 12 L10.2 10.2 Z"
            fill="#F59E0B"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
