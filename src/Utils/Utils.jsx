export const handleToggleCheckbox = (index, items, setItems) => {
  const updatedItems = items.map((item, idx) =>
    idx === index ? { ...item, check: !item.check } : item
  );
  setItems(sortItems(updatedItems));
  const oldItems = localStorage.getItem('items');
  console.log(oldItems);
  localStorage.setItem("items", JSON.stringify(updatedItems));
};


export const handleRemoveItem = (index, items, setItems) => {
  const updatedItems = items.filter((item, idx) => idx !== index);
  setItems(updatedItems);
  localStorage.setItem("items", JSON.stringify(updatedItems));
};

export const handleAddItem = (newItem, pageType, items, setItems) => {
  const currentItems = JSON.parse(localStorage.getItem("items")) || [];

  const updatedAllItems = [...currentItems, { ...newItem, page: pageType }];

  localStorage.setItem("items", JSON.stringify(updatedAllItems));
  const updatedTaskItems = updatedAllItems.filter(
    (item) => item.page === pageType
  );
  setItems(sortItems(updatedTaskItems));
};

export const sortItems = (items) => {
  return items.slice().sort((a, b) => a.check - b.check);
};


export const navLinksData = [
  { to: "/", label: "My Day", icon: "light_mode" },
  { to: "/Important", label: "Important", icon: "family_star" },
  { to: "/Planned", label: "Planned", icon: "priority" },
  { to: "/Assigned", label: "Assigned to me", icon: "account_circle" },
  { to: "/Flagged", label: "Flagged email", icon: "flag" },
  { to: "/Tasks", label: "Tasks", icon: "home" }
];

