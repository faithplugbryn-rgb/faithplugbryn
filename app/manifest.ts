import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "FaithPlugBryn",
        short_name: "FaithPlugBryn",
        description:
            "Daily prayer, scripture, and faith resources from FaithPlugBryn.",
        start_url: "/",
        display: "standalone",
        background_color: "#080807",
        theme_color: "#080807",
        orientation: "portrait",
        icons: [
            {
                src: "/icon",
                sizes: "512x512",
                type: "image/png",
            },
        ],
    };
}