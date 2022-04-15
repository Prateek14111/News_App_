import React, { useState, useEffect } from "react";
import { Card, Button } from "antd";
import axios from "axios";
import "./App.css";

const { Meta } = Card;

// npx create-react-app appname
// npm i antd
// npm i axios

function App() {
  const [news, setNews] = useState([]);
  const loadNews = async () => {
    const response = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=122516e9656a48ea87a5a61fd52090f7"
    );
    setNews(response.data.articles);
  };
  useEffect(() => {

    loadNews();
  }, []);

  console.log("news", news);

  return (
    <div className="App">
          
      {news &&
        news.map((item, index) => {
          return (
            <Card
              key={index}
              hoverable
              style={{ width: "50%" }}
              cover={<img alt="image" src={item.urlToImage} style={{ width: "50%",height:"50%" }} />}
            >
              <Meta title={item.title} description={item.content} />
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <Button type="primary" style={{ marginTop: "10px" }}>
                  Read More
                </Button>
              </a>
            </Card>
          );
        })}
    </div>
  );
}

export default App;