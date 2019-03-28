import React, { useState } from 'react';
import classNames from 'classnames';

import { Search } from '../../assets';
import './SearchBar.scss';

const SearchBar = () => {
  const [ isOpen, settingBar ] = useState(false)
  const [ searchContents, setSearchContents ] = useState('')
  let inputRef = null;
  const inputFocus = () => {
    inputRef.focus();
  }
  return (
    <form 
      className={
        classNames(
          'Navi__wrapper__search',
          {
            'Navi__wrapper__search--focus': isOpen
          }
        )
      }
      onSubmit={(e) => {e.preventDefault()}}
      onMouseOver={() => { settingBar(true); inputFocus() }}
    >
      <input
        type="text"
        ref={(input) => inputRef = input}
        onFocus={() => settingBar(true)}
        onBlur={() => settingBar(false)}
        onChange={(e) => setSearchContents(e.target.value)}
        className={
          classNames(
            'Navi__wrapper__search__input',
            {
              'Navi__wrapper__search__input--close': !isOpen
            }
          )
        }
        value={searchContents}
      />
      <div
        className={
          classNames(
            'Navi__wrapper__search__icon',
            {
              'Navi__wrapper__search__icon--focus': isOpen
            }
          )
        }>
        <Search width="20px"/>
      </div>
    </form>
  )
}

export default SearchBar;