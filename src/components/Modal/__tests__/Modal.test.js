import React from 'react';

import { render, fireEvent, wait } from '@testing-library/react';

import Modal, { ModalWrapper, useModal } from '../';

describe('<Modal> Modal Component', () => {
  it('render full modal', () => {
    const Teste = () => {
      const { openModal } = useModal();
      const clickOpen = () => openModal();
      return (
        <div>
          <button data-testid="button-test-modal" onClick={clickOpen}>
            "aqui"
          </button>
        </div>
      );
    };

    const component = render(
      <ModalWrapper>
        <Teste />
      </ModalWrapper>
    );

    expect(component.asFragment()).toMatchSnapshot();
  });
});
