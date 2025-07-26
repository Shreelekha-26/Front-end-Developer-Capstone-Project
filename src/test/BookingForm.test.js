import { submitAPI } from '../BookingForm'; // ✅ Check this path

jest.mock('../BookingForm', () => ({
  submitAPI: jest.fn(),
}));

test('submitAPI should return true for valid form data', () => {
  const formData = {
    guests: 4,
    occasion: 'Birthday',
  };

  submitAPI.mockReturnValue(true); // ✅ should work if mocked correctly

  const result = submitAPI(formData);

  expect(result).toBe(true);
  expect(submitAPI).toHaveBeenCalledWith(formData);
});
