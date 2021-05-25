import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'
import Header from "./Header";

describe('Header component', () => {
    afterEach(() => {    
      jest.clearAllMocks();
    });
    it('rendering ability', () => {
        // Arrange
        const { getByText } = render(<Header />);
        getByText('Pizza Party Plaza');
        const button = getByText("Logout");

        // Act
        // fireEvent.click(button);
        userEvent.click(button);
        screen.logTestingPlaygroundURL()
        // Assert
        // expect(button.textContent).toMatch("Login");
        expect(button).toHaveTextContent("Login");
    })
    it ('the ability to fetch a name', async () => {
        const spy = jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve({name: "steve"})
        })
      );

        const { getByTestId } = render(<Header />);


        const p = getByTestId("name");
        await waitFor(() => expect(p).toHaveTextContent("welcome steve"))
        expect(spy).toHaveBeenCalled();
        spy.mockRestore()
        // expect(p).toHaveTextContent("welcome steve")
    })
    test("header renders properly", () => {
        const {asFragment} = render(<Header special="Turnip Pizza" />);
        
        const renderedHtml = asFragment();
      
        expect(renderedHtml).toMatchSnapshot();
      });
})