import React from "react";
import Header from "../Header";
import CreateOrder from "./CreateOrder";
import OrderSummery from "./OrderSummery";
import OrderReport from "./OrderReport";

export default function MotherBox() {
  return (
    <div>
      <div class="container mx-auto px-4 h-screen flex flex-col">
        <Header />
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
          <CreateOrder />
          <div class="md:col-span-2 h-[calc(100vh_-_130px)]">
            <OrderSummery />
            <OrderReport />
          </div>
        </div>
      </div>
    </div>
  );
}
