import React, { useState } from "react";
import PropTypes from "prop-types";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = (props) => {
  //const categories = ["jujutsu", "shingeki", "initial d"];
  const [categories, setCategories] = useState(["jujutsu kaisen"]);

  return (
    <div>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr></hr>

      <ol>
        {categories.map((category) => {
          return <GifGrid category={category} key={category} />;
        })}
      </ol>
    </div>
  );
};

GifExpertApp.propTypes = {};

export default GifExpertApp;
