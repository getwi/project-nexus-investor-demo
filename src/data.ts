export type NavItem = { id: string; label: string; group: string };
export const navigation: NavItem[] = [
  { id: "overview", label: "Overview", group: "Workspace" },
  { id: "organisations", label: "Manufacturers", group: "Network" },
  { id: "products", label: "Products & SKUs", group: "Network" },
  { id: "batches", label: "Production groups", group: "Network" },
  { id: "verifications", label: "Verifications", group: "Intelligence" },
  { id: "risk", label: "Risk review", group: "Intelligence" },
  { id: "integrations", label: "API & integrations", group: "Platform" }
];

export const manufacturers = [
  { name: "Northstar Foods Ltd.", location: "Lagos, Nigeria", category: "Dairy", status: "Evidence review", initials: "NF" },
  { name: "Greenfield Nutrition Co.", location: "Ogun, Nigeria", category: "Cereals", status: "In assessment", initials: "GN" },
  { name: "Coastal Consumer Products", location: "Kano, Nigeria", category: "Oral care", status: "Draft profile", initials: "CC" }
];

export const products = [
  { name: "Whole Milk Powder — 14g", maker: "Northstar Foods Ltd.", code: "SKU-NX-001", category: "Milk & dairy", status: "Evidence pending" },
  { name: "Fortified Cereal Blend", maker: "Greenfield Nutrition Co.", code: "SKU-NX-002", category: "Cereals", status: "Under review" },
  { name: "Toothpaste — 100ml", maker: "Coastal Consumer Products", code: "SKU-NX-003", category: "Oral care", status: "Draft" },
  { name: "Vegetable Oil — 1L", maker: "Northstar Foods Ltd.", code: "SKU-NX-004", category: "Edible oils", status: "Evidence pending" }
];

export const categories = [
  { title: "Milk & dairy", detail: "Powdered, evaporated and liquid milk; yoghurt and dairy beverages.", priority: "Critical priority" },
  { title: "Cereals & nutritional foods", detail: "Fortified cereals, maize-based foods and qualifying locally made cereal products.", priority: "High priority" },
  { title: "Edible oils & fats", detail: "Palm, soybean and vegetable oils, blends, margarine and eligible spreads.", priority: "High priority" },
  { title: "Oral care & dental hygiene", detail: "Initial focus on toothpaste and qualifying Nigerian manufacturing.", priority: "High priority" },
  { title: "Packaged foods", detail: "Rice, flour, tomato paste, spices, seasonings, honey and other eligible foods.", priority: "Eligible category" },
  { title: "Non-alcoholic beverages", detail: "Water, juices, soft drinks, malt, energy and dairy-based drinks.", priority: "Eligible category" },
  { title: "Alcoholic beverages", detail: "Beer, wine, spirits, liqueurs and locally processed traditional beverages; subject to separate regulatory review.", priority: "Additional review" }
];