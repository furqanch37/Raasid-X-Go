'use client';

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { baseUrl } from '@/app/const';
import LastOrders from './LastOrders';

const DashboardOrders = () => {
  const userId = useSelector((state) => state.user.userData?._id);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      if (!userId) return;

      try {
        const res = await fetch(`${baseUrl}/order/${userId}`);
        const data = await res.json();

        if (data.success) {
          const mappedOrders = data.orders.flatMap((order) =>
            order.products.map((prod) => ({
              name: prod.productId.name,
              img: prod.productId.image,
              weight: prod.productId.packaging,
              quantity: prod.quantity,
              price: prod.productId.price * prod.quantity
            }))
          );
          setOrders(mappedOrders);
        }
      } catch (err) {
        console.error('Error fetching orders:', err);
      }
    };

    fetchOrders();
  }, [userId]);

  return (
    <section>
      <h2 className="dashboard-section-title">Your Recent Orders</h2>
      <LastOrders orders={orders} />
    </section>
  );
};

export default DashboardOrders;
