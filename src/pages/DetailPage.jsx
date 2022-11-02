import { React } from 'react';
import { useLocation } from 'react-router-dom';

function DetailPage() {
  const location = useLocation();
  const carInfo = location.state.carInfo;
  console.log(carInfo);
  return (
    <>
      <p>hihi</p>;
    </>
  );
}

export default DetailPage;
