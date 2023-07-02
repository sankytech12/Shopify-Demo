import { Page } from "@shopify/polaris";
import { ResourcePicker } from "@shopify/app-bridge-react";
import React, { useState } from "react";
import ProductCard from "../components/personal/ProductCard";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItem] = useState([]);
  return (
    <Page
      title="Products List"
      primaryAction={{
        content: "Select",
        onAction: () => {
          console.log("Handler");
          setIsOpen(true);
        },
      }}
    >
      <ResourcePicker
        resourceType="Product"
        open={isOpen}
        onCancel={() => {
          setIsOpen(false);
        }}
        onSelection={(resources) => {
          console.log(resources);
          const arr = [];
          const itemArr = resources.selection.map((el) => {
            arr.push({
              id: el.id,
              title: el.title,
            });
          });
          console.log(arr);
          setItem(arr);
          setIsOpen(false);
        }}
      />
      <ProductCard item={items} />
    </Page>
  );
}
