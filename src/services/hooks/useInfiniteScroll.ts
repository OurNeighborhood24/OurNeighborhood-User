import { useEffect, useCallback, useRef } from "react";

interface UseInfiniteScrollOptions {
  hasMore: boolean;
  loading: boolean;
  onLoadMore: () => void;
  threshold?: number;
}

export const useInfiniteScroll = ({
  hasMore,
  loading,
  onLoadMore,
  threshold = 200,
}: UseInfiniteScrollOptions) => {
  const sentinelRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    if (loading || !hasMore) return;

    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const rect = sentinel.getBoundingClientRect();
    const isVisible = rect.top <= window.innerHeight + threshold;

    if (isVisible) {
      onLoadMore();
    }
  }, [loading, hasMore, onLoadMore, threshold]);

  useEffect(() => {
    const handleScrollThrottled = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", handleScrollThrottled);
    return () => window.removeEventListener("scroll", handleScrollThrottled);
  }, [handleScroll]);

  return sentinelRef;
};
