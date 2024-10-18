"use client";
import React from "react";
import styles from "./pagination.module.css";
import { useRouter, useSearchParams } from "next/navigation";

const Pagination = ({ page, hasPrev, hasNext }) => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const cat = searchParams.get("cat");

  const handlePagination = (newPage) => {
    const currentParams = new URLSearchParams(searchParams);

    currentParams.set("page", newPage);

    const newUrl = `?${currentParams.toString()}`;
    router.push(newUrl); // Navigate to the new URL
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={!hasPrev}
        onClick={() => handlePagination(page - 1)}
      >
        Previous
      </button>
      <button
        className={styles.button}
        disabled={!hasNext}
        onClick={() => handlePagination(page + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
