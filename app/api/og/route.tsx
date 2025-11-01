import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const name = searchParams.get("name") || "WELCOME";

    // Fetch the base image
    const baseImageUrl = new URL("/thumbnail-04.png", req.url).toString();
    const imageData = await fetch(baseImageUrl).then((res) => res.arrayBuffer());
    const base64Image = Buffer.from(imageData).toString('base64');

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            position: "relative",
          }}
        >
          {/* Base image */}
          <img
            src={`data:image/png;base64,${base64Image}`}
            alt="Background"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />

          {/* Semi-transparent overlay for text readability */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "linear-gradient(to bottom, rgba(0,0,0,0.2), transparent 40%)",
              display: "flex",
            }}
          />

          {/* Name at top center */}
          <div
            style={{
              display: "flex",
              position: "absolute",
              top: 40,
              left: 0,
              right: 0,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontSize: 90,
                fontWeight: 900,
                color: "#d4af37",
                textAlign: "center",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                textShadow: "0 4px 12px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.6)",
                display: "flex",
                padding: "20px 40px",
              }}
            >
              {name}
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        headers: {
          "Cache-Control": "public, max-age=31536000, immutable",
          "Content-Type": "image/png",
        },
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
