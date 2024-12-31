"use client";

import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import CategoryList from "./_components/CategoryList";
import { getCategory, getAllBusiness } from "./_services/GlobalApi";
import BusinessList from "./_components/BusinessList";

const page = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [businessList, setBusinessList] = useState([]);

  useEffect(() => {
    getCategoryList();
    getBusiness();
  }, []);

  const getCategoryList = () => {
    getCategory().then((res) => {
      console.log(res.categories);
      setCategoryList(res.categories);
    });
  };

  const getBusiness = () => {
    getAllBusiness().then((res) => {
      console.log(res.businessLists);
      setBusinessList(res.businessLists);
    });
  };

  return (
    <div>
      <Hero />
      <CategoryList categoryList={categoryList} />
      <BusinessList businessList={businessList} title={"Popular Business"} />
    </div>
  );
};

export default page;
