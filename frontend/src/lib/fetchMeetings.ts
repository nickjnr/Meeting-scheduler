import axios from "axios";

export async function fetchMeetings() {
  try {
    const response = await axios.get("http://localhost:8000/api/meetings");
    return response.data;
  } catch (error) {
    console.error("Error fetching meetings:", error);
    throw new Error("An error occurred while fetching meetings.");
  }
}
