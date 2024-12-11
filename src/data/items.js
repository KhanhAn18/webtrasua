let items = [
    {
        id: 1,
        name: "Hồng Trà Chanh",
        image: require("@/assets/menuDrinks/24.png"),
        description: "Trà nồng nàn, chanh tươi mát, thanh nhẹ",
        price: 40,
        quality: 2,
        category: "TraTuoi",
        promotionType: "promotion",
        sizes: [
            { label: 'S', price: 0 },
            { label: 'M', price: 10 },
            { label: 'L', price: 15 },
        ]
    },
    {
        id: 2,
        name: "Hồng Trà Mật Ong",
        image: require("@/assets/menuDrinks/2.png"),
        description: "Hồng Trà truyền thống đậm đà, kết hợp tinh tế",
        price: 45,
        quality: 2,
        category: "TraTuoi",
        promotionType: "promotion",
        sizes: [
            { label: 'S', price: 0 },
            { label: 'M', price: 10 },
            { label: 'L', price: 15 },
        ]
    },
    {
        id: 3,
        name: "Hồng Trà Teaccino",
        image: require("@/assets/menuDrinks/3.png"),
        description: "Kết hợp tinh tế hương thơm béo ngậy của lớp kem sữa",
        price: 50,
        quality: 3,
        category: "TraTuoi",
        promotionType: "promotion",
        sizes: [
            { label: 'S', price: 0 },
            { label: 'M', price: 10 },
            { label: 'L', price: 15 },
        ]
    },
    {
        id: 4,
        name: "Lục Trà Mật Ong",
        image: require("@/assets/menuDrinks/4.png"),
        description: "Được pha chế từ trà xanh hoa lài",
        price: 50,
        quality: 4,
        category: "TraTuoi",
        promotionType: "promotion",
        sizes: [
            { label: 'S', price: 0 },
            { label: 'M', price: 10 },
            { label: 'L', price: 15 },
        ]
    },
    {
        id: 5,
        name: "Socola Teaccino",
        image: require("@/assets/menuDrinks/5.png"),
        description: "Đắng nồng nàn, ngọt ma mị của Socola",
        price: 55,
        quality: 5,
        category: "TraTuoi",
        promotionType: "promotion",
        sizes: [
            { label: 'S', price: 0 },
            { label: 'M', price: 10 },
            { label: 'L', price: 15 },
        ]
    },
    {
        id: 6,
        name: "Sữa Chua Chanh Ổi",
        image: require("@/assets/menuDrinks/6.png"),
        description: "Thức uống độc đáo, mới lạ từ Yakult ",
        price: 60,
        quality: 6,
        category: "TraTuoi",
        promotionType: "promotion",
        sizes: [
            { label: 'S', price: 0 },
            { label: 'M', price: 10 },
            { label: 'L', price: 15 },
        ]
    },
    {
        id: 7,
        name: "Trà Hải Thần",
        image: require("@/assets/menuDrinks/7.png"),
        description: "Hương vị độc đáo khác biệt với các trà khác.",
        price: 40,
        quality: 7,
        category: "TraTuoi",
        promotionType: "promotion",
        sizes: [
            { label: 'S', price: 0 },
            { label: 'M', price: 10 },
            { label: 'L', price: 15 },
        ]
    },
    {
        id: 8,
        name: "Trà Sữa Hải Thần",
        image: require("@/assets/menuDrinks/8.png"),
        description: "Hương dịu nhẹ của mật ong tự nhiên",
        price: 40,
        quality: 8,
        category: "TraTuoi",
        promotionType: "promotion",
        sizes: [
            { label: 'S', price: 0 },
            { label: 'M', price: 10 },
            { label: 'L', price: 15 },
        ]
    },
    {
        id: 9,
        name: "Lục Trà Hoàng Kim",
        image: require("@/assets/menuDrinks/17.png"),
        description: "Mùi thơm thoang thoảng đặc trưng từ Trà Xanh Hoa Lài",
        price: 70,
        quality: 9,
        category: "TraSua",
        promotionType: "noi_bat",
        sizes: [
            { label: 'S', price: 0 },
            { label: 'M', price: 10 },
            { label: 'L', price: 15 },
        ]
    },
    {
        id: 10,
        name: "Trà Sữa Trân Châu",
        image: require("@/assets/menuDrinks/10.png"),
        description: "Sự hòa quyện hấp dẫn của Trân Châu Đen",
        price: 80,
        quality: 10,
        category: "TraSua",
        promotionType: "noi_bat",
        sizes: [
            { label: 'S', price: 0 },
            { label: 'M', price: 10 },
            { label: 'L', price: 15 },
        ]
    },
    {
        id: 11,
        name: "Trà Sữa Thạch Sương Sáo",
        image: require("@/assets/menuDrinks/11.png"),
        description: "Được pha chế từ hồng TraSua truyền thống ",
        price: 75,
        quality: 11,
        category: "TraSua",
        promotionType: "noi_bat",
        sizes: [
            { label: 'S', price: 0 },
            { label: 'M', price: 10 },
            { label: 'L', price: 15 },
        ]
    },
    {
        id: 12,
        name: "Trà Sữa Comebuy",
        image: require("@/assets/menuDrinks/12.png"),
        description: "Thức uống có sẵn Topping Trân Châu Đen, Hạt Khoai dẻo ",
        price: 60,
        quality: 12,
        category: "TraSua",
        promotionType: "noi_bat",
        sizes: [
            { label: 'S', price: 0 },
            { label: 'M', price: 10 },
            { label: 'L', price: 15 },
        ]
    },
    {
        id: 13,
        name: "Trà Sữa Oolong Tanbei",
        image: require("@/assets/menuDrinks/13.png"),
        description: "Kết tinh của vị thơm đặc trưng từ những lá trà Oolong",
        price: 85,
        quality: 13,
        category: "TraSua", 
        promotionType: "noi_bat",
        sizes: [
            { label: 'S', price: 0 },
            { label: 'M', price: 10 },
            { label: 'L', price: 15 },
        ]
    },
    {
        id: 14,
        name: "Trà Sữa Hoa Hồng Pu’re",
        image: require("@/assets/menuDrinks/21.png"),
        description: "Ẩn chứa sự lãng mạn qua vị ngọt ngào",
        price: 75,
        quality: 14,
        category: "TraSua",
        promotionType: "best_seller",
        sizes: [
            { label: 'S', price: 0 },
            { label: 'M', price: 10 },
            { label: 'L', price: 15 },
        ]
    },
    {
        id: 15,
        name: "Trà Sữa Matcha",
        image: require("@/assets/menuDrinks/22.png"),
        description: "Matcha tươi mát đặc trưng, kết hợp cùng vị béo của sữa ",
        price: 65,
        quality: 15,
        category: "TraSua",
        promotionType: "best_seller",
        sizes: [
            { label: 'S', price: 0 },
            { label: 'M', price: 10 },
            { label: 'L', price: 15 },
        ]
    },
    {
        id: 16,
        name: "Trà Sữa Hoa Quế Tứ Quý Xuân",
        image: require("@/assets/menuDrinks/16.png"),
        description: "Hoa Quế Tứ Quý Xuân hòa huyện với những bông hoa quế li ti",
        price: 42,
        quality: 16,
        category: "TraTuoi",
        promotionType: "best_seller",
        sizes: [
            { label: 'S', price: 0 },
            { label: 'M', price: 10 },
            { label: 'L', price: 15 },
        ]
    },
    {
        id: 17,
        name: "Hoa Hồng Tiên tử",
        image: require("@/assets/menuDrinks/27.png"),
        description: "Kích thích vị giác bằng sự kết hợp thạch Ai Yu và Hạt É",
        price: 37,
        quality: 16,
        category: "TraSua",
        promotionType: "best_seller",
        sizes: [
            { label: 'S', price: 0 },
            { label: 'M', price: 10 },
            { label: 'L', price: 15 },
        ]
    },
    {
        id: 18,
        name: "Chọn Đá",
        image: require("@/assets/menuDrinks/28.png"),
        description: "Kích thích vị giác bằng sự kết hợp thạch Ai Yu và Hạt É",
        price: 5,
        quality: 16,
        category: "",
        sizes: [
            { label: 'S', price: 0 },
            { label: 'M', price: 10 },
            { label: 'L', price: 15 },
        ]
    },
    {
        id: 19,
        name: "Chọn Đường",
        image: require("@/assets/menuDrinks/29.png"),
        description: "Kích thích vị giác bằng sự kết hợp thạch Ai Yu và Hạt É",
        price: 55,
        quality: 16,
        category: "",
        sizes: [
            { label: 'S', price: 0 },
            { label: 'M', price: 10 },
            { label: 'L', price: 15 },
        ]
    },
    {
        id: 20,
        name: "Trà Matcha Latte",
        image: require("@/assets/menuDrinks/18.png"),
        description: "Kích thích vị giác bằng sự kết hợp thạch Ai Yu và Hạt É",
        price: 28,
        quality: 16,
        category: "TraTuoi",
        sizes: [
            { label: 'S', price: 0 },
            { label: 'M', price: 10 },
            { label: 'L', price: 15 },
        ]
    },
    {
        id: 21,
        name: "Hồng Trà Teaccino",
        image: require("@/assets/menuDrinks/16.png"),
        description: "Kết hợp tinh tế giữa hương thơm và chút vị béo ngậy",
        price: 30,
        quality: 16,
        category: "TraSua",
        sizes: [
            { label: 'S', price: 0 },
            { label: 'M', price: 10 },
            { label: 'L', price: 15 },
        ]
    },
    {
        id: 22,
        name: "Trà Kem Trắng Tuyết",
        image: require("@/assets/menuDrinks/25.png"),
        description: "Kết hợp tinh tế giữa hương thơm và chút vị béo ngậy",
        price: 30,
        quality: 16,
        category: "TraSua",
        sizes: [
            { label: 'S', price: 0 },
            { label: 'M', price: 10 },
            { label: 'L', price: 15 },
        ]
    },
    {
        id: 23,
        name: "Trà Sữa Than Cà",
        image: require("@/assets/menuDrinks/1.png"),
        description: "Kết hợp mùi vị cà phê Đà Lạt ngon tuyệt",
        price: 30,
        quality: 16,
        category: "TraTuoi",
        sizes: [
            { label: 'S', price: 0 },
            { label: 'M', price: 10 },
            { label: 'L', price: 15 },
        ]
    },
    {
        id: 24,
        name: "Trà sữa Nho Cam",
        image: require("@/assets/menuDrinks/24.png"),
        description: "Là tinh túy của nho cam đất trời",
        price: 30,
        quality: 10,
        category: "TraSua",
        sizes: [
            { label: 'S', price: 0 },
            { label: 'M', price: 10 },
            { label: 'L', price: 15 },
        ]
    },
    {
        id: 25,
        name: "Trà Chanh Thanh Trúc",
        image: require("@/assets/menuDrinks/1.png"),
        description: "Hương chanh thanh vị mát lành",
        price: 30,
        quality: 16,
        category: "TraSua",
        sizes: [
            { label: 'S', price: 0 },
            { label: 'M', price: 10 },
            { label: 'L', price: 15 },
        ]
    },
    {
        id: 26,
        name: "Trà Kem Trắng",
        image: require("@/assets/menuDrinks/19.png"),
        description: "Ngon tuyệt hảo",
        price: 30,
        quality: 16,
        category: "TraTuoi",
        sizes: [
            { label: 'S', price: 0 },
            { label: 'M', price: 10 },
            { label: 'L', price: 18 },
        ]
    },
  ];
  
  export default items;