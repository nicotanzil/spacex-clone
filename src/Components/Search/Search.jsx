import React, { useEffect, useState } from "react";
import SearchResult from "./SearchResult";
import styles from "./Search.module.scss";

const Search = (props) => {
  const [keyword, setKeyword] = useState("");
  const [inputKeyword, setInputKeyword] = useState("");

  const onSearchInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setKeyword(event.target.value);
    } else {
      setKeyword("");
    }
  };

  useEffect(() => {
    const identifier = setTimeout(() => {
      if (keyword.trim().length > 0) {
        setInputKeyword(keyword);
      } else {
        setInputKeyword("");
      }
    }, 500);
    return () => {
      clearTimeout(identifier); // cleanup
    };
  }, [keyword]);

  return (
    <div className={styles.search}>
      <div className={styles.form__group}>
        <input
          type="text"
          className={styles.form__field}
          placeholder="search launches by mission name"
          name="search"
          id="search"
          required
          onChange={onSearchInputChangeHandler}
        />
        <label htmlFor="search" className={styles.form__label}>
          search launches by mission
        </label>
      </div>
      <SearchResult keyword={inputKeyword} />
    </div>
  );
};

export default Search;
