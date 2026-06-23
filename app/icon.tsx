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
        <span
          style={{
            color: "#F59E0B",
            fontSize: 22,
            lineHeight: 1,
          }}
        >
          ✦
        </span>
      </div>
    ),
    { ...size }
  );
}
