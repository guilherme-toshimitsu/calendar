import React from 'react';

import { render, fireEvent, wait } from '@testing-library/react';

import Modal, { ModalWrapper, useModal } from '../../';
import Default from '../Default';

describe('<Modal> Modal Component', () => {
  it('render full modal', () => {
    const DefaultModal = () => {
      const { openModal } = useModal();
      const clickOpen = () => {
        pickModal({ modal: 'default' });
        openModal();
      };
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
        <Default />
      </ModalWrapper>
    );

    expect(component.asFragment()).toMatchSnapshot();
  });
});
