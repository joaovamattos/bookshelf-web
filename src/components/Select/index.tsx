import React, { Dispatch, SetStateAction } from 'react';
import SelectInput from "react-select";
import { useTheme } from '../../hooks/useTheme';

interface BookList {
  label: String;
  value: String;
}

interface SelectProps {
  bookList: BookList;
  setBookList: Dispatch<SetStateAction<BookList>>;
}

function Select({ bookList, setBookList }: SelectProps) {
  const { theme } = useTheme();

  const options = [
    { value: "wantToRead", label: "Quero ler" },
    { value: "reading", label: "Estou lendo" },
    { value: "read", label: "Lidos" },
  ]

  const customStyles = {
    menuList: (provided) => ({
      ...provided,
      border: 0,
      fontSize: "0.875rem",
      fontWeight: "600",
      background: theme.colors.background,
      color: theme.colors.primary,
    }),
    control: () => ({
      width: "100%",
      display: "flex",
      alignItems: 'center',
      background: theme.colors.background,
      height: "3rem",
      padding: "0 0.5rem",
      border: `2px solid ${theme.colors.primary}`,
      borderRadius: "0.25rem",
      boxShadow: "none",
      fontSize: "0.875rem",
      fontWeight: "700",
    }),
    singleValue: (provided, state) => {
      const color = theme.colors.primary;

      return { ...provided, state, color };
    }
  };


  return (
    <SelectInput
      options={options}
      styles={customStyles}
      placeholder="Selecione a dificuldade do seu quiz"
      value={bookList}
      onChange={(option) => setBookList(option)}
    />
  )
}

export default Select;