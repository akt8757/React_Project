import React from "react";

export default function OrderSummery() {
  return (
    <div>
      <div>
        <h2 class="text-xl font-bold mb-4">Order Summary</h2>
        <div class="grid grid-cols-3 gap-4 mb-6">
          <div class="bg-cardbg rounded-lg p-4 relative overflow-hidden">
            <div class="text-5xl font-bold text-yellow-500 mb-2">8</div>
            <div class="bg-yellow-800 bg-opacity-50 text-yellow-200 text-xs font-medium px-3 py-1 rounded-full inline-block">
              Total Order
            </div>
          </div>

          <div class="bg-cardbg rounded-lg p-4 relative overflow-hidden">
            <div class="text-5xl font-bold text-red-500 mb-2">7</div>
            <div class="bg-red-800 bg-opacity-50 text-red-200 text-xs font-medium px-3 py-1 rounded-full inline-block">
              Pending
            </div>
          </div>

          <div class="bg-cardbg rounded-lg p-4 relative overflow-hidden">
            <div class="text-5xl font-bold text-green-500 mb-2">1</div>
            <div class="bg-green-800 bg-opacity-50 text-green-200 text-xs font-medium px-3 py-1 rounded-full inline-block">
              Delivered
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
