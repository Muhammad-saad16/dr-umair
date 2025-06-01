// Define all routes in a central location
export const routes = [
    { path: "/", label: "Home" },
    { path: "/biography", label: "Biography" },
    { path: "/events-&-program", label: "Events & Programs" },
    { path: "/publications", label: "Publications" },
    // { path: "/clip-&-videos", label: "Clips & Videos" },
    { path: "/gallery", label: "Gallery" },
    { path: "/contact", label: "Ask Dr. Umair" },
  ] as const
  
  // Helper function to get page title from path
  export function getPageTitle(path: string): string {
    const route = routes.find((route) => route.path === path)
    if (route) return route.label
  
    // If no direct match, format the path
    return path
      .split("/")
      .pop()!
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }
  
  
