import { cleanup } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-test-renderer';
import useFormInput from './useFormInput';

afterEach(cleanup);

describe('useFormInput tests', () => {
  it('should set initial value', async () => {
    const initialValue = 'initial value';
    const { result } = renderHook(() => useFormInput(initialValue));
    expect(result.current.value).toEqual(initialValue);
  });

  it('should update value onChange', async () => {
    const { result } = renderHook(() => useFormInput());

    const newValue = 'new value';
    act(() => {
      result.current.onChange({ target: { value: newValue } });
    });
    expect(result.current.value).toEqual(newValue);
  });
});
