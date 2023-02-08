import Link from "next/link";
import { Fragment } from "react";

export const Home = () => (
  <Fragment>
    <li>
      <Link href="/">Home</Link>
    </li>
  </Fragment>
);

export const PagesDasktop = () => (
  <Fragment>
    <li>
      <Link href="/about">About us</Link>
    </li>
  </Fragment>
);
export const PagesMobile = () => (
  <Fragment>
    <li>
      <Link href="/about">About us</Link>
    </li>
  </Fragment>
);
// export const Portfolio = () => (
//   <Fragment>
//     <li>
//       <Link href="/portfolio-grid">Portfolio grid</Link>
//     </li>
//     <li>
//       <Link href="/portfolio-fluid">Portfolio Fluid</Link>
//     </li>
//     <li>
//       <Link href="/portfolio-details">Portfolio details</Link>
//     </li>
//   </Fragment>
// );
// export const Blog = () => (
//   <Fragment>
//     <li>
//       <Link href="/blog-grid">blog Grid</Link>
//     </li>
//     <li>
//       <Link href="/blog-standard">blog Standard</Link>
//     </li>
//     <li>
//       <Link href="/blog-details">blog details</Link>
//     </li>
//   </Fragment>
// );
export const Shop = () => (
  <Fragment>
   
    <li>
      <Link href="/shop-grid">Categpry 1</Link>
    </li>
    <li>
      <Link href="/shop-grid">Categpry 2</Link>
    </li>
    <li className="dropdown">
      <a href="#">Categpry 3</a>
      <ul>
        <li>
          <Link href="">Categpry 3 Chield 1</Link>
        </li>
        <li>
          <Link href="">Categpry 3 Chield 2</Link>
        </li>
      </ul>
      <div className="dropdown-btn">
        <span className="fas fa-chevron-down" />
      </div>
    </li>

    <li>
      <Link href="/shop-grid">Categpry 4</Link>
    </li>
    
  </Fragment>
);
export const Contact = () => (
  <Fragment>
    <li>
      <Link href="/contact">Contact</Link>
    </li>
  </Fragment>
);
