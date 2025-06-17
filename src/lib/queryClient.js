import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

export async function apiRequest(method, url, data) {
  // Mock implementation - replace with real API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (method === "POST" && url === "/api/contact") {
        console.log("API Request:", { method, url, data });
        resolve({ success: true });
      } else {
        reject(new Error("API endpoint not implemented"));
      }
    }, 1000); // Simulate network delay
  });
}