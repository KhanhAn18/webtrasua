const drinks = [
    {
      id: 1,
      name: "Trà Sữa Trân Châu",
      price: 35000,
      description: "Trà sữa truyền thống với trân châu đen dai ngon.",
      quality: 8,
      sizeOptions: [
        { size: "Nhỏ", additionalPrice: 0 },
        { size: "Vừa", additionalPrice: 5000 },
        { size: "Lớn", additionalPrice: 10000 }
      ],
      toppings: [
        { topping: "Thêm trân châu", additionalPrice: 5000 },
        { topping: "Thạch cà phê", additionalPrice: 7000 }
      ],
      isFeatured: true,
      image: require("@/assets/drinks/anh1.png")
    },
    {
      id: 2,
      name: "Trà Đào Cam Sả",
      price: 40000,
      description: "Thức uống thanh mát từ trà đào kết hợp với cam sả.",
      quality: 2,
      sizeOptions: [
        { size: "Nhỏ", additionalPrice: 0 },
        { size: "Vừa", additionalPrice: 6000 },
        { size: "Lớn", additionalPrice: 12000 }
      ],
      toppings: [
        { topping: "Thêm miếng đào", additionalPrice: 5000 },
        { topping: "Thêm sả", additionalPrice: 3000 }
      ],
      isFeatured: false,
      image: require("@/assets/drinks/anh2.png")
    },
    {
      id: 3,
      name: "Cà Phê Sữa Đá",
      price: 30000,
      description: "Cà phê Việt Nam đậm đà pha với sữa đặc, dùng đá mát lạnh.",
      quality: 3,
      sizeOptions: [
        { size: "Nhỏ", additionalPrice: 0 },
        { size: "Vừa", additionalPrice: 4000 },
        { size: "Lớn", additionalPrice: 8000 }
      ],
      toppings: [
        { topping: "Thêm sữa đặc", additionalPrice: 3000 },
        { topping: "Thêm kem sữa", additionalPrice: 6000 }
      ],
      isFeatured: true,
      image: require("@/assets/drinks/anh3.png")
    },
    {
      id: 4,
      name: "Matcha Đá Xay",
      price: 50000,
      description: "Matcha Nhật Bản thơm lừng kết hợp với sữa, xay nhuyễn cùng đá.",
      quality: 4,
      sizeOptions: [
        { size: "Nhỏ", additionalPrice: 0 },
        { size: "Vừa", additionalPrice: 5000 },
        { size: "Lớn", additionalPrice: 10000 }
      ],
      toppings: [
        { topping: "Thêm kem cheese", additionalPrice: 10000 },
        { topping: "Thêm hạt chia", additionalPrice: 5000 }
      ],
      isFeatured: false,
      image: require("@/assets/drinks/anh30.png")
    },
    {
      id: 5,
      name: "Sinh Tố Bơ",
      price: 45000,
      description: "Sinh tố bơ thơm ngon, bổ dưỡng, mát lạnh.",
      quality: 5,
      sizeOptions: [
        { size: "Nhỏ", additionalPrice: 0 },
        { size: "Vừa", additionalPrice: 6000 },
        { size: "Lớn", additionalPrice: 12000 }
      ],
      toppings: [
        { topping: "Thêm sữa chua", additionalPrice: 7000 },
        { topping: "Thêm dừa sợi", additionalPrice: 5000 }
      ],
      isFeatured: false,
      image: require("@/assets/drinks/anh5.png")
    },
    {
        id: 6,
        name: "Nước Dừa Tươi",
        price: 25000,
        description: "Nước dừa tươi nguyên chất, thơm mát, bổ dưỡng.",
        quality: 5,
        sizeOptions: [
          { size: "Nhỏ", additionalPrice: 0 },
          { size: "Vừa", additionalPrice: 5000 },
          { size: "Lớn", additionalPrice: 10000 }
        ],
        toppings: [],
        isFeatured: false,
        image: require("@/assets/drinks/anh6.png")
      },
      {
        id: 7,
        name: "Sinh Tố Dâu",
        price: 40000,
        description: "Sinh tố dâu tươi ngon, mát lạnh với vị chua ngọt hấp dẫn.",
        quality: 7,
        sizeOptions: [
          { size: "Nhỏ", additionalPrice: 0 },
          { size: "Vừa", additionalPrice: 6000 },
          { size: "Lớn", additionalPrice: 12000 }
        ],
        toppings: [
          { topping: "Thêm sữa đặc", additionalPrice: 3000 },
          { topping: "Thêm dừa sợi", additionalPrice: 5000 }
        ],
        isFeatured: true,
        image: require("@/assets/drinks/anh7.png")
      },
      {
        id: 8,
        name: "Cà Phê Trứng",
        price: 45000,
        description: "Cà phê trứng béo ngậy, thơm ngon đặc trưng.",
        quality: 7,
        sizeOptions: [
          { size: "Nhỏ", additionalPrice: 0 },
          { size: "Vừa", additionalPrice: 5000 },
          { size: "Lớn", additionalPrice: 10000 }
        ],
        toppings: [],
        isFeatured: false,
        image: require("@/assets/drinks/anh8.png")
      },
      {
        id: 9,
        name: "Trà Nhài",
        price: 35000,
        description: "Trà nhài thơm nhẹ, thanh mát, giúp giải khát.",
        quality: 7,
        sizeOptions: [
          { size: "Nhỏ", additionalPrice: 0 },
          { size: "Vừa", additionalPrice: 5000 },
          { size: "Lớn", additionalPrice: 10000 }
        ],
        toppings: [],
        isFeatured: false,
        image: require("@/assets/drinks/anh9.png")
      },
      {
        id: 10,
        name: "Trà Xanh Sữa",
        price: 40000,
        description: "Trà xanh kết hợp với sữa tươi, thơm ngon, béo ngậy.",
        quality: 8,
        sizeOptions: [
          { size: "Nhỏ", additionalPrice: 0 },
          { size: "Vừa", additionalPrice: 6000 },
          { size: "Lớn", additionalPrice: 12000 }
        ],
        toppings: [],
        isFeatured: true,
        image: require("@/assets/drinks/anh10.png")
      },
      {
        id: 11,
        name: "Soda Chanh",
        price: 30000,
        description: "Soda chanh chua ngọt, sảng khoái cho ngày hè.",
        quality: 8,
        sizeOptions: [
          { size: "Nhỏ", additionalPrice: 0 },
          { size: "Vừa", additionalPrice: 5000 },
          { size: "Lớn", additionalPrice: 10000 }
        ],
        toppings: [],
        isFeatured: false,
        image: require("@/assets/drinks/anh11.png")
      },
      {
        id: 12,
        name: "Nước Ép Cà Rốt",
        price: 35000,
        description: "Nước ép cà rốt tươi ngon, giàu vitamin, bổ dưỡng.",
        quality: 8,
        sizeOptions: [
          { size: "Nhỏ", additionalPrice: 0 },
          { size: "Vừa", additionalPrice: 5000 },
          { size: "Lớn", additionalPrice: 10000 }
        ],
        toppings: [],
        isFeatured: false,
        image: require("@/assets/drinks/anh12.png")
      },
      {
        id: 13,
        name: "Sinh Tố Kiwi",
        price: 45000,
        description: "Sinh tố kiwi tươi ngon, giàu vitamin C.",
        quality: 8,
        sizeOptions: [
          { size: "Nhỏ", additionalPrice: 0 },
          { size: "Vừa", additionalPrice: 6000 },
          { size: "Lớn", additionalPrice: 12000 }
        ],
        toppings: [
          { topping: "Thêm hạt chia", additionalPrice: 5000 },
          { topping: "Thêm sữa chua", additionalPrice: 7000 }
        ],
        isFeatured: false,
        image: require("@/assets/drinks/anh13.png")
      },
      {
        id: 14,
        name: "Nước Ép Dứa",
        price: 40000,
        description: "Nước ép dứa tươi, thơm ngon, giúp thanh nhiệt.",
        quality: 8,
        sizeOptions: [
          { size: "Nhỏ", additionalPrice: 0 },
          { size: "Vừa", additionalPrice: 5000 },
          { size: "Lớn", additionalPrice: 10000 }
        ],
        toppings: [],
        isFeatured: true,
        image: require("@/assets/drinks/anh14.png")
      },
      {
        id: 15,
        name: "Trà Sữa Socola",
        price: 45000,
        description: "Trà sữa thơm ngon kết hợp với vị socola ngọt ngào.",
        quality: 8,
        sizeOptions: [
          { size: "Nhỏ", additionalPrice: 0 },
          { size: "Vừa", additionalPrice: 6000 },
          { size: "Lớn", additionalPrice: 12000 }
        ],
        toppings: [
          { topping: "Thêm socola", additionalPrice: 5000 },
          { topping: "Thêm kem", additionalPrice: 7000 }
        ],
        isFeatured: true,
        image: require("@/assets/drinks/anh15.png")
    },
    {
        id: 16,
        name: "Trà Xanh Chanh",
        price: 35000,
        description: "Trà xanh mát lạnh kết hợp với vị chanh chua nhẹ.",
        quality: 7,
        sizeOptions: [
          { size: "Nhỏ", additionalPrice: 0 },
          { size: "Vừa", additionalPrice: 5000 },
          { size: "Lớn", additionalPrice: 10000 }
        ],
        toppings: [],
        isFeatured: false,
        image: require("@/assets/drinks/anh16.png")
      },
      {
        id: 17,
        name: "Nước Ép Táo",
        price: 40000,
        description: "Nước ép táo tươi, ngọt ngào và bổ dưỡng.",
        quality: 8,
        sizeOptions: [
          { size: "Nhỏ", additionalPrice: 0 },
          { size: "Vừa", additionalPrice: 5000 },
          { size: "Lớn", additionalPrice: 10000 }
        ],
        toppings: [],
        isFeatured: false,
        image: require("@/assets/drinks/anh17.png")
      },
      {
        id: 18,
        name: "Soda Dâu",
        price: 30000,
        description: "Soda vị dâu, ngọt mát và sảng khoái.",
        quality: 8,
        sizeOptions: [
          { size: "Nhỏ", additionalPrice: 0 },
          { size: "Vừa", additionalPrice: 5000 },
          { size: "Lớn", additionalPrice: 10000 }
        ],
        toppings: [],
        isFeatured: true,
        image: require("@/assets/drinks/anh18.png")
      },
      {
        id: 19,
        name: "Nước Ép Cam",
        price: 35000,
        description: "Nước ép cam tươi, giàu vitamin C.",
        quality: 7,
        sizeOptions: [
          { size: "Nhỏ", additionalPrice: 0 },
          { size: "Vừa", additionalPrice: 5000 },
          { size: "Lớn", additionalPrice: 10000 }
        ],
        toppings: [],
        isFeatured: true,
        image: require("@/assets/drinks/anh19.png")
      },
      {
        id: 20,
        name: "Trà Bưởi",
        price: 40000,
        description: "Trà bưởi thơm ngon, thanh mát, giải khát tốt.",
        quality: 7,
        sizeOptions: [
          { size: "Nhỏ", additionalPrice: 0 },
          { size: "Vừa", additionalPrice: 5000 },
          { size: "Lớn", additionalPrice: 10000 }
        ],
        toppings: [],
        isFeatured: true,
        image: require("@/assets/drinks/anh20.png")
      },
      {
        id: 21,
        name: "Soda Kiwi",
        price: 35000,
        description: "Soda kiwi tươi ngon, chua ngọt và mát lạnh.",
        quality: 8,
        sizeOptions: [
          { size: "Nhỏ", additionalPrice: 0 },
          { size: "Vừa", additionalPrice: 5000 },
          { size: "Lớn", additionalPrice: 10000 }
        ],
        toppings: [],
        isFeatured: true,
        image: require("@/assets/drinks/anh21.png")
      },
      {
        id: 22,
        name: "Trà Xoài",
        price: 45000,
        description: "Trà xoài ngọt ngào, thơm ngon, hấp dẫn.",
        quality: 8,
        sizeOptions: [
          { size: "Nhỏ", additionalPrice: 0 },
          { size: "Vừa", additionalPrice: 6000 },
          { size: "Lớn", additionalPrice: 12000 }
        ],
        toppings: [],
        isFeatured: false,
        image: require("@/assets/drinks/anh22.png")
      },
      {
        id: 23,
        name: "Nước Ép Lê",
        price: 40000,
        description: "Nước ép lê tươi, ngọt mát và bổ dưỡng.",
        quality: 8,
        sizeOptions: [
          { size: "Nhỏ", additionalPrice: 0 },
          { size: "Vừa", additionalPrice: 5000 },
          { size: "Lớn", additionalPrice: 10000 }
        ],
        toppings: [],
        isFeatured: false,
        image: require("@/assets/drinks/anh23.png")
      },
      {
        id: 24,
        name: "Trà Cam Thảo",
        price: 30000,
        description: "Trà cam thảo thanh nhẹ, giúp giải nhiệt.",
        quality: 7,
        sizeOptions: [
          { size: "Nhỏ", additionalPrice: 0 },
          { size: "Vừa", additionalPrice: 5000 },
          { size: "Lớn", additionalPrice: 10000 }
        ],
        toppings: [],
        isFeatured: true,
        image: require("@/assets/drinks/anh24.png")
      },
      {
        id: 25,
        name: "Trà Sen Vàng",
        price: 45000,
        description: "Trà sen vàng thanh tao, thơm mát.",
        quality: 7,
        sizeOptions: [
          { size: "Nhỏ", additionalPrice: 0 },
          { size: "Vừa", additionalPrice: 6000 },
          { size: "Lớn", additionalPrice: 12000 }
        ],
        toppings: [],
        isFeatured: true,
        image: require("@/assets/drinks/anh25.png")
      },
      {
        id: 26,
        name: "Nước Ép Dưa Hấu",
        price: 35000,
        description: "Nước ép dưa hấu tươi, giải khát ngày hè.",
        quality: 8,
        sizeOptions: [
          { size: "Nhỏ", additionalPrice: 0 },
          { size: "Vừa", additionalPrice: 5000 },
          { size: "Lớn", additionalPrice: 10000 }
        ],
        toppings: [],
        isFeatured: false,
        image: require("@/assets/drinks/anh26.png")
      },
      {
        id: 27,
        name: "Trà Vải",
        price: 40000,
        description: "Trà vải thơm ngon, mát lạnh, hấp dẫn.",
        quality: 9,
        sizeOptions: [
          { size: "Nhỏ", additionalPrice: 0 },
          { size: "Vừa", additionalPrice: 6000 },
          { size: "Lớn", additionalPrice: 12000 }
        ],
        toppings: [],
        isFeatured: true,
        image: require("@/assets/drinks/anh27.png")
      },
      {
        id: 28,
        name: "Cà Phê Đen",
        price: 30000,
        description: "Cà phê đen truyền thống, đậm đà hương vị.",
        quality: 3,
        sizeOptions: [
          { size: "Nhỏ", additionalPrice: 0 },
          { size: "Vừa", additionalPrice: 4000 },
          { size: "Lớn", additionalPrice: 8000 }
        ],
        toppings: [],
        isFeatured: true,
        image: require("@/assets/drinks/anh28.png")
      },
      {
        id: 29,
        name: "Trà Gừng",
        price: 35000,
        description: "Trà gừng ấm nóng, tốt cho sức khỏe.",
        quality: 5,
        sizeOptions: [
          { size: "Nhỏ", additionalPrice: 0 },
          { size: "Vừa", additionalPrice: 5000 },
          { size: "Lớn", additionalPrice: 10000 }
        ],
        toppings: [],
        isFeatured: false,
        image: require("@/assets/drinks/anh29.png")
      },
];
export default drinks;