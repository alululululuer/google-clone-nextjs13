"use client";

import { useState, useEffect } from "react";

const CountryLookup = () => {
  const [country, setCountry] = useState("China");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        setCountry(data.country);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      {isLoading ? (
        <img src="/spinner.svg" alt="Loading..." className="h-6 text-center" />
      ) : (
        country
      )}
    </div>
  );
};
export default CountryLookup;
