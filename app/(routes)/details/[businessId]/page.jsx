"use client";

import { getBusinessById } from "@/app/_services/GlobalApi";
import { signIn, useSession } from "next-auth/react";
import React, { use, useEffect, useState } from "react";
import BusinessInfo from "./_components/BusinessInfo";
import BusinessDescription from "./_components/BusinessDescription";
import BusinessSuggestion from "./_components/BusinessSuggestion";

const BusinessDetail = ({ params }) => {
  const { data, status } = useSession();
  const [business, setBusiness] = useState([]);
  const unparams = use(params);

  useEffect(() => {
    checkUserAuth();
  });

  useEffect(() => {
    params && getBusiness();
  }, [params]);

  const checkUserAuth = () => {
    if (status === "loading") {
      return <p>Loading...</p>;
    }

    if (status === "unauthenticated") {
      signIn("descope");
    }
  };

  const getBusiness = () => {
    getBusinessById(unparams.businessId).then((resp) => {
      console.log(resp?.businessList);
      setBusiness(resp?.businessList);
    });
  };

  return (
    status === "authenticated" &&
    business && (
      <div className="py-8 md:py-20 px-10 md:px-36">
        <BusinessInfo business={business} />
        <div className="grid grid-cols-3 mt-16">
          <div className="col-span-4 md:col-span-2 order-last md:order-first">
            <BusinessDescription business={business} />
          </div>
          <div>
            <BusinessSuggestion business={business} />
          </div>
        </div>
      </div>
    )
  );
};

export default BusinessDetail;
