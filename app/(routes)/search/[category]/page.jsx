"use client";

import BusinessList from "@/app/_components/BusinessList";
import { getBussinessByCategory } from "@/app/_services/GlobalApi";
import React, { use, useEffect, useState } from "react";

const BussinessByCategory = ({ params }) => {
  const unparams = use(params);

  const [businessList, setBusinessList] = useState([]);

  useEffect(() => {
    // console.log(params);
    params && getBusinessList();
  }, [params]);

  const getBusinessList = () => {
    getBussinessByCategory(unparams.category).then((resp) => {
      // console.log(resp?.businessLists);
      setBusinessList(resp?.businessLists);
    });
  };

  return (
    <div>
      <BusinessList title={unparams.category} businessList={businessList} />
    </div>
  );
};

export default BussinessByCategory;
