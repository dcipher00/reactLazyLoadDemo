import React, { useEffect, useState } from "react";
import { getData } from "../../Apis/Api";
import { Data } from "../../components/Data";
import Loader from "react-loader-spinner";
import "./Lists.css";
import Footer from "../FooterContainer/Footer";

export const Lists = () => {
  const [loading, setLoading] = useState(false);
  const [footerloading, setFooterloading] = useState(false);
  const [newCount, setNewCount] = useState(10);
  const [data, setData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      getData().then((text) => setData(text));
      setLoading(true);
    }, 3000);
  }, []);

  const loadMore = () => {
    setFooterloading(true);
    setTimeout(() => {
      if (newCount < data.length) setNewCount((prevCount) => prevCount + 10);
      else alert("No more data available");
      setFooterloading(false);
    }, 3000);
  };

  return !loading ? (
    <div className="loader">
      <Loader type="ThreeDots" color="#00BFFF" height={160} width={160} />
    </div>
  ) : (
    <>
      <div className="load-data">
        {data.slice(0, newCount).map((data, index) => (
          <Data key={index} data={data} />
        ))}
      </div>
      <Footer
        newCount={newCount}
        loadMore={loadMore}
        footerloading={footerloading}
      />
    </>
  );
};
