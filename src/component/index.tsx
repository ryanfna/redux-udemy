import { SVGProps } from 'react'
import styled from 'styled-components'

const CenterAll = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const ZButton = styled.button`
  margin-top: auto;
  width: 100%;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  background-color: #fef2f2;
  border: 1px solid #991b1b;
  color: #991b1b;
  transition: all 0.5s ease-in-out;
  &:hover {
    background-color: #991b1b;
    color: white;
  }
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

function RemoveIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g
        fill="none"
        stroke="currentColor"
        strokeDasharray="22"
        strokeDashoffset="22"
        strokeLinecap="round"
        strokeWidth="2">
        <path d="M19 5L5 19">
          <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.3s" values="22;0"></animate>
        </path>
        <path d="M5 5L19 19">
          <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="22;0"></animate>
        </path>
      </g>
    </svg>
  )
}

function PlusIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4v4Zm1 5q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8Z"></path>
    </svg>
  )
}

function MinusIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2M7 13h10v-2H7"></path>
    </svg>
  )
}

export { CenterAll, ZButton }
export { BrandIcon, ShoppingCart, RemoveIcon, PlusIcon, MinusIcon }
