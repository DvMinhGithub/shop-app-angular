export const MENU_USER = [
    { label: '', link: '' },

    { label: 'Giới thiệu', link: 'introduce' },
    {
        label: 'Màu sắc',
        link: 'color',
        children: [
            { label: 'Công nghệ pha màu', link: 'color/a' },
            { label: 'Phong thủy', link: 'color/b' },
            { label: 'Cảm hứng màu sắc', link: 'color/c' },
            { label: 'Tư vấn trang trí', link: 'color/c' },
        ],
    },
    {
        label: 'Sản phẩm',
        link: 'product',
        children: [
            { label: 'Bột trét', link: '/product/a' },
            { label: 'Sơn lót kháng kiềm', link: '/product/b' },
            { label: 'Sơn chống thấm đa năng', link: '/product/c' },
            { label: 'Sơn ngoại thất', link: '/product/a' },
            { label: 'Sơn nội thất', link: '/product/b' },
            { label: 'Sơn siêu bóng', link: '/product/c' },
        ],
    },
    { label: 'Mẫu nhà đẹp', link: 'house-designs' },
    { label: 'Khách hàng', link: 'customer' },
    {
        label: 'Tin tức',
        link: 'news',
        children: [
            { label: 'Thông báo', link: '/news/a' },
            { label: 'Tuyển dụng', link: '/news/b' },
            { label: 'Hoạt động', link: '/news/c' },
        ],
    },
    { label: 'Liên Hệ', link: 'contact' },
]