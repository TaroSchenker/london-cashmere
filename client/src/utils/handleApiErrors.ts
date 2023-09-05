import { ApiResponse } from "../types";

export async function handleErrors<T>(promise: Promise<T>): Promise<ApiResponse<T>> {
    try {
      const data = await promise;
      return { error: null, data };
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Error occurred:', error);
        return { error, data: null };
      } else {
        // If it's not an Error object, it's an unexpected situation, so rethrow
        throw error;
      }
    }
  }
  