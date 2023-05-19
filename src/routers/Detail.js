import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

// import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function Detail() {
  const { id } = useParams();
  console.log(id);
  // 여기에 영화를 검색하는 기능을 추가해야 함. 하지만 지금 API에서 해당 기능을 제공하지 않음

  return <h1>Detail</h1>;
}

export default Detail;
