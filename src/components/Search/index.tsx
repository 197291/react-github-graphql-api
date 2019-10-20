import React, { useState } from 'react';
import Downshift from 'downshift';

import { useGetUsers } from 'hooks/useGetUsers';
import { UserFragment } from 'generated/UserFragment';
import SearchItemRow from './SelectItemRow';

import './styles.scss';

const Search: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const options = useGetUsers(inputValue);

  return (
    <div className="SearchSelect">
      <Downshift
        itemToString={(item) => (item ? item.login : '')}
        onInputValueChange={(val) => setInputValue(val)}
      >
        {({
          getInputProps,
          getItemProps,
          isOpen,
          inputValue,
          highlightedIndex,
          selectedItem,
          getMenuProps
        }) => (
          <div className="SearchSelect-wrapper">
            <div>
              <input
                {...getInputProps({
                  placeholder: 'Type login of user'
                })}
                className="SearchSelect-input"
              />
              <ul
                className={`SearchSelect-list ${
                  isOpen && options && options.length > 0 ? 'with-border' : ''
                }`}
                {...getMenuProps()}
              >
                {isOpen && options
                  ? options
                      .filter(
                        (item: UserFragment) =>
                          !inputValue || (item.login && item.login.includes(inputValue))
                      )
                      .map((item, index) => (
                        <SearchItemRow
                          {...getItemProps({
                            key: index,
                            index,
                            className: 'SearchSelect-list-item',
                            item,
                            style: {
                              height: 40,
                              padding: '2px 10px',
                              backgroundColor: highlightedIndex === index ? '#F8F8F8' : '#ffffff',
                              fontWeight: selectedItem === item ? 'bold' : 'normal'
                            }
                          })}
                          login={item.login}
                          avatarUrl={item.avatarUrl}
                        />
                      ))
                  : null}
              </ul>
            </div>
          </div>
        )}
      </Downshift>
    </div>
  );
};

export default Search;
