import { SVGProps } from 'react'
import styled from 'styled-components'

const CenterAll = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

function BrandIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1.28em" height="1em" viewBox="0 0 256 200" {...props}>
      <path
        fill="#D33C44"
        fillRule="evenodd"
        d="M0 119.883c0 22.056 57.294 39.958 127.98 39.958v39.942C57.294 199.783 0 181.897 0 159.841Zm256 0v39.95c0 9.417-10.47 18.056-27.902 24.89l-100.126-24.89v-39.95l100.126 24.882c17.433-6.826 27.91-15.465 27.902-24.882ZM127.98 0C198.674 0 256 17.918 256 39.958v39.983c0 9.384-10.47 18.056-27.894 24.857L127.98 79.941v39.942C57.294 119.883 0 101.989 0 79.94V39.958C0 17.918 57.294 0 127.98 0Z"></path>
    </svg>
  )
}

function ShoppingCart(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2zM1 2v2h2l3.6 7.59l-1.35 2.45c-.16.28-.25.61-.25.96c0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12l.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 20 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2z"></path>
    </svg>
  )
}

export { CenterAll }
export { BrandIcon, ShoppingCart }
