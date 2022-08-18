import React from 'react'
import UserItem from "./UserItem/UserItem"
import ProductItem from "./ProductItem/ProductItem"
import CategoryItem from "./CategoryItem/CategoryItem"

const LookingAtUser = () => {
    
    const users = [
        {
          name: "Zack",
          email: "ahmad@gmail.com",
          passwordHash: "#1234",
          phone: "0123456789",
          isAdmin: true,
          street: "Jalan Sungai Pusu",
          apartment: "Hebat",
          zip: 89909,
          city: "Gombak",
          country: "Malaysia",
        },
        {
          name: "Yow",
          email: "kuwe@gmail.com",
          passwordHash: "#2345",
          phone: "0112223456",
          isAdmin: false,
          street: "Sesame Street",
          apartment: "Sesame",
          zip: 10098,
          city: "London",
          country: "UK",
        },
        {
          name: "Busuk",
          email: "zakuwe@gmail.com",
          passwordHash: "#3456",
          phone: "0134564545",
          isAdmin: false,
          street: "Jalan Hj Termizi",
          apartment: "Nub",
          zip: 30903,
          city: "Manchester",
          country: "Jamaica",
        }];

    const products = [
        {
          name: "iPhone 14 Pro",
          description: "smartphone",
          richDescription: "Apple smartphone",
          image: "apple-iphone.com",
          images: "iphone-apple.com",
          brand: "Apple",
          price: 4499,
          category: "electronics",
          countInStock: 99,
          rating: 4.5,
          numReviews: 396,
          isFeatured: false,
          dateCreated: "1/8/2022",
        },
        {
          name: "MacBook Pro",
          description: "laptop",
          richDescription: "Apple laptop",
          image: "apple-macbook.com",
          images: "macbook-apple.com",
          brand: "Apple",
          price: 5999,
          category: "Electronics",
          countInStock: 67,
          rating: 4.4,
          numReviews: 295,
          isFeatured: true,
          dateCreated: "10/8/2022",
        }];

    const categories = [
        {
            name: "iPhone 14 Pro",
            icon: "apple",
            colour: "black",
        }]
    
    const userSorted = users.sort((a,b) => a.name.localeCompare(b.name));
    const userFiltered = users.filter(item => item.name == "Kuwe");
    const userSumOfZip = users.reduce((a, b, i) => {
        return a + b.zip
    }, 0);

    return (
        <div>
            {users.map((item) => {
                return <UserItem user = {item}/>;
            })}
            <br></br>
            {/* {userSorted.map((item) => {
                return <UserItem user = {item}/>;
            })}
            <br></br> */}
            {userFiltered.map((item) => {
                return <UserItem user = {item}/>;
            })}
            <br></br>
            Sum of Zip = {userSumOfZip}
            <br></br>
            {products.map((item) => {
                return <ProductItem product = {item}/>;
            })}
            <br></br>
            {categories.map((item) => {
                return <CategoryItem category = {item}/>;
            })}
        </div>    
    );
    
};

export default LookingAtUser;