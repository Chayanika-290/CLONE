export const personalizationData = {
  title: "boAt Personalization",
  description: "Make your boAt products uniquely yours with custom engravings and colors.",
  products: [
    {
      id: 'p_1',
      name: 'boAt Airdopes 161',
      description: 'Wireless Earbuds with 40 Hours Playback, ASAP™ Charge, IWP Technology, and ENx™ Technology',
      price: 899,
      originalPrice: 2490,
      discount: '64% off',
      category: 'True Wireless Earbuds',
      colors: [
        {
          name: 'Midnight Black',
          images: [
            '/Personalization/p1.webp',
            '/Personalization/p2.webp',
            '/Personalization/p3.webp',
            '/Personalization/p4.webp',
            '/Personalization/p5.webp',
            '/Personalization/p6.webp',
            '/Personalization/p8.webp',
            '/Personalization/p9.webp'
                ]
        },
        {
          name: 'Sea Green',
          images: [
          '/Personalization/p10.webp',
          '/Personalization/p11.webp',
          '/Personalization/p12.webp',
          '/Personalization/p13.webp',
          '/Personalization/p14.webp',
          '/Personalization/p15.webp',
          '/Personalization/p16.webp',
          '/Personalization/p17.webp' 
          ]
        },
        {
          name: 'Caramel Brown',
          images: [
            '/Personalization/p18.webp',
            '/Personalization/p19.webp',
            '/Personalization/p20.webp',
            '/Personalization/p21.webp',
            '/Personalization/p22.webp',
            '/Personalization/p23.webp',
            '/Personalization/p24.webp',
            '/Personalization/p25.webp',
          ]
        }
      ],
      personalizationOptions: {
        maxCharacters: 20,
        fonts: ['Arial', 'Helvetica', 'Times New Roman'],
        positions: ['Left Earbud', 'Right Earbud', 'Case']
      },
      specifications: {
        'Playback': '40 Hours Total',
        'Driver Size': '10mm',
        'IPX Rating': 'IPX5'
      }
    }
    // Add more products as needed
  ]
};
