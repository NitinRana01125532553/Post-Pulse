import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Navbar from './components/Navbar'
import Store from './components/Store'
import Footer from './components/Footer'

export default function Home() {

  interface items {
    title: string,
    desc: string,
    price: string,
    image: string
  }

  const shirts: items[] = [
    {
      title: "Men's solid pink shirt",
      desc: "Slim-Fit cotton Shirt ",
      price: "999",
      image:
        "data:image/jpeg;base64,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",
    },
    {
      title: "Men's solid red shirt",
      desc: "Slim-Fit cotton shirt",
      price: "999",
      image:
        "data:image/jpeg;base64,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",
    },
    {
      title: "Blue White Linen Shirt",
      desc: "Cotton stipe shirt",
      price: "1200",
      image:
        "https://cottonworld.net/cdn/shop/products/M-SHIRTS-50000-20291-NAVY_6.jpg?v=1667366787",
    },
    {
      title: "Solid Navy blue Shirt",
      desc: "Cotton Full slevees shirt",
      price: "1500",
      image:
        "https://www.beyoung.in/api/cache/catalog/products/new_shirt_upload_21_10_2022/navy_blue_sulphur_twill_shirt_for_men_base_3_11_2022_700x933.jpg",
    },
    {
      title: "Blue Denim Shirt",
      desc: "Slim fit shirt",
      price: "1000",
      image:
        "https://houseofstori.com/cdn/shop/products/CORE-37980-A_1_600x.jpg?v=1684411195",
    },
    {
      title: "Light Blue Cotton Shirt",
      desc: "Slim fit",
      price: "Cotton Slim fit shirt",
      image:
        "https://imagescdn.planetfashion.in/img/app/product/7/764138-8760793.jpg?auto=format&w=494.40000000000003",
    },
    {
      title: "shirt",
      desc: "Black and white small check shirt",
      price: "1299",
      image:
        "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/19718128/2022/9/10/cb6e397d-f700-49b1-8dd6-39ece420012f1662790290573-The-Indian-Garage-Co-Men-Shirts-7451662790290048-1.jpg",
    },
    {
      title: "shirt",
      desc: "Black and Grey check shirt",
      price: "899",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkP1tA5fTQeCTUtKdI9BYTwur5ubTOxXCYWg&usqp=CAU",
    },
  ];
  const shoes: items[] = [
    {
      title: "Nike Running shoes",
      desc: "White Running Shoes",
      price: "5000",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKfnTYyVfqhiTSLvd3Wk8Qe4zFwSw0Aa8iJA&usqp=CAU",
    },
    {
      title: "Nike Running shoes",
      desc: "Nike Blue and white shoes",
      price: "3499",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwY_NAY98UQN08cTZ6mxnHjDXxtk23_9tXUA&usqp=CAU",
    },
    {
      title: "Navy blue shoes",
      desc: "Women running shoes",
      price: "$100",
      image:
        "https://www.jiomart.com/images/product/original/rvrgwpjvsp/bruton-trendy-sports-shoes-for-men-blue-product-images-rvrgwpjvsp-0-202209021256.jpg?im=Resize=(1000,1000)",
    },
    {
      title: "Formal Shoes",
      desc: "Black Formal Shoes",
      price: "1999",
      image:
        "https://media.istockphoto.com/id/172417586/photo/elegant-black-leather-shoes.jpg?s=612x612&w=0&k=20&c=c_tTljwbu2m0AGxwb27NxCgG0Y2Cv-C4v8q6V36RYbw=",
    },
    {
      title: "Nike Blue white sneaker",
      desc: "Nike High TOp sneakers",
      price: "$100",
      image:
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png",
    },
    {
      title: "Black low top sneakers",
      desc: "Sparkx",
      price: "$100",
      image:
        "https://www.jiomart.com/images/product/500x630/rv70b8brkx/axter-black-casual-shoes-for-women-product-images-rv70b8brkx-0-202211080335.jpg",
    },
  ];
  const pants: items[] = [
    {
      title: "Black Formal pant",
      desc: "Desc",
      price: "1299",
      image:
        "https://images.meesho.com/images/products/142474229/8n5iu_512.webp",
    },
    {
      title: "Dark Blue formal pant",
      desc: "Desc",
      price: "1499",
      image:
        "https://contents.mediadecathlon.com/p1859835/8d58e16110f65ec104db80df364956b2/p1859835.jpg",
    },
    {
      title: "Olive Green Trackpants",
      desc: "Desc",
      price: "999",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2022/7/QB/QP/VK/26625163/cargo-pant.jpg",
    },
    {
      title: "Cream Trackpant",
      desc: "Straightfit for men",
      price: "1299",
      image:
        "https://media.wired.com/photos/611c5312798f0e2c853b702f/4:3/w_1375,h_1031,c_limit/Gear-Cargo-Pants-are-Back-1302952122.jpg",
    },
    {
      title: "Cotton Trackpant ",
      desc: "Trackpant for women",
      price: "1999",
      image:
        "https://img.etimg.com/thumb/width-1200,height-900,imgsize-859479,resizemode-75,msid-101912851/top-trending-products/lifestyle/6-best-cargo-pants-for-women-in-india-starting-just-at-rs-579.jpg",
    },
    {
      title: "formal pant",
      desc: "Straightfit formal pant for men",
      price: "1199",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2022/11/VI/PJ/XD/43934135/men-black-formal-pant.jpeg",
    },
  ];
  
  return (
    <div>
      <Navbar />
      <Store shirts={shirts} pants={pants} shoes={shoes}  />
      <Footer />
    </div>
  )
}
