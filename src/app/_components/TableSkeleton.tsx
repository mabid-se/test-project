import React from "react";

const TableSkeleton = () => {
  return (
    <div
      role="status"
      className="max-w-full p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700"
    >
      <div className="flex items-center justify-between">
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-24" />
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-24" />
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-24" />
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-24" />
      </div>
      <div className="flex items-center justify-between pt-4">
        <div className="h-1.5 bg-gray-300 rounded-full dark:bg-gray-700 w-24" />
        <div className="h-1.5 bg-gray-300 rounded-full dark:bg-gray-700 w-24" />
        <div className="h-1.5 bg-gray-300 rounded-full dark:bg-gray-700 w-24" />
        <div className="h-1.5 bg-gray-300 rounded-full dark:bg-gray-700 w-24" />
      </div>
      <div className="flex items-center justify-between pt-4">
        <div className="h-1.5 bg-gray-300 rounded-full dark:bg-gray-700 w-24" />
        <div className="h-1.5 bg-gray-300 rounded-full dark:bg-gray-700 w-24" />
        <div className="h-1.5 bg-gray-300 rounded-full dark:bg-gray-700 w-24" />
        <div className="h-1.5 bg-gray-300 rounded-full dark:bg-gray-700 w-24" />
      </div>
      <div className="flex items-center justify-between pt-4">
        <div className="h-1.5 bg-gray-300 rounded-full dark:bg-gray-700 w-24" />
        <div className="h-1.5 bg-gray-300 rounded-full dark:bg-gray-700 w-24" />
        <div className="h-1.5 bg-gray-300 rounded-full dark:bg-gray-700 w-24" />
        <div className="h-1.5 bg-gray-300 rounded-full dark:bg-gray-700 w-24" />
      </div>
    </div>
  );
};

export default TableSkeleton;
