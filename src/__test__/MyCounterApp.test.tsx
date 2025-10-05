import {describe, test, expect} from "vitest"
import { render } from "@testing-library/react";
import GifsExpertApp from "../gifs/GiftsExpertApp";



describe("MyCounterApp", () => {
      test("should match with the snapshot", () => {
            
            const { container } = render(<GifsExpertApp />)
            expect(container).toMatchSnapshot()
      })   
})