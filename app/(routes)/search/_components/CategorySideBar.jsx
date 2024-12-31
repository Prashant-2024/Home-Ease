"use client";

import { getCategory } from "@/app/_services/GlobalApi";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const CategorySideBar = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const params = usePathname();
  const category = useEffect(() => {
    // console.log(params);
    getCategoryList();
  }, []);

  useEffect(() => {
    setSelectedCategory(params.split("/")[2]);
  }, [params]);

  const getCategoryList = () => {
    getCategory().then((res) => {
      // console.log(res.categories);
      setCategoryList(res.categories);
    });
  };

  return (
    <div>
      <h2 className="font-bold mb-3 text-lg text-primary">Categories</h2>
      <div>
        {categoryList.map((category, index) => (
          <Link
            href={`/search/${category.name}`}
            key={index}
            className={`flex gap-2 p-3 border rounded-lg mb-3 md:mr-10 items-center cursor-pointer hover:bg-purple-50 hover:text-primary hover:border-primary hover:shadow-md ${
              selectedCategory == category.name &&
              `border-primary text-primary shadow-md bg-purple-50`
            }`}
          >
            <Image
              src={category.icon.url}
              alt="icon"
              width={30}
              height={40}
              style={{ width: "auto", height: "auto" }}
            />
            <h2>{category.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategorySideBar;
