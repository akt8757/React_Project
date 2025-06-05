import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Header from "../Header";
import CreateOrder from "./CreateOrder";
import OrderSummery from "./OrderSummery";
import OrderReport from "./OrderReport";

export default function MotherBox() {
  const [filterState, setFilterState] = useState("All");
  const [initialOrder, setInitialOrder] = useState([]);
  const [orderUpadte, setOrderUpdate] = useState([]);

  //   handle-status-change
  const handleIsStatus = (statusId) => {
    setInitialOrder(
      initialOrder.map((data) => {
        if (data.id === statusId) {
          return { ...data, status: true };
        }
        return data;
      })
    );
  };

  //   delite-handeler
  const handleDelite = (deliteId, status) => {
    let filteredData = orderUpadte.filter((data) => data.id !== deliteId);
    setOrderUpdate(filteredData);
  };

  useEffect(() => {
    handleFilterData();
  }, [initialOrder, filterState]);

  //   data-filter-handeler
  const handleFilterData = () => {
    const filtaredData = initialOrder.filter((data) => {
      if (filterState === "All") return true;
      if (filterState === "Pending" && data.status === false) return true;
      if (filterState === "Delivered" && data.status === true) return true;
    });
    setOrderUpdate(filtaredData);
  };

  return (
    <div>
      <div class="container mx-auto px-4 h-screen flex flex-col">
        <Header />
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
          <CreateOrder
            setInitialOrder={setInitialOrder}
            initialOrder={initialOrder}
          />
          <div class="md:col-span-2 h-[calc(100vh_-_130px)]">
            <OrderSummery orderUpadte={orderUpadte} />
            <OrderReport
              orderUpadte={orderUpadte}
              handleIsStatus={handleIsStatus}
              handleDelite={handleDelite}
              setFilterState={setFilterState}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
