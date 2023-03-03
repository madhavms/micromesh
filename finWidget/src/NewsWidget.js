import React, { useState, useEffect } from "react";
import "./css/DynamicFinancialNewsWidget.css";

const DynamicFinancialNewsWidget = (props) => {
  const [news, setNews] = useState([]);
  const { setWidgetStyle, widgetStyle } = props;

  useEffect(() => {
    if (
      !!window["widget-style"] &&
      typeof setWidgetStyle === "function"
    ) {
      setWidgetStyle(window["widget-style"]);
    }
  }, []);


  const newsList = [
    {
      id: 1,
      title: "Stock Market Hits All-Time High",
      description:
        "The stock market reached a new record high today as investors cheered strong earnings reports and positive economic data.",
      url: "/stock-market-update",
    },
    {
      id: 2,
      title: "Fed Keeps Interest Rates Steady",
      description:
        "The Federal Reserve announced that it will keep interest rates unchanged at its latest meeting, citing steady economic growth and low inflation.",
      url: "/fed-interest-rates",
    },
    // more news items...
  ];

  useEffect(() => {
    const fetchNews = () => {
      const randomIndex = Math.floor(Math.random() * newsList.length);
      const randomNews = newsList[randomIndex];
      setNews([randomNews]);
    };

    const interval = setInterval(fetchNews, 5000);
    fetchNews();

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dynamic-financial-news-widget">
      <div className="news-item" style={{ width: "300px" }}>
        {news.map((item) => (
          <React.Fragment key={item.id}>
            <h3 className="news-item-title">{item.title}</h3>
            <p className="news-item-description">{item.description}</p>
            <a className="news-item-link">
              Read More
            </a>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default DynamicFinancialNewsWidget;
