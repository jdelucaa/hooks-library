import axiosMock from 'axios';
import { cleanup } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import useAxiosGet from './useAxiosGet';

afterEach(cleanup);

const initialValues = { data: '', isLoading: true, isError: false };

describe('useAxiosGet tests', () => {
  it('should return async data', async () => {
    axiosMock.get.mockReturnValue({
      data: 'any data'
    });

    const { result, waitForNextUpdate } = renderHook(() => useAxiosGet('url'));
    expect(result.current[0]).toStrictEqual(initialValues);

    await waitForNextUpdate();

    expect(result.current[0]).toStrictEqual({
      ...initialValues,
      data: 'any data',
      isLoading: false
    });
  });

  it('should return isError: true when promise is rejected', async () => {
    axiosMock.get.mockImplementation(() => Promise.reject());
    const { result, waitForNextUpdate } = renderHook(() => useAxiosGet('url'));
    expect(result.current[0]).toStrictEqual(initialValues);

    await waitForNextUpdate();

    expect(result.current[0]).toStrictEqual({
      ...initialValues,
      isError: true,
      isLoading: false
    });
  });
});
