import React, { Component } from "react";
import Searchbar from "./componentns/Searchbar/Searchbar";
import ImageGallery from "./componentns/ImageGallery/ImageGallery";
import Loader from "./componentns/Loader/Loader";
import Button from "./componentns/Button/Button";
import Modal from "./componentns/Modal/Modal";
import pixabay from "./services/pixabay";

import "./App.css";

export default class App extends Component {
  state = {
    articles: [],
    loading: false,
    error: null,
    searchQuery: "",
    page: 1,
    openImg: null,
    isOpenModal: false,
  };
  componentDidMount() {
    this.fetchArticles();
  }
  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQury = this.state.searchQuery;
    if (prevQuery !== nextQury) {
      this.fetchArticles();
    }
  }

  fetchArticles = () => {
    const { searchQuery, page } = this.state;
    this.setState({
      loading: true,
    });
    pixabay
      .fetchArticlesByQuery(searchQuery, page)
      .then((articles) => {
        this.setState((prevState) => ({
          articles: [...prevState.articles, ...articles],
          page: prevState.page + 1,
        }));
      })

      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };
  handleOpenModal = ({ target }) => {
    console.log(target.dataset.largeimg);
    this.setState({ isOpenModal: true, openImg: target.dataset.largeimg });
  };
  handleCloseModal = (e) => {
    if (e === "Escape" || !e.target.src) {
      this.setState({ isOpenModal: false });
    }
  };
  handleLodaModre = () => {
    this.fetchArticles();
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };
  handleSeatchQuery = (query) => {
    this.setState({
      searchQuery: query,
      articles: [],
      page: 1,
    });
  };
  render() {
    const { articles, loading, error, isOpenModal, openImg } = this.state;
    return (
      <div className="body">
        <Searchbar onSubmit={this.handleSeatchQuery} />
        {error && <p>Whoops, something went wrong: {error.message}</p>}

        {articles.length > 0 && (
          <ImageGallery articles={articles} onClick={this.handleOpenModal} />
        )}
        {isOpenModal && <Modal onClick={this.handleCloseModal} src={openImg} />}
        {loading && <Loader />}
        {!this.state.loading && <Button onClick={this.handleLodaModre} />}
      </div>
    );
  }
}
