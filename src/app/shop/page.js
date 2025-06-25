// app/shop/page.jsx
'use client';

import { Suspense } from 'react';
import ShopHeader from './ShopHeader/ShopHeader';
import Shop from './shop';

export default function ShopPage() {
  return (
    <>
      <ShopHeader />
      <Suspense fallback={<p>Loading shop...</p>}>
        <Shop />
      </Suspense>
    </>
  );
}
