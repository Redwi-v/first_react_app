import React from 'react';
import { create, act } from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';

describe('profile stauts', () => {
  test('status from props shuld be in the state ', () => {
    const component = create(<ProfileStatus status="hello" />);
    const instants = component.root;
    expect(instants.props.status).toBe('hello');
  });
  test('firts render shuld be width p tag!', () => {
    const component = create(<ProfileStatus status="hello" />);

    const instants = component.root;
    const element = instants.findByType('p');
    expect(element).not.toBeNull();
  });

  test('input shuld be null', () => {
    const component = create(<ProfileStatus />);
    const instants = component.root;

    expect(() => {
      const element = instants.findByType('input');
    }).toThrow();
  });

  test('input shuld be displayed in edit mode of span', () => {
    const component = create(<ProfileStatus status="hello" />);
    const instanst = component.root;

    const text = instanst.findByType('p');
    act(() => {
      text.props.onDoubleClick();
    });
    const input = instanst.findByType('input');
    expect(input.props.value).toBe('hello');
  });

  // test('input', () => {
  //   const component = create(<ProfileStatus status="hello" />);
  //   const instanst = component.root;

  //   const text = instanst.findByType('p');
  //   act(() => {
  //     text.props.onDoubleClick();
  //   });

  //   const input = instanst.findByType('input');
  //   console.log(input.props.value);
  //   expect(input.props.value).toBe('hello');
  // });
});
