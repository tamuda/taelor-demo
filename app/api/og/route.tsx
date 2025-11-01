import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const name = searchParams.get("name") || "WELCOME";

    // Fetch the base image
    const baseImageUrl = new URL('/thumbnail-04.png', req.url).toString();
    
    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
            position: "relative",
          }}
        >
          {/* Background overlay */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.6))",
              display: "flex",
            }}
          />
          
          {/* Name at top */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              top: 60,
              left: 0,
              right: 0,
              zIndex: 10,
            }}
          >
            <div
              style={{
                fontSize: 80,
                fontWeight: 900,
                background: "linear-gradient(90deg, #d4af37 0%, #f4e5b1 50%, #d4af37 100%)",
                backgroundClip: "text",
                color: "transparent",
                textAlign: "center",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                padding: "30px 60px",
                display: "flex",
              }}
            >
              {name}
            </div>
          </div>

          {/* Brand text at bottom */}
          <div
            style={{
              position: "absolute",
              bottom: 60,
              left: 0,
              right: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 20,
            }}
          >
            <div
              style={{
                fontSize: 48,
                fontWeight: 700,
                color: "white",
                display: "flex",
              }}
            >
              Join Taelor.ai
            </div>
            <div
              style={{
                fontSize: 28,
                color: "rgba(255,255,255,0.8)",
                display: "flex",
              }}
            >
              AI-Powered Style for Modern Men
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        headers: {
          'Cache-Control': 'public, max-age=31536000, immutable',
          'Content-Type': 'image/png',
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
