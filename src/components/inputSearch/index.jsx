import React from 'react'

export const InputSearch = ({setFilter}) => {
  return (
    <input
    onSubmit={() => setFilter()}
    type="text"
    placeholder="Digitar Pesquisa"
  />
  )
}
