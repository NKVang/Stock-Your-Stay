// Truncate.test.js

const truncate = require("./Truncate");

test("Truncates name if more than 25 characters and add ... at the end", () => {
  expect(truncate("ZEPHYRHILLS NATURAL SPRING WATER, 12 OZ, 12 COUNT")).toBe(
    "ZEPHYRHILLS NATURAL SPRIN..."
  );

  expect(
    truncate(
      "SAN PELLEGRINO SPARKLING NATURAL MINERAL WATER GLASS, 25.36 OZ, 1 CT"
    )
  ).toBe("SAN PELLEGRINO SPARKLING ...");

  expect(truncate("LACROIX SPARKLING WATER, PURE, 12 COUNT")).toBe(
    "LACROIX SPARKLING WATER, ..."
  );

  expect(truncate("EVIAN NATURAL SPRING WATER, 1.5L, 1 COUNT")).toBe(
    "EVIAN NATURAL SPRING WATE..."
  );

  expect(
    truncate("LACROIX SPARKLING WATER, PAMPLEMOUSSE (GRAPEFRUIT), 12 COUNT")
  ).toBe("LACROIX SPARKLING WATER, ...");

  expect(truncate("MOUNTAIN VALLEY SPRING WATER, 1L, 1 COUNT")).toBe(
    "MOUNTAIN VALLEY SPRING WA..."
  );

  expect(truncate("SPINDRIFT SPARKLING WATER, LEMON, 8 COUNT")).toBe(
    "SPINDRIFT SPARKLING WATER..."
  );

  expect(truncate("HARMLESS HARVEST ORGANIC COCONUT WATER, 32 OZ")).toBe(
    "HARMLESS HARVEST ORGANIC ..."
  );

  expect(
    truncate("SPINDRIFT SPARKLING WATER, BLOOD ORANGE TANGERINE, 8 COUNT")
  ).toBe("SPINDRIFT SPARKLING WATER...");

  expect(truncate("Siggi's Mixed Berry Non Fat Yogurt 4 Pack")).toBe(
    "Siggi's Mixed Berry Non F..."
  );

  expect(truncate("Kerrygold Pure Irish Butter")).toBe(
    "Kerrygold Pure Irish Butt..."
  );

  expect(truncate("Organic Mozzarella Sticks")).toBe(
    "Organic Mozzarella Sticks"
  );

  expect(truncate("Organic Valley Cream Cheese Spread")).toBe(
    "Organic Valley Cream Chee..."
  );

  expect(truncate("Chicken & Apple Chicken Sausage")).toBe(
    "Chicken & Apple Chicken S..."
  );

  expect(truncate("RAOS Chicken Parmesan")).toBe("RAOS Chicken Parmesan");

  expect(truncate("Applegate Chicken Nuggets")).toBe(
    "Applegate Chicken Nuggets"
  );

  expect(truncate("Banana, 1ct")).toBe("Banana, 1ct");

  expect(truncate("Frozen Salmon Fillets (2),6 oz/each")).toBe(
    "Frozen Salmon Fillets (2)..."
  );

  expect(truncate("Organic Thick & Chunky Medium Salsa")).toBe(
    "Organic Thick & Chunky Me..."
  );

  expect(truncate("Stacy's Simply Naked Pita Chips, Multigrain")).toBe(
    "Stacy's Simply Naked Pita..."
  );
});
