export interface OfflineOrder {
  id: string;
  status: "pending" | "synced";
  createdAt: number;
}

const DB_KEY = "offline-orders";

export function saveOrderOffline(order: OfflineOrder) {
  const existing = getOfflineOrders();
  localStorage.setItem(DB_KEY, JSON.stringify([...existing, order]));
}

export function getOfflineOrders(): OfflineOrder[] {
  const data = localStorage.getItem(DB_KEY);
  if (!data) return [];
  try {
    return JSON.parse(data) as OfflineOrder[];
  } catch {
    console.error("Failed to parse offline orders");
    return [];
  }
      }
