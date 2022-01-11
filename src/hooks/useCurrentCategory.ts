import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const useCurrentCategory = (): string | null => {
  const { search } = useLocation();
  const [currentCategory, setCurrentCategory] = useState<string | null>(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(search);
    const category = searchParams.get("category");

    if (category) {
      setCurrentCategory(searchParams.get("category"));
    }
  }, [search]);

  return currentCategory;
};
