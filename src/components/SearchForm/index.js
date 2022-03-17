import React from 'react';
import { Form, InputGroup, Input } from 'rsuite';
import SearchIcon from '@rsuite/icons/Search';

export const SearchForm = ({value, handleInputChange, handleFormSubmit}) => {
  return (
    <Form onSubmit={handleFormSubmit}>
      <InputGroup>
        <Input smooth="true" spy="true" value={ value? value : "" } type="text" onChange={handleInputChange} placeholder="Search"/>
        <InputGroup.Button name="true" smooth="true" type="submit">
          <SearchIcon />
        </InputGroup.Button>
      </InputGroup>
    </Form>
  )
}
