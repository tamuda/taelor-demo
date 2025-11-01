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
            backgroundImage: "url(https://taelor-demo.vercel.app/thumbnail.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Text content */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* "Ola {Name}" */}
            <div
              style={{
                fontFamily: "Times New Roman, serif",
                fontSize: 80,
                fontWeight: 700,
                color: "white",
                textAlign: "center",
                display: "flex",
                marginBottom: 20,
              }}
            >
              Ola {name}
            </div>
            
            {/* "Your winter upgrade is here." */}
            <div
              style={{
                fontFamily: "Times New Roman, serif",
                fontSize: 36,
                fontWeight: 400,
                color: "white",
                textAlign: "center",
                display: "flex",
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
