const initialState = [
  {
    id: '1',
    title: 'Product 1',
    price: 800,
    basketCount: '0',
    img: 'https://images.ua.prom.st/1049999484_w640_h640_yaponskaya-katana-samuraj.jpg'
  },
  {
    id: '2',
    title: 'Product 2',
    price: 600,
    basketCount: '0',
    img: 'https://cdn.shazoo.ru/404179_JKlMGWKE85_witcher_sword_16.jpg'
  },
  {
    id: '3',
    title: 'Product 3',
    price: 120,
    basketCount: '0',
    img: 'https://ae01.alicdn.com/kf/H9909628b79e943689b19171be00fd1abe/New-Lightsaber-Jedi-Sword-LED-Light-Saber-Force-FX-Heavy-Dueling-Rechargeable-Loud-Sound-High-with.jpg'
  }
];

export default function productsReducer(state = initialState) {
  return state;
}
