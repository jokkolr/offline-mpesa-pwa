export interface ApiError {
  message: string;
  status?: number;
}

export async function apiRequest<T>(
  url: string,
  options?: RequestInit
): Promise<T> {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw {
        message: "API request failed",
        status: response.status
      } as ApiError;
    }

    return (await response.json()) as T;
  } catch (error) {
    console.error("API request error:", error);
    throw error;
  }
            }
