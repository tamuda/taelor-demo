import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const name = searchParams.get("name") || "WELCOME";

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundImage:
              "url(https://taelor-demo.vercel.app/thumbnail-04.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              top: 80,
              left: 0,
              right: 0,
            }}
          >
            <h1
              style={{
                fontSize: 72,
                fontWeight: "bold",
                color: "white",
                textAlign: "center",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                textShadow: "0 4px 8px rgba(0,0,0,0.5)",
                margin: 0,
                padding: "20px 40px",
                background: "rgba(0,0,0,0.3)",
                borderRadius: "12px",
              }}
            >
              {name}
            </h1>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
