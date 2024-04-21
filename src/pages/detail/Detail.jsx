/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom"

const Detail = () => {
  const { params } = useParams()


  return (
    <>
      <div>Detail</div>
      <h1>{params}</h1>
    </>
  )
}

export default Detail