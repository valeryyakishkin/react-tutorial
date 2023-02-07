import React, { Component } from "react";
import NewPost from "./NewPost";
import Title from "./Title";
import Input from "./Input";

const BASE_PATH = "https://hn.algolia.com/api/v1";
const SEARCH_PATH = "/search";
const SEARCH_PARAM = "query=";
const PAGE_HITS = 'hitsPerPage=';

const HITS = [
  {
    value: 10,
    label: 10,
  },
  {
    value: 20,
    label: 20,
  },
  {
    value: 30,
    label: 30,
  },
  {
    value: 40,
    label: 40,
  },
]

class News extends Component {
  state = {
    searchQuery: "",
    result: {},
    hitsPerPage: 20,
  };

  componentDidMount() {
    const { searchQuery, hitsPerPage } = this.state;
    this.fetchData(searchQuery, hitsPerPage);
  }

  fetchData = (searchQuery, hitsPerPage) => {
    fetch(`${BASE_PATH}${SEARCH_PATH}?${SEARCH_PARAM}${searchQuery}&${PAGE_HITS}${hitsPerPage}`)
      .then((res) => res.json())
      .then((result) => this.setNews(result))
      .catch((error) => error);
  };

  handleInputChange = ({ target: { value } }) => {
    this.setState({
      searchQuery: value,
    });
  };

  getSearch = ({ key }) => {
    if (key === "Enter") {
      const { searchQuery, hitsPerPage } = this.state;
      this.fetchData(searchQuery, hitsPerPage);
    }
  };

  setNews = (result) => {
    this.setState({ result });
  };

  handleHitsChange = ({ target: { value } }) => {
    const { searchQuery } = this.state;

    this.setState({
      hitsPerPage: +value,
    }, () => {
      this.fetchData(searchQuery, this.state.hitsPerPage);
    })
  }

  render() {
    const { searchQuery, result, hitsPerPage } = this.state;
    const { hits = [] } = result;

    console.log(result);

    return (
      <div className="wrapper">
        <Title title="Hacker News" />
        {/* <Select options={HITS} handleChange={this.handleHitsChange} value={hitsPerPage} /> */}
        <Input
          onKeyPress={this.getSearch}
          onChange={this.handleInputChange}
          value={searchQuery}
        />
        <ul className="newsList">
          {hits.map(
            ({
              author,
              created_at,
              num_comments,
              objectID,
              title,
              points,
              url,
            }) => (
              <NewPost
                key={objectID}
                author={author}
                created_at={created_at}
                num_comments={num_comments}
                title={title}
                points={points}
                url={url}
              />
            )
          )}
        </ul>
      </div>
    );
  }
}

export default News;
