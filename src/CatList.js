// write your CatList component here
import React from "react";

const CatList = (props) => {
  const cats = props.catPics.map((cat) => (
    <img alt={cat.id} key={cat.id} src={cat.url} />
  ));

  return <div>{cats}</div>;
};

export default CatList;
