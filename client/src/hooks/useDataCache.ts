import { useState, useEffect } from 'react';

// Cache en mémoire pour éviter les requêtes répétées
const cache = new Map<string, any>();
const cacheTimestamps = new Map<string, number>();

// Durée de validité du cache (5 minutes)
const CACHE_DURATION = 5 * 60 * 1000;

interface UseCacheOptions {
  cacheKey: string;
  fetchFn: () => Promise<any>;
  cacheDuration?: number;
}

export function useDataCache<T>({ cacheKey, fetchFn, cacheDuration = CACHE_DURATION }: UseCacheOptions) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        setError(null);

        // Vérifier si les données sont en cache et encore valides
        const now = Date.now();
        const cachedData = cache.get(cacheKey);
        const cacheTimestamp = cacheTimestamps.get(cacheKey);

        if (cachedData && cacheTimestamp && (now - cacheTimestamp) < cacheDuration) {
          // Utiliser les données du cache
          setData(cachedData);
          setLoading(false);
          return;
        }

        // Charger les données depuis la source
        const result = await fetchFn();

        // Mettre en cache
        cache.set(cacheKey, result);
        cacheTimestamps.set(cacheKey, now);

        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error'));
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [cacheKey, cacheDuration]);

  return { data, loading, error };
}

// Fonction pour vider le cache (utile pour forcer un rechargement)
export function clearCache(key?: string) {
  if (key) {
    cache.delete(key);
    cacheTimestamps.delete(key);
  } else {
    cache.clear();
    cacheTimestamps.clear();
  }
}

// Fonction pour précharger des données dans le cache
export async function preloadCache(key: string, fetchFn: () => Promise<any>) {
  try {
    const data = await fetchFn();
    cache.set(key, data);
    cacheTimestamps.set(key, Date.now());
    return data;
  } catch (err) {
    console.error(`Failed to preload cache for ${key}:`, err);
    return null;
  }
}
