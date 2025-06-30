import React, { Suspense } from 'react';
import OrderSummary from './OrderSummary';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OrderSummary />
    </Suspense>
  );
}
