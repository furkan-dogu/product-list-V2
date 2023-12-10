import { useState } from "react";
import { Container, Form, Row } from "react-bootstrap";
import ProductCard from "./ProductCard";
import "./Products.scss";
import { products, categories } from "../../helper/data";
import { Header } from "../header/Header";

const ProductsList = () => {

  const [newArr, setNewArr] = useState (products)
  const [btnActive, setBtnActive] = useState("all")

  const handleCategory = (e) => {
    if(e.target.textContent.toLocaleLowerCase() === "all") {
      setNewArr(products)
    } else {
      setNewArr(products.filter((item) => (e.target.textContent.toLocaleLowerCase() === item.category.toLocaleLowerCase())))
    }

    setBtnActive(e.target.textContent.toLocaleLowerCase() === "all" ? "all" : e.target.textContent.toLocaleLowerCase())
  }

  const handleSearch = (e) => {
    const searchTerm = e.target.value.trim().toLowerCase();
    const filteredProducts = newArr.filter(
      (item) => item.title.toLowerCase().includes(searchTerm)
    );
    setNewArr(filteredProducts);
  };



  return (
    <>
      <Header categories={categories} handleCategory={handleCategory} btnActive={btnActive} />
      <Form.Control
        placeholder="Search Product..."
        type="search"
        className="w-50 m-auto"
        onChange={handleSearch}
      />
      <Container className="product-list rounded-4 my-4 p-3">
        <Row className="g-3 justify-content-center">
          {newArr.map((product) => (
            <ProductCard product={product} key={product.id}/>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ProductsList;
