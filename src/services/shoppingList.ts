import httpClient from "../config/httpClient";
import { Item } from "../types/types";

export const fetchAllItems = async () => {
  try {
    const response = await httpClient.get("/items");
    return response.data;
  } catch (error) {
    console.error("Error fetching item lists:", error);
    throw error;
  }
};

export const postItem = async (item: Item) => {
  try {
    const response = await httpClient.post("/items", item);
    return response.data;
  } catch (error) {
    console.error("Error adding item:", error);
    throw error;
  }
};

export const deleteItem = async (itemId: string) => {
  try {
    const response = await httpClient.delete(`/items/${itemId}`);
    return response.data;
  } catch (error) {
    console.error("Error removing item:", error);
    throw error;
  }
};

export const putItem = async (item: Item) => {
  try {
    const response = await httpClient.put(`/items/${item.id}`, item);
    return response.data;
  } catch (error) {
    console.error("Error updating item:", error);
    throw error;
  }
};
