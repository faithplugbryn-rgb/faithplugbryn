import { ImageResponse } from "next/og";

export const size = {
    width: 512,
    height: 512,
};

export const contentType = "image/png";

export default function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#080807",
                    color: "#d8b365",
                    fontSize: "300px",
                    fontWeight: 300,
                }}
            >
                †
            </div>
        ),
        {
            ...size,
        }
    );
}