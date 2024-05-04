// PascalCase.test.js

const pascalCase = require("./PascalCase");

test("String is converted to Pascal Case (preserving spaces and other characters)", () => {
  expect(pascalCase("THIS IS A TEST (TESTING)")).toBe(
    "This Is A Test (Testing)"
  );

  expect(pascalCase("qweui qweoan ajqo 1ct 123z")).toBe(
    "Qweui Qweoan Ajqo 1Ct 123Z"
  );

  expect(pascalCase("ZEPHYRHILLS NATURAL SPRING WATER, 12 OZ, 12 COUNT")).toBe(
    "Zephyrhills Natural Spring Water, 12 Oz, 12 Count"
  );

  expect(
    pascalCase(
      "SAN PELLEGRINO SPARKLING NATURAL MINERAL WATER GLASS, 25.36 OZ, 1 CT"
    )
  ).toBe(
    "San Pellegrino Sparkling Natural Mineral Water Glass, 25.36 Oz, 1 Ct"
  );

  expect(pascalCase("LACROIX SPARKLING WATER, PURE, 12 COUNT")).toBe(
    "Lacroix Sparkling Water, Pure, 12 Count"
  );

  expect(pascalCase("EVIAN NATURAL SPRING WATER, 1.5L, 1 COUNT")).toBe(
    "Evian Natural Spring Water, 1.5L, 1 Count"
  );

  expect(
    pascalCase("LACROIX SPARKLING WATER, PAMPLEMOUSSE (GRAPEFRUIT), 12 COUNT")
  ).toBe("Lacroix Sparkling Water, Pamplemousse (Grapefruit), 12 Count");

  expect(pascalCase("MOUNTAIN VALLEY SPRING WATER, 1L, 1 COUNT")).toBe(
    "Mountain Valley Spring Water, 1L, 1 Count"
  );

  expect(pascalCase("SPINDRIFT SPARKLING WATER, LEMON, 8 COUNT")).toBe(
    "Spindrift Sparkling Water, Lemon, 8 Count"
  );

  expect(pascalCase("HARMLESS HARVEST ORGANIC COCONUT WATER, 32 OZ")).toBe(
    "Harmless Harvest Organic Coconut Water, 32 Oz"
  );

  expect(
    pascalCase("SPINDRIFT SPARKLING WATER, BLOOD ORANGE TANGERINE, 8 COUNT")
  ).toBe("Spindrift Sparkling Water, Blood Orange Tangerine, 8 Count");

  expect(pascalCase("Siggi's Mixed Berry Non Fat Yogurt 4 Pack")).toBe(
    "Siggi's Mixed Berry Non Fat Yogurt 4 Pack"
  );

  expect(pascalCase("Kerrygold Pure Irish Butter")).toBe(
    "Kerrygold Pure Irish Butter"
  );

  expect(pascalCase("Organic Mozzarella Sticks")).toBe(
    "Organic Mozzarella Sticks"
  );

  expect(pascalCase("Organic Valley Cream Cheese Spread")).toBe(
    "Organic Valley Cream Cheese Spread"
  );

  expect(pascalCase("Chicken & Apple Chicken Sausage")).toBe(
    "Chicken & Apple Chicken Sausage"
  );

  expect(pascalCase("RAOS Chicken Parmesan")).toBe("Raos Chicken Parmesan");

  expect(pascalCase("Applegate Chicken Nuggets")).toBe(
    "Applegate Chicken Nuggets"
  );

  expect(pascalCase("Banana, 1ct")).toBe("Banana, 1Ct");

  expect(pascalCase("Frozen Salmon Fillets (2),6 oz/each")).toBe(
    "Frozen Salmon Fillets (2),6 Oz/each"
  );

  expect(pascalCase("Organic Thick & Chunky Medium Salsa")).toBe(
    "Organic Thick & Chunky Medium Salsa"
  );

  expect(pascalCase("Stacy's Simply Naked Pita Chips, Multigrain")).toBe(
    "Stacy's Simply Naked Pita Chips, Multigrain"
  );
});
