import React, { useState } from "react";
import "./index.css";
import Fuse from "fuse.js";
import Card from "@bit/nsebhastian.react_fusejs.card";
import SearchBar from "@bit/nsebhastian.react_fusejs.search-bar";
import { useDispatch, useSelector } from 'react-redux';

function MySearch() {

  const { products } = useSelector(state => state.productsReducer);
  // const [data, setData] = useState(products);

  const  { search }  = useSelector(state => state.searchReducer);

  const searchData = (pattern) => {
    if (!pattern) {
      setData(products);
      return;
    }

    const fuse = new Fuse(data, {
      keys: ["name", "gender"],
    });

    const result = fuse.search(pattern);
    if (!result.length) {
      setData([]);
    } else {
      result.forEach(({item}) => {
        matches.push(item);
      });
      setData(matches);
    }
  };

  return (
    <div>
      <h1 className="Title">My Favorite books</h1>
      <SearchBar
        placeholder="Search"
        onChange={(e) => searchData(e.target.value)}
       />

      <div className="Container">
        {data.map((item) => (
          <Card {...item} key={item.title} />
        ))}
      </div>
    </div>
  );
}

export default App;
