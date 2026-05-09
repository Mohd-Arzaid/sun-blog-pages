import React from "react";
import { Route } from "react-router-dom";
import BlogsSkeleton from "@/components/ui/blogs-skeleton";
import { lazy, Suspense } from "react";

const TinIngotBlog = lazy(() => import("@/blogs/TinIngotBlog"));

export const BlogRoutes = () => {
  return (
    <>
      <Route
        path="/bis-certificate-for-tin-ingots"
        element={
          <Suspense fallback={<BlogsSkeleton />}>
            <TinIngotBlog />
          </Suspense>
        }
      />
    </>
  );
};
