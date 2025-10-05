import {describe, test, expect} from "vitest"
import { render, screen } from "@testing-library/react";
import { CustomHeader } from "./CustomHeader";


describe( 'CustomHeader', () => {

    const title = 'mi titulo'

    test( 'should render the title correctly', () => {
        render( <CustomHeader title={title} /> )
        expect(screen.getByText(title)).toBeDefined()
    } )

    test( 'should render with description when provided', () => {
        const description = 'mi descripcion'
        render( <CustomHeader title={title} description={description}/> )
        
        expect( screen.getByText(description) ).toBeDefined()
        expect( screen.getByRole('paragraph') ).toBeDefined()
        expect( screen.getByRole('paragraph').textContent ).toBe(description)
    })

    test( 'should not render description when not provided', () => {
        const { container } = render( <CustomHeader title={title} /> )

        const divElement = container.querySelector('.content-center')
        const h1 = divElement?.querySelector('h1')
        const p = divElement?.querySelector('p')

        expect(h1?.textContent).toBe(title)
        expect(p).toBeNull()
    })
})