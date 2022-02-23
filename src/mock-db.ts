let mockRestaurantList = [
  {
    id: "1",
    name: "Paluba II",
    urlName: "paluba",
    phone: "606 629 069",
    address:
      "Rotonda del Motorista, La Granja, Avenida Juan Carlos I, 11405 Jerez de la Frontera, Cádiz",
    locationUrl:
      "https://www.google.com/maps/place/Cervecer%C3%ADa+Paluba/@36.6934059,-6.1025559,15z/data=!4m5!3m4!1s0x0:0x88ff8889eecfff0e!8m2!3d36.6934065!4d-6.1025711",
    theme: "brewery",
    official: true,
    menuDate: new Date("2022-02-14"),
    communitySourceUrl: "",
    description: "Cervecería & Urban Food",
    menu: [
      {
        name: "Cervezas",
        items: [
          {
            name: "Estrella Galicia Barril",
            price: 1.2,
            description:
              "Agua de la ciudad de A Coruña, maltas de doscarreras (pilsen y tostada), maíz y lúpulos Nugget y Perle Hallertau. Levadura seleccionada Hijos de Rivera.",
          },
          {
            name: "Estrella Galicia (33 cl)",
            price: 1.5,
            description:
              "Agua de la ciudad de A Coruña, maltas de doscarreras (pilsen y tostada), maíz y lúpulos Nugget y Perle Hallertau. Levadura seleccionada Hijos de Rivera.",
          },
          {
            name: "1906 Reserva Especial",
            price: 2,
            description:
              "Agua de la ciudad de A Coruña, maltas de dos carreras (pilsen y tostada), maíz y lúpulos Nugget y Perle Hallertau. Levadura seleccionada Hijos de Rivera.",
          },
          {
            name: "Grolsch Radler",
            price: 1.3,
            description:
              "Una mezcla de 40% de cerveza Grolsch y zumo de frutas. Carácter refrescante propio de una Radler; con la calidad y tradición propias de Grolsch. Con una mezcla de 40% de cerveza Grolsch y zumo de frutas, y elaborada solo con ingredientes naturales, Grolsch Radler tiene un sabor dulce y un regusto muy ligero, con el sabor refrescante que le aporta el limón.",
          },
          {
            name: "Brewdog - Punk IPA",
            price: 2.7,
            description:
              "Levadura Wyeast 1056 - American Ale. Malta Extra Pale y Caramalt. Lúpulos Chinook, Ahtanum, Amarillo, Cascade, Simcoe y Nelson Sauvin.",
          },
          {
            name: "Erdinger Urweisse (50 cl)",
            price: 2.9,

            description:
              "Agua, Malta de trigo (+ 50%), malta de cebada, malta tostada, lúpulo Hallertau y levadura weizen.",
          },
        ],
      },
      {
        name: "Cervezas cero alcohol",
        items: [
          {
            name: "Estrella Galicia 0,0%",
            price: 1.5,
            description:
              "Agua de la ciudad de A Coruña, maltas de dos carreras (pilsen y tostada), maíz y lúpulos Nugget y Perle Hallertau. Levadura seleccionada Hijos de Rivera.",
          },
          {
            name: "Estrella Galicia 0,0% Tostada",
            price: 1.8,
            description:
              "Agua de la ciudad de A Coruña, blend de maltas con diferentes grados de secado/tostado, maíz, lúpulos de las variedades Nugget, Perle y Sladek. Levadura seleccionada de Hijos de Rivera.",
          },
          {
            name: "Estrella Galicia 0,0% Negra",
            price: 1.8,

            description:
              "Agua de la ciudad de A Coruña, un coupage de cuatro maltas (Pilsen, Dark, Caramel y Black),lúpulos de las variedades Nugget y Sladek. Levadura seleccionada de Hijos de Rivera.",
          },
        ],
      },
      {
        name: "Tapas frías",
        items: [
          {
            name: "Ensaladilla",
            price: 2.5,
          },
          {
            name: "Ali-oli",
            price: 2.2,
          },
          {
            name: "Pimientos asados con caballa",
            price: 3,
          },
          {
            name: "Boquerones en vinagre",
            price: 3,
          },
          {
            name: "Chicharrones",
            price: 3,
          },
          {
            name: "Tapa de queso",
            price: 2.5,
          },
          {
            name: "Queso con anchoas",
            price: 3,
          },
        ],
      },
      {
        name: "Tapas Calientes",
        items: [
          {
            name: "Carrillá Ibérica",
            price: 3,
          },
          {
            name: "Albóndigas",
            price: 3,
          },
          {
            name: "Pinchito guarnición",
            price: 4,
          },
          {
            name: "Croquetas de chicharrones",
            price: 3,
          },
          {
            name: "Lagrimitas de pollo",
            price: 3.5,
          },
          {
            name: "Medallones de queso de cabra a la plancha",
            price: 6.3,
          },
          {
            name: "Salchipapa",
            price: 3,
            description: "Patatas fritas con salchicha y salsas",
          },
        ],
      },
      {
        name: "Montaditos",
        items: [
          {
            name: "Palometa",
            price: 2.5,
          },
          {
            name: "Melva",
            price: 2.5,
          },
          {
            name: "Caballa",
            price: 2.5,
          },
          {
            name: "Lomo",
            price: 2.5,
          },
          {
            name: "Serranito",
            price: 3,
          },
        ],
      },
      {
        name: "Ensaladas",
        items: [
          {
            name: "Ensalada Mixta",
            price: 5,
            description: "Lechuga, tomate, cebolla, huevo, maíz, atun",
          },
          {
            name: "Ensalada César con pollo",
            price: 5,
            description:
              "Lechuga, pechuga de pollo, picatostes, queso parmesano, salsa césar",
          },
        ],
      },
      {
        name: "Entrantes",
        items: [
          {
            name: "Nachos Mexicanos",
            price: 5.5,
            description:
              "Nachos, mezcla de quesos, pico de gallo y chili con carne",
          },
          {
            name: "Nachos 3 Salsas",
            price: 5,
            description:
              "Nachos, mezcla de quesos, guacamole, crema agria y cebolla encurtida",
          },
          {
            name: "Patatas Paluba",
            price: 5,
            description:
              "Patatas fritas, bacon, queso Chedar y nuestra salsa especial",
          },
          {
            name: "Patatas Bacon Cheese Fries",
            price: 5.5,
            description:
              "Patatas fritas, bacon, mezcla de quesos y salsa ranchera",
          },
          {
            name: "Patatas Chili Cheese Fries",
            price: 6.5,
            description:
              "Patatas fritas, salsa ranchera, mezcla de quesos, chili con carne, pico de gallo y jalapeños",
          },
          {
            name: "Patatas Pulled Pork",
            price: 6.0,
            description: "Patatas fritas, mezcla de quesos, pulled pork",
          },
          {
            name: "Patatas Bravas",
            price: 3.5,
            description: "Patatas fritas con salsa brava",
          },
        ],
      },
      {
        name: "Platos",
        items: [
          {
            name: "Costilla BBQ",
            price: 13,
          },
          {
            name: "Lasaña casera",
            price: 4.8,
            description: "Pasta, boloñesa, queso y bechamel",
          },
          {
            name: "Revuelto casero",
            price: 4.5,
            description: "Patatas, huevo, jamón y pimientos",
          },
          {
            name: "Huevos rotos",
            price: 4.5,
            description: "Patatas, jamón y huevos",
          },
          {
            name: "Brochetas",
            price: 5.5,
            description: "De pollo o cerdo, con guarnición",
          },
          {
            name: "Aneto",
            price: 4.5,
            description: "A la castellana con patatas y pimientos asados",
          },
          {
            name: "Escalopines",
            price: 4,
            description: "De pollo empanado con patatas",
          },
        ],
      },
      {
        name: "Burguers",
        items: [
          {
            name: "Paluba Burguer",
            price: 7.8,
            description:
              "Pan Brioche, 285 gr. de carne de Buey, Queso Cheda, Lechuga, tomate, cebolla roja a la plancha, pepinillo",
          },
          {
            name: "Black Angus XL",
            price: 7,
            description:
              "Pan de sésamo, 200 gr. de carne de Angus, bacon, Doble de queso Chedar, Cebolla blanca pochada con BBQ, canónigos",
          },
          {
            name: "Pulled Pork",
            price: 6.5,
            description:
              "Pan rústico, Pulled Pork, A elegir: (1) Aguacate, cebolla encurtida y pepinillo (2) Ensaladilla de col",
          },
          {
            name: "Chicharron's Burguer",
            price: 5.5,
            description:
              "Pan rústico, Carne picada & chicharrones, A elegir: queso semicurado o queso de cabra, Lechuga, tomate y cebolla pochada",
          },
          {
            name: "Buey Burguer",
            price: 5.5,
            description:
              "Pan de sésamo, Carne de Buey, bacon, Queso, Cebolla blanca, lechuga y tomate",
          },
          {
            name: "Burguer completa",
            price: 4.8,
            description:
              "Pan de sésamo, Carne de vacuno, Queso, Cebolla blanca, lechuga y tomate",
          },
        ],
      },
      {
        name: "Sandwiches",
        items: [
          {
            name: "Sandwich Paluba",
            price: 5,
            description:
              "Primer piso de ensaladilla de pollo desmenuzado. Segundo piso de queso, jamón york y huevo",
          },
          {
            name: "Sandwich Club",
            price: 5,
            description:
              "Dos pisos de pollo, jamón york, bacon, queso Edam, lechuga, tomate y mayonesa",
          },
          {
            name: "Sandwich Vegetal",
            price: 3.5,
            description: "Atún, pico de gallo, lechuga y salsa césar",
          },
        ],
      },
      {
        name: "Viva México 🇲🇽",
        items: [
          {
            name: "Tacos de lagarto ibérico",
            price: 5,
            description:
              "3 x Tortilla de trigo, lagarto ibérico, queso chedar y cilantro",
          },
          {
            name: "Tacos de carne",
            price: 4.5,
            description: "3 x Tortilla de trigo, carne, pico de gallo y lima",
          },
          {
            name: "Tacos de pollo",
            price: 4.5,
            description:
              "3 x Tortilla de trigo, pollo, mix de quesos y salsa Garden",
          },
          {
            name: "Pulled Pork Tacos",
            price: 5,
            description:
              "3 x Tortilla de maíz, pulled pork, aguacate, cebolla encurtida y pepinillos",
          },
          {
            name: "Tacos de langostinos",
            price: 5,
            description:
              "2 x Tortilla de maíz, pico de gallo, langostinos en tempura, salsa brava y cebolla encurtida",
          },
        ],
      },
      {
        name: "Más México",
        items: [
          {
            name: "Fajita de pollo",
            price: 6,
            description:
              "Pollo, pimientos, tortillas de trigo, crema agria, queso y guacamole",
          },
          {
            name: "Burrito",
            price: 5.5,
            description:
              "Tortilla de trigo y Tomate, arroz salvaje, pollo, maíz, mix de quesos y salsa Garden. Se acompaña con salsa alioli",
          },
          {
            name: "Enchilada de Pollo",
            price: 5,
            description:
              "Tortilla de trigo y tomate,  salsa mojo picón, mix de quesos, pollo, pico de gallo, crema agria y cebolla roja",
          },
        ],
      },
      {
        name: "Quesadillas",
        items: [
          {
            name: "Quesadilla de carne",
            price: 4.5,
            description: "Tortilla de trigo, carne y mix de quesos",
          },
          {
            name: "Quesadilla de pollo",
            price: 4.5,
            description: "Tortilla de trigo, pollo, maíz y mix de quesos",
          },
          {
            name: "Quesadilla BBQ",
            price: 4.5,
            description:
              "Tortilla de trigo, bacon, mix de quesos y salsa barbacoa",
          },
        ],
      },
      {
        name: "Hot Dog's",
        items: [
          {
            name: "Hot Dog XL",
            price: 3,
            description: "Con pico de gallo o queso y cebolla frita",
          },
        ],
      },
      {
        name: "Postres",
        items: [
          {
            name: "Arroz con leche",
            price: 3.5,
          },
          {
            name: "Panacota",
            price: 3.5,
          },
          {
            name: "Coulant de chocolate",
            price: 3.5,
          },
        ],
      },
    ],
  },
  {
    id: "2",
    name: "Cervecería El Sitio",
    urlName: "cerveceria-el-sitio",
    phone: "956 12 66 10",
    address: "C. Virgen de los Remedios, 3, 11693 Alcalá del Valle, Cádiz",
    locationUrl:
      "https://www.google.com/maps/place/Cervercer%C3%ADa+El+Sitio/@36.9029977,-5.170835,15z/data=!3m1!5s0xd0d4916f2046fc1:0x1fb401da96efca51!4m12!1m6!3m5!1s0x0:0xaa583b7ce7103d67!2sCervercer%C3%ADa+El+Sitio!8m2!3d36.9029977!4d-5.170835!3m4!1s0xd0d4916f02ec7b7:0xaa583b7ce7103d67!8m2!3d36.9029977!4d-5.170835",
    communitySourceUrl: "",
    official: false,
    description: "",
    menuDate: new Date("2022-02-22"),
    theme: "brewery",
    menu: [
      {
        name: "Tapas y Raciones",
        items: [
          {
            name: "Ensaladilla Rusa",
            priceByRation: {
              rationsTypes: [
                { price: 1, unit: "Tapa" },
                { price: 4.5, unit: "Ración" },
              ],
              rationName: "Raciones",
            },
          },
          {
            name: "Jamón Serrano",
            priceByRation: {
              rationsTypes: [
                { price: 1, unit: "Tapa" },
                { price: 7, unit: "Ración" },
              ],
              rationName: "Raciones",
            },
          },
          {
            name: "Chorizo Ibérico",
            priceByRation: {
              rationsTypes: [
                { price: 1.2, unit: "Tapa" },
                { price: 8, unit: "Ración" },
              ],
              rationName: "Raciones",
            },
          },
          {
            name: "Salchichón Ibérico",
            priceByRation: {
              rationsTypes: [
                { price: 1, unit: "Tapa" },
                { price: 7, unit: "Ración" },
              ],
              rationName: "Raciones",
            },
          },
          {
            name: "Morzilla Ibérico",
            priceByRation: {
              rationsTypes: [
                { price: 1, unit: "Tapa" },
                { price: 7, unit: "Ración" },
              ],
              rationName: "Raciones",
            },
          },
          {
            name: "Tortilla de Patatas",
            priceByRation: {
              rationsTypes: [
                { price: 1, unit: "Tapa" },
                { price: 7, unit: "Ración" },
              ],
              rationName: "Raciones",
            },
          },
          {
            name: "Patatas Ali-Oli",
            priceByRation: {
              rationsTypes: [
                { price: 1, unit: "Tapa" },
                { price: 4.5, unit: "Ración" },
              ],
              rationName: "Raciones",
            },
          },
          {
            name: "Picadillo de Pulpo",
            priceByRation: {
              rationsTypes: [
                { price: 1.2, unit: "Tapa" },
                { price: 6, unit: "Ración" },
              ],
              rationName: "Raciones",
            },
          },
          {
            name: "Serranito",
            priceByRation: {
              rationsTypes: [
                { price: 1.2, unit: "Tapa" },
                { price: 12, unit: "Ración" },
              ],
              rationName: "Raciones",
            },
          },
          {
            name: "Pincho Gamba",
            priceByRation: {
              rationsTypes: [{ price: 1.8, unit: "Tapa" }],
              rationName: "Raciones",
            },
          },
          {
            name: "Pincho Moruno",
            priceByRation: {
              rationsTypes: [{ price: 1.8, unit: "Tapa" }],
              rationName: "Raciones",
            },
          },
          {
            name: "Stick Kebab",
            priceByRation: {
              rationsTypes: [
                { price: 1.5, unit: "Tapa" },
                { price: 12, unit: "Ración" },
              ],
              rationName: "Raciones",
            },
          },
          {
            name: "Pollo Cajún",
            priceByRation: {
              rationsTypes: [
                { price: 1.5, unit: "Tapa" },
                { price: 12, unit: "Ración" },
              ],
              rationName: "Raciones",
            },
          },
          {
            name: "Bomba (Patata y Carne",
            priceByRation: {
              rationsTypes: [
                { price: 1.5, unit: "Tapa" },
                { price: 12, unit: "Ración" },
              ],
              rationName: "Raciones",
            },
          },
          {
            name: "Mini Hambuguesa",
            priceByRation: {
              rationsTypes: [
                { price: 1.5, unit: "Tapa" },
                { price: 12, unit: "Ración" },
              ],
              rationName: "Raciones",
            },
          },
          {
            name: "Mini Hamburguesa de Buey",
            priceByRation: {
              rationsTypes: [{ price: 2, unit: "Tapa" }],
              rationName: "Raciones",
            },
          },
          {
            name: "Boquerón en Vinagre",
            priceByRation: {
              rationsTypes: [
                { price: 1.2, unit: "Tapa" },
                { price: 10, unit: "Ración" },
              ],
              rationName: "Raciones",
            },
          },
          {
            name: "Cóctel de Marisco",
            priceByRation: {
              rationsTypes: [
                { price: 1.5, unit: "Tapa" },
                { price: 7, unit: "Ración" },
              ],
              rationName: "Raciones",
            },
          },
          {
            name: "Caprichito",
            priceByRation: {
              rationsTypes: [{ price: 1.5, unit: "Tapa" }],
              rationName: "Raciones",
            },
          },
          {
            name: "Chipirón Plancha",
            priceByRation: {
              rationsTypes: [
                { price: 1.5, unit: "Tapa" },
                { price: 7, unit: "Ración" },
              ],
              rationName: "Raciones",
            },
          },
          {
            name: "Cazón en Adobo",
            priceByRation: {
              rationsTypes: [
                { price: 1.2, unit: "Tapa" },
                { price: 6, unit: "Ración" },
              ],
              rationName: "Raciones",
            },
          },
          {
            name: "Lagartitos",
            priceByRation: {
              rationsTypes: [
                { price: 1.5, unit: "Tapa" },
                { price: 7, unit: "Ración" },
              ],
              rationName: "Raciones",
            },
          },
          {
            name: "Papas Arriera",
            priceByRation: {
              rationsTypes: [
                { price: 2, unit: "Tapa" },
                { price: 8, unit: "Ración" },
              ],
              rationName: "Raciones",
            },
          },
          {
            name: "Queso Payoyo",
            priceByRation: {
              rationsTypes: [
                { price: 1.2, unit: "Tapa" },
                { price: 7, unit: "Ración" },
              ],
              rationName: "Raciones",
            },
          },
        ],
      },
      {
        name: "Hamburguesas (Todas las Hamburguesas incluyen Patatas Fritas)",
        items: [
          {
            name: "Simple",
            description: "Ketchup y Mahonesa",
            price: 2.5,
          },
          {
            name: "Con Queso",
            description: "Queso, Ketchup y Mahonesa",
            price: 2.6,
          },
          {
            name: "Completa",
            description:
              "Cebolla, Lechuga, Tomate, Queso, Ketchup, Mostaza y Ensalada",
            price: 2.7,
          },
          {
            name: "Especial",
            description: "Queso, Huevo, Bacon, Mahonesa y Ketchup",
            price: 3,
          },
          {
            name: "De Buey",
            description: "Queso, Mahonesa y Ketchup",
            price: 4,
          },
          {
            name: "Especial de Buey",
            description: "Queso, Bacon, Huevo, Mahonesa y Ketchup",
            price: 4.5,
          },
        ],
      },
      {
        name: "Perritos",
        items: [
          {
            name: "Simple",
            description: "Ketchup y Mostaza",
            price: 2,
          },
          {
            name: "Completo",
            description: "Cebolla, Lechugar, Tomate, Ketchup y Mostaza",
            price: 2.5,
          },
        ],
      },
      {
        name: "Camperos (Todos los Camperos incluyen Patatas Fritas)",
        items: [
          {
            name: "Normal",
            description: "Queso, Jamón, Tomate, Lechuga y Mahonesa",
            price: 3.2,
          },
          {
            name: "Atún y Queso",
            description: "Tomate, Lechuga y Mahonesa",
            price: 3.5,
          },
          {
            name: "Bacon",
            description: "Tomate, Lechuga, Queso y Mahonesa",
            price: 3.2,
          },
          {
            name: "Serrano",
            description: "Jamón Serrano, Tomate, Lechuga, Queso y Mahonesa",
            price: 3.5,
          },
          {
            name: "Pollo y Queso",
            description: "Tomate, Lechuga y Mahonesa",
            price: 3.5,
          },
          {
            name: "Vegetal",
            description:
              "Queso, Lechuga, Tomate, Cebolla, Pimiento, Maiz, Zanahoria y Mahonesa",
            price: 3,
          },
          {
            name: "Capricho",
            description:
              "Pollo, Huevo, Lechuga, Tomate, Queso, Bacon y Mahonesa",
            price: 3.8,
          },
          {
            name: "Kebab",
            description: "Tomate, Lechuga, Cebolla y Salsa Kebab",
            price: 4,
          },
        ],
      },
      {
        name: "Baguettes",
        items: [
          {
            name: "Pollo y Bacon",
            description: "Queso, Tomate, Lechuga y Mahonesa",
            price: 3.5,
          },
          {
            name: "Pollo",
            description: "Queso, Tomate, Lechuga y Mahonesa",
            price: 3.2,
          },
          {
            name: "Bacon",
            description: "Queso, Lechuga, Mahonesa",
            price: 3,
          },
          {
            name: "Lomo Adobado",
            description: "Queso, Tomate, Lechuga, Mahonesa",
            price: 3,
          },
          {
            name: "Filete",
            description: "Queso, Pimiento, Mahonesa",
            price: 3.2,
          },
          {
            name: "Chorizo Ibérico",
            description: "Queso",
            price: 3,
          },
          {
            name: "Salchichón Ibérico",
            description: "Queso",
            price: 3,
          },
          {
            name: "Jamón Serrano",
            description: "Aceite de Oliva, Queso",
            price: 3,
          },
          {
            name: "Jamón a la Catalana",
            price: 3.2,
          },
          {
            name: "Jamón Cocido",
            description: "Huevo, Queso, Tomate, Lechuga, Mahonesa",
            price: 3,
          },
          {
            name: "Tortilla",
            description: "Queso, Tomate, Lechuga, Mahonesa",
            price: 3,
          },
          {
            name: "Atún",
            description: "Queso, Tomate, Lechuga, Mahonesa",
            price: 3.2,
          },
          {
            name: "Baguette de Serranito",
            price: 3.5,
          },
          {
            name: "Serrana",
            description: "Queso Curado Oveja, Jamón Serrano",
            price: 5,
          },
        ],
      },
      {
        name: "Ensaladas",
        items: [
          {
            name: "Mixta",
            description: "Lechuga, Tomate, Cebolla, Aceitunas, Atún",
            price: 4,
          },
          {
            name: "Casa",
            description:
              "Lechuga, Tomate, Cebolla, Aceitunas, Maiz, Zanahoria, Atún, Remolacha",
            price: 4.8,
          },
        ],
      },
      {
        name: "Papatas Fritas",
        items: [
          {
            name: "Normales",
            price: 2,
          },
          {
            name: "Tres salsas",
            price: 3,
          },
          {
            name: "Kebab",
            price: 5,
          },
        ],
      },
      {
        name: "Carnes a la Brasa (Pueden ir acompañadas de ensalada o patatas)",
        items: [
          {
            name: "Churrasco Pollo",
            price: 7,
          },
          {
            name: "Churrasco Cerdo",
            price: 7,
          },
          {
            name: "Presa Húngara",
            price: 9,
          },
          {
            name: "Secreto",
            price: 12,
          },
          {
            name: "Churrasco Ibérico",
            price: 12,
          },
          {
            name: "Presa Ibérica",
            price: 14,
          },
          {
            name: "Chuletón Aguja Ternera",
            price: 15,
          },
          {
            name: "Churrasco Ternera",
            price: 14,
          },
        ],
      },
      {
        name: "Sandwiches",
        items: [
          {
            name: "Mixto",
            description: "Mantequilla, Jamón Cocido, Queso",
            price: 2,
          },
          {
            name: "Vegetal",
            description: "Mantequilla, Jamón, Queso, Lechuga, Tomate, Mahonesa",
            price: 2.7,
          },
          {
            name: "Bacon",
            description: "Mantequilla, Queso, Bacon, Lechuga, Tomate, Mahonesa",
            price: 2.7,
          },
          {
            name: "Pollo",
            description: "Mantequilla, Queso, Pollo, Lechuga, Tomate, Mahonesa",
            price: 2.8,
          },
          {
            name: "Pollo y Bacon",
            description:
              "Mantequilla, Queso, Pollo, Bacon, Lechuga, Tomate, Mahonesa",
            price: 3,
          },
          {
            name: "Atún",
            description: "Mantequilla, Tomate, Lechuga, Atún",
            price: 2.8,
          },
        ],
      },
      {
        name: "Pizzas",
        items: [
          {
            name: "Margarita",
            description: "Tomate, Queso, Orégano",
            price: 5.5,
          },
          {
            name: "Vesubio",
            description: "Tomate, Queso, Jamón, Óregano",
            price: 5.8,
          },
          {
            name: "Napolitana",
            description:
              "Champiñones, Alcachofas, Jamón, Huevo, Óregano, Mozzarella",
            price: 6,
          },
          {
            name: "Choricera",
            description:
              "Champiñones, Alcachofas, Chorizo, Jamón, Huevo, Óregano, Mozzarella",
            price: 6,
          },
          {
            name: "Al Tonno",
            description: "Tomate, Queso, Atún, Cebolla, Orégano",
            price: 6,
          },
          {
            name: "Caprichosa",
            description: "Tomate, Queso, Jamón, Champiñones, Óregano",
            price: 6,
          },
          {
            name: "Amigo",
            description: "Tomate, Queso, Jamón, Atún, Orégano",
            price: 6,
          },
          {
            name: "Bianca",
            description:
              "Champiñones, Tomate, Queso, Bacon, Nata, Cebolla, Óregano",
            price: 6,
          },
          {
            name: "Vegetal",
            description:
              "Tomate, Queso, Maiz, Tomate Natural, Cebolla, Aceituna, Pimiento, Champiñones, Óregano",
            price: 6,
          },
          {
            name: "Barbacoa",
            description: "Pollo, Bacon, Cebollas, Salsa Barbacoa",
            price: 6,
          },
          {
            name: "4 Estaciones",
            description:
              "Champiñones, Alcachofa, Jamón, Huevo, Gambas, Mejillones",
            price: 6,
          },
          {
            name: "Kebab",
            price: 6,
          },
          {
            name: "4 Quesos",
            price: 6,
          },
        ],
      },
    ],
  },
  {
    id: "3",
    name: "Hermanos Alba",
    urlName: "hermanosalba",
    phone: "951 33 18 03",
    address: "Calle Salvador Allende, 15 - Málaga",
    locationUrl:
      "https://www.google.com/maps/place/Restaurante+Hermanos+Alba/@36.7199358,-4.3637038,15z/data=!4m2!3m1!1s0x0:0x20b21ada1121ce03?sa=X&ved=2ahUKEwj_8pDWyff1AhUkSvEDHeBgAOEQ_BJ6BAhOEAU",
    menuDate: new Date("2022-02-14"),
    communitySourceUrl:
      "https://www.hermanosalba.com/_files/ugd/e7dd90_9fa99b00428b4754a7ff716eccc73fa3.pdf",
    official: false,
    description: "La tradición de nuestra bahía",
    theme: "fish",
    menu: [
      {
        name: "Entrantes",
        items: [
          {
            name: "Anchoa 0,0 limpia en case sobre tosta de pan cristal y tomate (unidad)",
            price: 2.5,
          },
          {
            name: "Boqueron en vinagre hecho en casa XL (unidad)",
            price: 1.5,
          },
          {
            name: "Nuestra rusa rica en aove",
            price: 8,
          },
          {
            name: "Tartar de atún con leve toque de picante",
            price: 18,
          },
          {
            name: "Tomate rosa castellano con ventresca y aguacate de la axarquía",
            price: 12,
          },
          {
            name: "Croquetas de gamba blanca de Málaga hechas en casa",
            price: 12,
          },
          {
            name: "Jamón Ibérico de bellota aljomar",
            price: 24,
          },
        ],
      },
      {
        name: "Mariscos",
        items: [
          {
            name: "Conchas finas naturales o al Pil-Pil",
            price: 2.8,
            unit: "/ud.",
          },
          {
            name: "Búsanos de marbella",
            price: 4.5,
            unit: "/ud.",
          },
          {
            name: "Ostras francesas Gillardeau N2",
            price: 4.5,
            unit: "/ud.",
          },
          {
            name: "Zamburiñas al horno aliñadas con un falso Pilpil",
            price: 3.5,
            unit: "/ud.",
          },
          {
            name: "Mejillones al vapor",
            price: 10,
          },
          {
            name: "Coquinas de Málaga",
            price: 18,
          },
          {
            name: "Gamba blanca de la caleta para la plancha",
            price: 25,
          },
          {
            name: "Gamba roja de Almería",
            price: 36,
            unit: "/ud.",
          },
          {
            name: "Quisquilla de Motril cocida",
            price: 28,
          },
          {
            name: "Cigala de la caleta XXL",
            price: 12,
            unit: "/100 gr.",
          },
          {
            name: "Bogavante del mediterráneo",
            price: 8.5,
            unit: "/100 gr.",
          },
          {
            name: "Carabinero con patata y huevo",
            price: 59,
          },
        ],
      },
      {
        name: "Pescados",
        items: [
          {
            name: "Boquerón vitoriano frito o al limón",
            price: 8.5,
          },
          {
            name: "Calamar de potera troceado y frito",
            price: 14,
          },
          {
            name: "Calamaritos o Puntillas de la caleta fritos",
            price: 17,
          },
          {
            name: "Gambas fritas con huevo y trufa",
            price: 18,
          },
          {
            name: "Salmonetitos fritos de Adra",
            price: 10.5,
          },
          {
            name: "Chopitos plancha con ajo y perejil",
            price: 18,
          },
          {
            name: "Lenguado negro a la plancha",
            price: 6,
            unit: "/100 gr.",
          },
          {
            name: "Buen lomo de atún a la plancha tipo tataki",
            price: 22,
          },
          {
            name: "Pargo, dorado o urta salvaje de Conil a la sal o espalda",
            price: 5,
            unit: "/100 gr.",
          },
          {
            name: "Gallineta troceada y frita",
            price: 5.5,
            unit: "/100 gr.",
          },
          {
            name: "Rodaballo salvaje al horno en aceite",
            price: 6,
            unit: "/100 gr.",
          },
          {
            name: "Gallo Pedro de Almería troceado y frito",
            price: 5.5,
            unit: "/100 gr.",
          },
        ],
      },
    ],
  },
  {
    id: "4",
    name: "Estación Término",
    urlName: "estacion-termino",
    phone: "952 40 10 96",
    address:
      "Plaza del Señorío, 8, Edificio Garcia Lorca, 29730 Rincón de la Victoria, Málaga",
    locationUrl:
      "https://www.google.com/maps/place/Estaci%C3%B3n+T%C3%A9rmino+Restaurante/@36.7166232,-4.2816961,15z/data=!4m5!3m4!1s0x0:0xdfb3fd3416c42c60!8m2!3d36.7166232!4d-4.2816961",
    communitySourceUrl: "https://www.estacion-termino.es/carta/",
    theme: "meat",
    official: false,
    menuDate: new Date("2022-02-15"),
    description: "",
    menu: [
      {
        name: "Entrantes",
        items: [
          {
            name: "Sopa fría del día",
            price: 5,
          },
          {
            name: "Sopa caliente del día",
            price: 5,
          },
          {
            name: "Ensalada gratinada",
            description: "Lechuga, Queso de Cabra, Nueces y Manzana",
            price: 8,
          },
          {
            name: "Ensalada tricolor",
            description: "Tomate, Aguacate, Queso Mozarela",
            price: 8,
          },
          {
            name: "Ensalada tropical",
            description: "Lechuga, Aguacate, Piña y Melocotón, Palmito",
            price: 8,
          },
          {
            name: "Ensalada E.T",
            description: "Zanahoria, Manzana, Pasas, Maiz, Nueces",
            price: 6.5,
          },
          {
            name: "Ensalada Atapay",
            description: "Lechuga, Apio, Manzana, Nueces y Pollo",
            price: 8,
          },
          {
            name: "Milhojas",
            description: "Verduras a la plancha con Queso de Cabra",
            price: 9,
          },
          {
            name: "Croquetas Caseras",
            price: 8,
          },
          {
            name: "Camembert Frito",
            price: 8,
          },
          {
            name: "Pincho de Langostinos y Vieras",
            price: 9.5,
          },
          {
            name: "Langostinos Rebozados",
            price: 9.5,
          },
          {
            name: "Langostinos al Curry",
            price: 10.25,
          },
        ],
      },
      {
        name: "Carnes",
        items: [
          {
            name: "Pincho de Cordero a la Moruna",
            price: 10.75,
          },
          {
            name: "Lápices de pollo a la Pimienta Verde",
            price: 12.75,
          },
          {
            name: "Pastel de Carne con Salsa de Frambuesas",
            price: 11.75,
          },
          {
            name: "Solomillo de Cerdo al Estilo E.T",
            price: 13.25,
          },
          {
            name: "Albóndigas a la Moruna",
            price: 12.75,
          },
          {
            name: "Solomillo de Ternera",
            price: 20,
          },
          {
            name: "Codillo de Cerdo al Horno",
            price: 13.25,
          },
          {
            name: "Bobotie",
            description: "Pastel de Carne Sudafricano",
            price: 11.75,
          },
        ],
      },
      {
        name: "Pescados",
        items: [
          {
            name: "Bacalao Poché en su Pil-Pil",
            price: 14.25,
          },
          {
            name: "Filetes de Salmonete con Salsa de Hinojo",
            price: 14.25,
          },
          {
            name: "Salmón a la Pimienta Verde",
            price: 14.25,
          },
        ],
      },
    ],
  },
];

export const getRestaurantList = async () => {
  return mockRestaurantList;
};

export const getRestaurant = async (id) => {
  return mockRestaurantList.find((restaurant) => restaurant.id === id);
};

export const insertRestaurant = async (restaurant) => {
  const id = String(mockRestaurantList.length + 1);
  const newRestaurant = {
    ...restaurant,
    id,
  };

  mockRestaurantList = [...mockRestaurantList, newRestaurant];
  return newRestaurant;
};

export const updateRestaurant = async (id, updatedRestaurant) => {
  mockRestaurantList = mockRestaurantList.map((restaurant) =>
    restaurant.id === id
      ? {
          ...restaurant,
          ...updatedRestaurant,
          id,
        }
      : restaurant
  );
};

export const deleteRestaurant = async (id) => {
  mockRestaurantList = mockRestaurantList.filter(
    (restaurant) => restaurant.id !== id
  );
  return true;
};
