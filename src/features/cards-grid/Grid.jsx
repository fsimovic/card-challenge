import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { getAllSubscribers } from "../subscribers/subscribersSlice";
import Card from "../card/Card";
import Pagination from "./Pagination";
import "./style/grid.scss";

let pageSize = 7;

function AppendStyleOnLastPage(numberOfSubscribers, currentPage) {
  const numberOfItems = numberOfSubscribers - (currentPage - 1) * pageSize;
  return numberOfItems < 5 ? "center" : "stretch";
}

export default function Grid() {
  const [currentPage, setCurrentPage] = useState(1);
  const subscribers = useSelector(getAllSubscribers);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return subscribers.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, subscribers]);

  return (
    <>
      <div
        className="grid-container"
        style={{
          alignContent: AppendStyleOnLastPage(subscribers.length, currentPage),
        }}
      >
        {currentTableData.map((item) => (
          <Card key={item.id} id={item.id} />
        ))}
      </div>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={subscribers.length}
        pageSize={pageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
}
