const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

export async function fetchApi<T>(
  endpoint: string,
  options?: RequestInit,
): Promise<T> {
  const res = await fetch(`${API_BASE}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    ...options,
  });

  if (!res.ok) {
    throw new Error(`API Error: ${res.status} ${res.statusText}`);
  }

  return res.json();
}

export const api = {
  health: () => fetchApi('/health'),
  creators: {
    list: (category?: string) =>
      fetchApi(`/creators${category ? `?category=${category}` : ''}`),
    get: (id: string) => fetchApi(`/creators/${id}`),
    create: (data: Record<string, unknown>) =>
      fetchApi('/creators', {
        method: 'POST',
        body: JSON.stringify(data),
      }),
  },
  marketplace: {
    products: (search?: string) =>
      fetchApi(
        `/marketplace/products${search ? `?search=${search}` : ''}`,
      ),
    product: (id: string) => fetchApi(`/marketplace/products/${id}`),
  },
  qr: {
    generate: (productId: string) => fetchApi(`/qr/generate/${productId}`),
    scan: (productId: string, metadata?: Record<string, unknown>) =>
      fetchApi(`/qr/scan/${productId}`, {
        method: 'POST',
        body: JSON.stringify(metadata || {}),
      }),
    stats: (productId: string) => fetchApi(`/qr/stats/${productId}`),
  },
};
