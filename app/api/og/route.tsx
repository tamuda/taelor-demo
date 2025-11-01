import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const name = searchParams.get("name") || "Tamuda";

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            position: "relative",
            backgroundImage:
              "url(https://taelor-demo.vercel.app/thumbnail.png)",
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Text content on the right */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              position: "absolute",
              top: "50%",
              right: 140,
              transform: "translateY(-50%)",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            {/* "Ola {Name}" */}
            <div
              style={{
                fontSize: 72,
                fontWeight: 700,
                color: "white",
                textAlign: "left",
                display: "flex",
                marginBottom: 8,
                fontFamily: "Georgia, serif",
              }}
            >
              Ola {name}
            </div>

            {/* "Your winter upgrade is here." */}
            <div
              style={{
                fontSize: 26,
                fontWeight: 400,
                color: "white",
                textAlign: "left",
                display: "flex",
                fontFamily: "Georgia, serif",
              }}
            >
              Your winter upgrade is here.
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
