import { useRouter } from 'next/router';
import React from 'react'

export interface ParamsPageProps { }


const ParamsPageProps = (props: ParamsPageProps) => {
  const router = useRouter();
  return (
    <div>
        <h1>Params Page</h1>
        <p>Query: {JSON.stringify(router.query)}</p>
    </div>
  )
}

export default ParamsPageProps